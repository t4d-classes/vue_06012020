import { shallowMount } from '@vue/test-utils';
import CarForm from '@/components/CarForm.vue';

describe('CarViewRow.vue', () => {

  it('renders default props.buttonText', () => {

    const wrapper = shallowMount(
      CarForm,
    );

    const buttonElement = wrapper.find('button');

    expect(buttonElement.text()).toEqual('Submit Car');
  });

  it('renders props.buttonText when passed', () => {

    const buttonText = 'Add Car';

    const wrapper = shallowMount(
      CarForm,
      { propsData: { buttonText } },
    );

    const buttonElement = wrapper.find('button');

    expect(buttonElement.text()).toEqual(buttonText);
  });


  it('clicked the edit button of the view row', () => {

    const car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: '2020',
      color: 'white',
      price: '45000',
    };

    const wrapper = shallowMount(
      CarForm,
    );

    Object.keys(car).forEach(key => {
      wrapper.find(`input#car-${key}-input`).setValue(car[key]);
    });

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted()['submit-car'][0]).toEqual([car]);
  });

});
