import { shallowMount } from '@vue/test-utils';
import CarViewRow from '@/components/CarViewRow.vue';

describe('CarViewRow.vue', () => {

  let car;
  let wrapper;

  beforeEach(() => {

    car = {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'white',
      price: 45000,
    };

    wrapper = shallowMount(
      CarViewRow,
      { propsData: { car } },
    );

  });

  it('renders props.car when passed', () => {

    const tdElements = wrapper.findAll('td');

    Object.keys(car).forEach((key, i) => {
      expect(tdElements.at(i).text()).toBe(String(car[key]));
    });

  });

  it('clicked the edit button of the view row', () => {

    const editButton = wrapper.find('button:first-child');

    editButton.trigger('click');

    expect(wrapper.emitted()['edit-car'][0]).toEqual([car.id]);
  });

  it('clicked the delete button of the view row', () => {

    const editButton = wrapper.find('button:last-child');

    editButton.trigger('click');

    expect(wrapper.emitted()['delete-car'][0]).toEqual([car.id]);
  });

});
