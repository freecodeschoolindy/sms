import { routes } from '@/router/index.js';

describe('Router', () => {
  test('All routes have meta.group', () => {
    let validRoutes = routes.filter((route) => {
      return route?.meta?.groups.length;
    });

    expect(validRoutes.length)
      .toEqual(routes.length);
  });
});
