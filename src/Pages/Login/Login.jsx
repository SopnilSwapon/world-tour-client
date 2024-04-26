import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {login} = useContext(AuthContext)
    const handleLogin = e => {
         e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const password = form.password.value;
         login(email, password)
         .then(result => {
            console.log(result.user);
            Swal.fire({
                icon: "success",
                title: "YAY",
                text: "Login Successful!",
            });
         })
         .catch(error => {
            console.error(error.message);
            toast.error('You have an wrong email & password')

         })
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password' name="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link to='/register'>have an account ? <span className="text-green-500 font-bold">Register</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;