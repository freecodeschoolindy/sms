import BaseTable from '@/components/utilities/BaseTable.vue';

import testHelpers from '@@/testHelpers.js';

describe('BaseTable.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(BaseTable, {
      localVue,
      store
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
