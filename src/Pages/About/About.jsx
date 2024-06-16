
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const About = () => {
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
        <div>
            <div data-aos="fade-down" className="hero" style={{backgroundImage: 'url(https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/03/diverse-business-people-applauding-in-front-of-div-P4SNX3F.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold brightness-200 py-36">About</h1>
    </div>
  </div>
</div>
<div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-24 text-center lg:text-start items-center py-10 lg:py-44 max-w-7xl mx-auto">
            <div className="space-y-7 px-5 lg:px-0">
               <p className="text-blue-600 font-semibold">ABOUT CONFERENCE</p>
               <h2 className="text-3xl lg:text-5xl font-bold text-white">We Empower You To Shape The Future Of Technology.</h2>
               <p className="text-lg lg:text-xl">We ignite the spark of innovation. Our platform brings together visionaries, creators, and industry leaders. Through immersive sessions, workshops, and networking.</p>
            </div>
            <div className="">
               <img className="w-full rounded-xl" src="https://iili.io/d9uXGCg.md.jpg" alt="" />
            </div>
        </div>
        <div data-aos="fade-right" className="grid grid-cols-2 px-5 lg:px-0 lg:grid-cols-4 gap-5 lg:gap-20 max-w-7xl mx-auto">
                     <div className="space-y-3">
                        <img className="w-20 h-28 object-cover" src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/Asset-152-CVN9775.png" alt="" />
                        <h4 className="text-2xl text-white font-medium">Authentic Insights</h4>
                        <h4 className="text-xl  font-medium">Industry leaders spill the beans.</h4>

                     </div>
                     <div className="space-y-3">
                        <img className="w-20 h-28 object-cover" src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/Asset-155-CVN9775.png" alt="" />
                        <h4 className="text-2xl text-white font-medium">Innovation Hub</h4>
                        <h4 className="text-xl  font-medium">Where breakthroughs happen.</h4>

                     </div>
                     <div className="space-y-3">
                        <img className="w-20 h-28 object-cover" src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/Asset-151-CVN9775.png" alt="" />
                        <h4 className="text-2xl text-white font-medium">Trending Topics</h4>
                        <h4 className="text-xl  font-medium">Stay ahead of the curve.</h4>

                     </div>
                     <div className="space-y-3">
                        <img className="w-20 h-28 object-cover" src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/Asset-154-CVN9775.png" alt="" />
                        <h4 className="text-2xl text-white font-medium">Unleash Your Potential</h4>
                        <h4 className="text-xl  font-medium">Because tech never sleeps.</h4>

                     </div>
                  
        </div>


             <div className="max-w-7xl mx-auto my-36">
                <div data-aos="fade-left" className="text-center space-y-5">
                <h4 className="text-blue-600 text-xl font-semibold">WHY ATTEND?</h4>
                <h4 className="text-white text-3xl lg:text-6xl font-bold">Discover Our Essential Tech Conference.</h4>
                </div>
                <div data-aos="zoom-in" className="grid grid-cols-1  lg:grid-cols-3 gap-5 lg:gap-16 mt-20">
                  <div className="space-y-5 border-2 border-t-8 border-purple-700 rounded-2xl p-3">
                  <h2 className="text-6xl text-blue-600 font-extrabold">01</h2>
                  <div className="divider divide-purple-700"></div>
                  <h4 className="text-white text-3xl font-semibold">Innovation</h4>
                  <p>Discover the latest trends and innovations shaping the tech industry today.</p>
                  </div>
                  <div className="space-y-5 border-2 border-t-8 border-purple-700 rounded-2xl p-3">
                  <h2 className="text-6xl text-blue-600 font-extrabold">02</h2>
                  <div className="divider divide-purple-700"></div>
                  <h4 className="text-white text-3xl font-semibold">Networking</h4>
                  <p>Engage with leaders, experts, and peers for collaboration and growth.</p>
                  </div>
                  <div className="space-y-5 border-2 border-t-8 border-purple-700 rounded-2xl p-3">
                  <h2 className="text-6xl text-blue-600 font-extrabold">03</h2>
                  <div className="divider divide-purple-700"></div>
                  <h4 className="text-white text-3xl font-semibold">Education</h4>
                  <p>Acquire valuable insights through keynote talks, workshops, and panel discussions.</p>
                  </div>
                  <div className="space-y-5 border-2 border-t-8 border-purple-700 rounded-2xl p-3">
                  <h2 className="text-6xl text-blue-600 font-extrabold">04</h2>
                  <div className="divider divide-purple-700"></div>
                  <h4 className="text-white text-3xl font-semibold">Inspiration</h4>
                  <p>Listen to narratives and experiences from industry pioneers, igniting inspiration.</p>
                  </div>
                  <div className="space-y-5 border-2 border-t-8 border-purple-700 rounded-2xl p-3">
                  <h2 className="text-6xl text-blue-600 font-extrabold">05</h2>
                  <div className="divider divide-purple-700"></div>
                  <h4 className="text-white text-3xl font-semibold">Exposure</h4>
                  <p>Display your offerings to a specific audience, obtaining feedback and acknowledgment.</p>
                  </div>
                  <div className="space-y-5 border-2 border-t-8 border-purple-700 rounded-2xl p-3">
                  <h2 className="text-6xl text-blue-600 font-extrabold">06</h2>
                  <div className="divider divide-purple-700"></div>
                  <h4 className="text-white text-3xl font-semibold">Collaboration</h4>
                  <p>Engage in hackathons, challenges, or joint initiatives to innovate and address issues.</p>
                  </div>
                </div>
            </div>


        </div>
    );
};

export default About;