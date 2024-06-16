const GetStarted = () => {
    return (
        <div data-aos="zoom-in" className="relative bg-cover bg-center my-32" style={{ backgroundImage: 'url(https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/businesswoman-raising-hand-in-business-seminar-in-MBUFWVE.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-5 lg:gap-28 justify-center items-center max-w-7xl mx-auto py-20 px-5 lg:px-0">
                <div className="lg:relative top-20">
                    <img src="https://flex.emjecreative.com/tecon/wp-content/uploads/sites/10/2024/02/smiling-speaker-gesturing-and-talking-into-microph-V89SY7V.png" alt="Speaker" />
                </div>
                <div className="space-y-5">
                    <p className="text-xl font-semibold text-blue-600">GET STARTED</p>
                    <h2 className="text-5xl font-bold text-white">Improve Your Skills Under Expert Guidance!</h2>
                    <p className="text-white">Our conference features keynote speeches, panel discussions, and workshops led by seasoned professionals.</p>
                    <button className="text-white font-semibold bg-purple-600 py-4 px-8 rounded-xl">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;