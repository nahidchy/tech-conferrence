import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {logIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    const handleLogIn = (e) =>{
            e.preventDefault();
           const email = e.target.email.value;
           const password = e.target.password.value;
           logIn(email,password)
           .then(result=>{
            const user = result.user;
            navigate(location?.state ? location.state : '/')
            console.log(user)
           })
           .then(error=>{
            console.error(error)
           })
    }
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className=" min-h-screen">
  <div className="">
    <div className="card shrink-0 w-full max-w-4xl py-20 mx-auto  lg:mt-40 shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body ">
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  type="email" name="email" placeholder="email" className="input input-bordered" required  />
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center mt-5">New to this website <Link to='/register' className="text-blue-600">please register</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;