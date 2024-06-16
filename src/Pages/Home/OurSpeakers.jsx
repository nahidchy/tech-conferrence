import { Link } from "react-router-dom";

const OurSpeakers = () => {
    return (
        <div data-aos="fade-left" className="max-w-7xl mx-auto">
            <div className="text-center space-y-3 lg:space-y-6 px-2 lg:px-0">
                <h5 className="text-lg font-medium text-blue-600">OUR SPEAKERS</h5>
                
            <h2 className="text-2xl lg:text-5xl font-bold  text-white">Meet Our Event Speakers.</h2>
            <p>Get inspired by leading figures in the tech industry as they share their insights and expertise.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-16 mt-24 px-5 lg:px-0">
            <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                    <img className="w-64"  src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/businesswoman-with-curly-blonde-hair-indoors-in-ro-v2-ZSTS232.png" alt="" />
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">Sarah Smith</p>
                        <p>CEO, TECH INNOVATIONS INC.</p>
                    </div>
                </div>
                <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                    <img className="w-64"  src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/mature-businessman-with-grey-hair-and-beard-in-for-DP69V4D.png" alt="" />
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">Kevin Thompsonh</p>
                        <p>CEO, SILICON VALLEY LABS</p>
                    </div>
                </div>
                <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                    <img className="w-64"  src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/confident-entrepreneur-posing-for-photography-7FGYHMQ.png" alt="" />
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">Jessica Patel
                        </p>
                        <p>CEO, DATA DYNAMICS</p>
                    </div>
                </div>
                <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                    <img className="w-64"  src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/happy-business-man-arms-crossed-and-studio-portra-NNRFL53.png" alt="" />
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">Michael Johnson</p>
                        <p>CEO, NEXTGEN ROBOTICS</p>
                    </div>
                </div>
                <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                    <img className="w-64"  src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/smiling-confident-latin-professional-mature-busine-3BUE4B2.png" alt="" />
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">Amanda Martinez</p>
                        <p>CEO, CLOUDWARE TECH</p>
                    </div>
                </div>
                <div className="border-purple-600 bg-white border rounded-2xl border-t-4 mx-auto py-10 px-20">
                    <img className="w-64"  src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/successful-businessman-ATWJ8VM.png" alt="" />
                    <div className="border-purple-600 border rounded-2xl border-t-4 text-center p-3">
                        <p className="text-xl text-black">David Lee</p>
                        <p>CEO, QUANTUM COMPUTING CORP.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
               <Link to='/speakers'> <button className="bg-purple-600 py-3 px-5 rounded-xl text-white font-medium mt-10">View All Speakers</button></Link>
            </div>
        </div>
    );
};

export default OurSpeakers;