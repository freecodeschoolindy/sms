import store from '@/store/index.js';
import { routes, loadUser, checkRoutePermissions } from '@/router/index.js';

describe('Router', () => {
  beforeEach(() => {
    store.state.currentUser = {};
  });

  describe('Routes', () => {
    test('All routes have meta.group', () => {
      let validRoutes = routes.filter((route) => {
        return route?.meta?.groups.length;
      });

      expect(validRoutes.length)
        .toEqual(routes.length);
    });
  });

  describe('loadUser', () => {
    const to = {};
    const from = {};
    const next = jest.fn();

    test('Stores data in the state', () => {
      loadUser(to, from, next);

      expect(store.state.currentUser)
        .toEqual({
          firstName: 'Jane',
          lastName: 'Doe',
          preferredName: 'Janey',
          email: 'janedoe@example.com',
          groups: 'student',
          id: 20
        });
    });

    test('Skips network request if currentUser is already loaded', () => {
      store.state.currentUser = { id: 3 };
      const spyCommit = jest.spyOn(store, 'commit');

      loadUser(to, from, next);

      expect(spyCommit)
        .not.toHaveBeenCalled();
    });
  });

  describe('checkRoutePermissions', () => {
    function setState (groups) {
      store.state.currentUser = { groups };
    }
    const to = {
      meta: {
        groups: ['student']
      }
    };
    const next = jest.fn();

    test('Correct permissions', () => {
      setState('student');

      checkRoutePermissions(to, null, next);

      expect(next)
        .toHaveBeenCalledWith();
    });

    test('Incorrect permissions', () => {
      setState('unassigned');

      checkRoutePermissions(to, null, next);

      expect(next)
        .toHaveBeenCalledWith('/access-denied');
    });
  });
});
