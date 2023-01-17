import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the New Value" />
      <h1 className="app__header-h1">Key to Find Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        It is a form of dummy text
        that has been used in the typesetting industry for centuries. The text itself is
        nonsensical and consists of a random mix of Latin words.
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="Header Img" />
    </div>
  </div>
);

export default Header;
