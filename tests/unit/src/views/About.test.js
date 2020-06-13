import About from '@/views/About.vue';

import testHelpers from '@@/testHelpers.js';

describe('About.vue', () => {
  let localVue;
  let store;
  let setup;

  let permissions = ['student'];

  beforeEach(() => {
    setup = testHelpers.setupTestVariables(permissions);
    localVue = setup.localVue;
    store = setup.store;
  });

  test('Renders correctly', async () => {
    const wrapper = await testHelpers.shallowMountWrapper(About, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
