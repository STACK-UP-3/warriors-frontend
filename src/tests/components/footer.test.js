import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from '../../components/footer';

describe('Test <Footer/> Component', () => {
  it('Should render Footer with all nodes', () => {
    const footer = shallow(<Footer />);
    expect(toJson(footer)).toMatchSnapshot();
  });
});
