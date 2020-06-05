import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {

  it('async dom update 1', (done) => {

    const wrapper = shallowMount(
      Counter,
    );

    expect(wrapper.find('p').text()).toEqual('0');
    
    wrapper.find('button').trigger('click');

    wrapper.vm.$nextTick().then(() => {

      expect(wrapper.find('p').text()).toEqual('1');

      done();
    });

  });

  it('async dom update 2', () => {

    const wrapper = shallowMount(
      Counter,
    );

    expect(wrapper.find('p').text()).toEqual('0');
    
    wrapper.find('button').trigger('click');

    return wrapper.vm.$nextTick().then(() => {

      expect(wrapper.find('p').text()).toEqual('1');
    });

  });

  it('async dom update 3', async () => {

    const wrapper = shallowMount(
      Counter,
    );

    expect(wrapper.find('p').text()).toEqual('0');
    
    wrapper.find('button').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.find('p').text()).toEqual('1');

  });


});
