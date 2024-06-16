import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Tecon-Logo-Light-v2.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Nav = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
        logOut()
        .then(result => {
          console.log(result.user)
        })
        .then(console.error())
  }
    const navLinks = <div className="md:flex gap-8 text-white text-xl font-semibold">
       <NavLink   to='/'  className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}><li>Home</li></NavLink>
       <NavLink to='/speakers'  className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}><li>Speakers</li></NavLink>
       <NavLink to='/about'  className={({ isActive }) => isActive ? 'text-yellow-500' : 'text-white'}><li>About</li></NavLink>
    </div>
    return (
        <div className="navbar bg-slate-700 px-5 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
         <Link to='/'><img className="w-20 md:w-40" src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ?  <button onClick={handleLogOut} className="btn bg-slate-800 text-white">Sign Out</button> :   <Link to='/login' className="btn bg-slate-800 text-white">Login</Link>
        }
        </div>
      </div>
    );
};

export default Nav;