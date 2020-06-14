import BaseTextField from '@/components/utilities/BaseTextField.vue';

import testHelpers from '@@/testHelpers.js';

describe('BaseTextField.vue', () => {
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
    const wrapper = await testHelpers.shallowMountWrapper(BaseTextField, {
      localVue,
      store,
      propsData: {
        id: 'id',
        label: 'label',
        value: 'value'
      }
    });

    expect(wrapper)
      .toMatchSnapshot();
  });
});
