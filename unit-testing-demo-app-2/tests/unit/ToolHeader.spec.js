import { shallowMount } from '@vue/test-utils';
import ToolHeader from '@/components/ToolHeader.vue';

describe('ToolHeader.vue', () => {

  it('renders default props.headerText ', () => {

    // arrange
    const headerText = 'The Tool';
    
    // act
    const wrapper = shallowMount(
      ToolHeader,
    );
    
    // assert
    expect(wrapper.find('h1').text()).toMatch(headerText);
  });

  it('renders props.headerText when passed', () => {

    // arrange
    const headerText = 'Color Tool';
    
    // act
    const wrapper = shallowMount(
      ToolHeader,
      { propsData: { headerText } },
    );
    
    // assert
    expect(wrapper.find('h1').text()).toMatch(headerText);
  });

});
