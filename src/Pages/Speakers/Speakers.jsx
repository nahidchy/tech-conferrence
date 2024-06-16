import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Speakers = () => {
    const [speakers,setSpeakers] = useState([]);
    useEffect(()=>{
     fetch('speaker.json')
     .then(res=>res.json())
     .then(data => setSpeakers(data))
    },[])
    useEffect(() => {
        AOS.init({
          duration: 1000, // Global duration of animations in milliseconds
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
      const { pathname } = useLocation();

      useEffect(() => {
          window.scrollTo(0, 0);
      }, [pathname]);
  
    return (
        <div className="md:p-5">
            <div data-aos="fade-down" className="hero" style={{backgroundImage: 'url(https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/businesswoman-raising-hand-in-business-seminar-in-MBUFWVE.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold brightness-200 py-36">Speakers</h1>
    </div>
  </div>
</div>
<div className="max-w-7xl mx-auto px-5 lg:px-0 py-28">
<div data-aos="fade-up" className="text-center space-y-3 lg:space-y-6 ">
                <h5 className="text-lg font-medium text-blue-600">OUR SPEAKERS</h5>
                
            <h2 className="text-3xl lg:text-5xl font-bold  text-white">Meet Our Event Speakers.</h2>
            <p>Get inspired by leading figures in the tech industry as they share their insights and expertise.</p>
            </div>
            <div data-aos="fade-right" className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 mt-24">
                {
                    speakers.map(speaker => <div key={speaker.id} className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                        <img src={speaker.speaker_img} alt="" />
                        <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">{speaker.speaker_name}</p>
                        <p>{speaker.speaker_position}</p>
                         <Link to={`/speakers/${speaker.id}`}><button className="bg-purple-500 text-white font-medium py-2 px-4 rounded-xl mt-5">See Details</button></Link>
                    </div>
                    </div>)
                }

            </div>
</div>
        </div>
    );
};

export default Speakers;