import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { render } from 'enzyme';
import Format2Json2View from './index';
import { testJson } from './mock';

Enzyme.configure({
                   adapter: new Adapter()
                 });


describe('test Format2Json2View', () => {
  it('renders the type of data to json', () => {
    const props = {
      data: testJson
    }
    const wrapper = render(<Format2Json2View {...props} />);
    expect(wrapper.find('.json').length).toBe(3)
    expect(wrapper.find('.array').length).toBe(3)
  });

  it('renders the type of string to json', () => {
    const props = {
      data: `{"a":1,"b":{"c":1},"d":[1,true,null,false,{"b":1}]}`
    }
    const wrapper = render(<Format2Json2View {...props} />)
    expect(wrapper.find('.json').length).toBe(3)
    expect(wrapper.find('.array').length).toBe(1)
  });
})

