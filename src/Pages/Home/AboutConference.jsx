import { Link } from "react-router-dom";

const AboutConference = () => {
    return (
        <div data-aos="fade-right" className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center lg:py-44 max-w-7xl mx-auto">
            <div className="space-y-7 text-center lg:text-start">
               <p className="text-blue-600 font-semibold">ABOUT CONFERENCE</p>
               <h2 className="text-4xl lg:text-5xl font-bold text-white">We Empower You To Shape The Future Of Technology.</h2>
               <p className="lg:text-xl">We ignite the spark of innovation. Our platform brings together visionaries, creators, and industry leaders. Through immersive sessions, workshops, and networking.</p>
              <Link to='/about'> <button className="bg-purple-600 text-white font-medium py-4 px-5 rounded-xl mt-5 lg:mt-0">Learn More</button></Link>
            </div>
            <div className="mb-20 lg:mb-0 px-5 lg:px-0">
               <img className="w-full rounded-xl" src="https://iili.io/d9uXGCg.md.jpg" alt="" />
            </div>
          
        </div>
    );
};

export default AboutConference;