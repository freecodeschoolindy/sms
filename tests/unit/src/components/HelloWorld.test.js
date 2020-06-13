import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('Renders correctly', () => {
    const wrapper = shallowMount(HelloWorld);

    expect(wrapper)
      .toMatchSnapshot();
  });
});
