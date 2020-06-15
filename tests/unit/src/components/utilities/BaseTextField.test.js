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

  function wrapperOptions () {
    return {
      localVue,
      store,
      propsData: {
        id: 'id',
        label: 'label',
        value: 'value'
      }
    };
  }

  test('Renders correctly', async () => {
    const wrapper = await testHelpers.shallowMountWrapper(BaseTextField, wrapperOptions());

    expect(wrapper)
      .toMatchSnapshot();
  });

  test('Input event to be emitted on change', async () => {
    const wrapper = await testHelpers.shallowMountWrapper(BaseTextField, wrapperOptions());

    const input = wrapper.find('[data-test="baseTextFieldInput"]');
    input.setValue('test');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input.length)
      .toEqual(1);

    expect(wrapper.emitted().input[0])
      .toEqual(['test']);
  });
});
