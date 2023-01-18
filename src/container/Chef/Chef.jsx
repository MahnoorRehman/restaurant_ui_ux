import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="image_chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className="headtext__cormorant">What we Believe In</h1>
      <div className="app__chef-content">\
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className='p__opensans'>
            It is a form of dummy text that has been used in</p>
        </div>
        <p className='p__opensans'>
          the typesetting industry for centuries.
          The text itself is nonsensical and consists of a random mix of Latin words.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div >
);

export default Chef;
