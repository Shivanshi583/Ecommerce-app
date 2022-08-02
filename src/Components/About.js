import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                <p className='lead mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
                </p>
                <NavLink to="/contact" className="btn btn-outline-primary px-3 mb-4">Contact Us</NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content center'>
                    <img  src="./Assets/ab.png" alt="about us" height="400px" width="400px"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About