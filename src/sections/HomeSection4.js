/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../css/HomeSection4.css'
import { FaStar } from 'react-icons/fa';
import Image4 from '../images/trailer-1-555x335.png';

function HomeSection4() {
  return (
    <div className='homeSection4'>
        <div className='container'>
          <div className='row'>
            <h1>COMING SOON</h1>
            <div className='row'>
              <div className='left1 col-lg-6 col-md-12 col-sm-12'>
               <h2>FANTASY, SCI-FI, ACTION</h2>
               <h3>Colliding planets</h3>
               <i className='stars'><FaStar/></i>
               <i className='stars'><FaStar/></i>
               <i className='stars'><FaStar/></i>
               <i className='stars'><FaStar/></i>
               <i className='stars'><FaStar/></i>
               <span>2 October, 2019</span>
               <p>Claritas est etiam processus dynamicus, qui sequitur <br/> mutationem consuetudium lectorum. Mirum est notare <br/> quam littera gothica, quam nunc putamus parum claram,<br/> anteposuerit litterarum formas humanitatis per seacula <br/> quarta decima et quinta decima.</p>
               <h4>MORE INFO</h4>
              </div>
              <div className='right1 col-lg-6 col-md-12 col-sm-12'>
               <div className='right1-image'>
                <img src={Image4} />
               </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeSection4