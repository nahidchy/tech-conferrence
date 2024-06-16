import { useEffect } from 'react';
import logo from '../../assets/Tecon-Logo-Light-v2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
    return (
       <div  className='bg-white py-20 lg:py-40 text-black px-10 lg:px-20'>
         <footer className="footer ">
        <aside data-aos="fade-up" className="mx-auto">
        <img className='bg-black w-40 rounded p-3' src={logo} alt="" />
          <p className="text-slate-400 text-lg">We ignite the spark of innovation. Our platform brings,<br />together visionaries, creators, and industry leaders.</p>
        </aside> 
        <nav className="mx-auto text-slate-400">
          <h6 className="text-xl text-slate-900 font-bold">Company</h6> 
          <a className="hover:text-blue-600">Branding</a>
          <a className="hover:text-blue-600">Design</a>
          <a className="hover:text-blue-600">Marketing</a>
          <a className="hover:text-blue-600">Advertisement</a>
        </nav> 
        <nav className="mx-auto text-slate-400">
          <h6 className="text-xl text-slate-900 font-bold">Quick Links</h6> 
          <a className="hover:text-blue-600">About us</a>
          <a className="hover:text-blue-600">Contact</a>
          <a className="hover:text-blue-600">Jobs</a>
          <a className="hover:text-blue-600">Press kit</a>
        </nav> 
        <nav className="mx-auto text-slate-400">
          <h6 className="text-xl text-slate-900 font-bold">Support</h6> 
          <a className="hover:text-blue-600">Terms of use</a>
          <a className="hover:text-blue-600">Privacy policy</a>
          <a className="hover:text-blue-600">Cookie policy</a>
        </nav>
       
      </footer>
        <div data-aos="fade-down" className='mt-20'>
        <h2 className="text-3xl font-bold text-center">Subscribe To Our Newsletter!</h2>
         <div className='lg:w-1/2 mx-auto mt-10 space-y-10'>
         <input type="email" placeholder="Type here" className="w-full input  input-primary  bg-transparent p-5" />
         <button className='block text-white font-semibold mt-5 bg-purple-600 w-full p-5 rounded'>SUBSCRIBE</button>
         </div>
        </div>
        <div data-aos="fade-up" className='lg:w-4/5 flex flex-col lg:flex-row justify-center lg:justify-between mx-auto mt-20 border-purple-500 border border-t-4 px-2 lg:px-5 py-7 rounded-2xl'>
            <div className='flex justify-center gap-2 lg:gap-5'>
                <p>Privacy Policy</p>
                <p>Term & Services</p>
            </div>
            <div>
                <p className='text-center'>© 2024 Tecon by Nahid</p>
            </div>
        </div>
       </div>
    );
};

export default Footer;