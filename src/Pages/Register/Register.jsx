import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser} = useContext(AuthContext)
    const handleSignUp = (e) =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       createUser(email,password)
  
       .then(result=>{
        const user = result.user;
        console.log(user)
       })
       .then(error=>{
        console.error(error)
       })

}
    return (
        <div className=" min-h-screen">
        <div className="">
          <div className="card shrink-0 w-full max-w-4xl py-20 mx-auto  lg:mt-40 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body ">
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-center mt-5">Already have an account <Link to='/login' className="text-blue-600">please Log in</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;