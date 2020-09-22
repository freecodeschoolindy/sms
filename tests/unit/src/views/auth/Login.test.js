import Login from '@/views/auth/Login.vue';

import testHelpers from '@@/testHelpers.js';

describe('Login.vue', () => {
  let localVue;
  let store;
  let setup;
  let wrapper;

  let permissions = ['student'];

  beforeEach(async () => {
    setup = testHelpers.setupTestVariables(permissions);
    localVue = setup.localVue;
    store = setup.store;

    wrapper = await testHelpers.shallowMountWrapper(Login, {
      localVue,
      store
    });
  });

  test('Renders correctly', () => {
    expect(wrapper)
      .toMatchSnapshot();
  });

  test('Click login', () => {
    const button = wrapper.find('[data-test="loginButton"]');
    button.trigger('click');

    expect(window.location.href)
      .toEqual('https://github.com/login/oauth/authorize?client_id=b1566423c56583f16eb0');
  });
});
