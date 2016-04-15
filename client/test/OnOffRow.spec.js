import React from 'react';
import {render} from 'enzyme';

import {OnOffRow} from '../components/OnOffRow';

describe('<OnOffRow />', () => {

  it('should render 3 .onOff items', () => {
    const wrapper = render(<OnOffRow value={3} length={4} />);
    (wrapper.find('.onOff').length).should.equal(4);
    (wrapper.find('.on').length).should.equal(3);
    (wrapper.find('.off').length).should.equal(1);
  });

  it('should render handle too big a value .onOff items', () => {
    const wrapper = render(<OnOffRow value={170} length={88} />);
    (wrapper.find('.onOff').length).should.equal(88);
    (wrapper.find('.on').length).should.equal(88);
    (wrapper.find('.off').length).should.equal(0);
  });

  it('should render zero .on and 88 .onOff items', () => {
    const wrapper = render(<OnOffRow value={0} length={88} />);
    (wrapper.find('.onOff').length).should.equal(88);
    (wrapper.find('.on').length).should.equal(0);
    (wrapper.find('.off').length).should.equal(88);
  });

});
