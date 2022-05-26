import React from 'react';
import shape2 from '../../Assete/Image/shape-2.png'
const Footer = () => {
    return (
        <div>
            <footer  className="footer p-10 my-10" style={{

background:`url(${shape2})`,
backgroundSize:'cover',
opacity:.7,

}}>
<div>
<span className="footer-title">Services</span> 
<a className="link link-hover">Branding</a>
<a className="link link-hover">Design</a>
<a className="link link-hover">Marketing</a>
<a className="link link-hover">Advertisement</a>
</div> 
<div>
<span className="footer-title">Company</span> 
<a className="link link-hover">About us</a>
<a className="link link-hover">Contact</a>
<a className="link link-hover">Jobs</a>
<a className="link link-hover">Press kit</a>
</div> 
<div>
<span className="footer-title">Legal</span> 
<a className="link link-hover">Terms of use</a>
<a className="link link-hover">Privacy policy</a>
<a className="link link-hover">Cookie policy</a>
</div>
</footer>
<div>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
</div>
        </div>
    );
};

export default Footer;