import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div data-aos="fade-down" className="relative min-h-screen rounded overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(https://iili.io/d9uXGCg.md.jpg)" }}
      ></div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-center pt-10">
    <div className="space-y-10 p-8 z-20">
    <h5 className="text-blue-600 text-xl md:text-center">TECHNOLOGY CONFERENCE</h5>
        <h1 className="text-2xl lg:text-6xl md:text-center md:text-4xl font-bold text-white">
          Introducing The <br /> Next Phase Of <br /> Innovation.
        </h1>
        <p className="text-white md:text-center">
          From innovative ideas to digital excellence, join us in shaping the{" "}
          <br /> future of tech through insightful discussions and collaborative{" "}
          <br /> experiences.
        </p>
       <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
       <div className="space-y-5 lg:space-y-16 ">
          <div className="flex gap-10">
           <Link to='/about'> <button className="bg-purple-700 py-2 lg:py-4  text-nowrap  lg:px-14 px-5 text-white rounded font-semibold">
              About Us
            </button></Link>
          <Link to='/speakers'>
          <button className="lg:py-4 py-2  text-nowrap  lg:px-14 px-5 text-white rounded border-purple-600 border hover:bg-purple-600 font-semibold">
              EXPLORE MORE
            </button></Link>
          </div>
          <div className="flex items-center">
            <img
              className="w-14 h-14 border-black border-2  -mr-4 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="w-14 h-14 border-black border-2 -mr-4 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="w-14 h-14 border-black border-2  -mr-4 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="w-14 h-14 border-black border-2  -mr-4 object-cover rounded-full"
              src="https://media.istockphoto.com/id/1326973460/photo/happy-businessman-looking-at-camera-and-smiling-while-standing-at-isolated-white-background.jpg?s=1024x1024&w=is&k=20&c=3QhG6SUQLVWytrrd18Nw_rkRvmYY_dwUk03RYrDmulk="
              alt=""
            />
            <button className="font-semibold text-xl text-white bg-purple-600 w-14 h-14 border-black border-2 rounded-full">
              +
            </button>
            <div className="ml-10 space-y-2">
              <p className="text-2xl font-semibold text-purple-600">100 K+</p>
              <p className="text-white">Purchased tickets</p>
            </div>
          </div>
        </div>
        <div>
            <div className="flex gap-10 items-center border-white border p-4 rounded-2xl w-64 mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className=" text-white bg-purple-600 w-14 h-14 p-2 rounded-full">
  <path  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg> 
<div className="text-white">
    <p className="text-xl font-semibold">06 - 20</p>
    <p>December 2024</p>
</div>

            </div>
            <div className="flex gap-10 items-center border-white border p-4 rounded-2xl w-64">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white bg-purple-600 w-14 h-14 p-2 rounded-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

<div className="text-white">
    <p className="text-xl font-semibold">
    Space Plaza</p>
    <p>December 2024</p>
</div>

            </div>
        </div>
       </div>
    </div>
    <div>
        <img className="relative z-0 lg:top-32 lg:right-24" src="https://i.postimg.cc/gjgh4CQ4/business-meeting-conference-presentation-businessm-v2-RVQHXXT.png" alt="" />
    </div>
      </div>
    </div>
    );
};

export default Header;
