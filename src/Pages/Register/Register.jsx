import { useContext, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [showPass, setShowPass] = useState(true);
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        // password validation
        if(password.length < 6){
            return toast.error('You should have at least 6 characters')
        }
        if(!/(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            return toast.error('You should have at least one uppercase & one lower case')
        }
        
        createUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "YAY",
                    text: "Registration Successful!",
                });
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

            })
            .catch(error => {
                console.error(error)
            })
            form.reset();
    }
    const handleShowPass = () => {
        setShowPass(!showPass)
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? 'password' : 'text'} name="password" placeholder="password" className="input input-bordered" required />
                                <div onClick={handleShowPass} className="absolute top-14 left-52">
                                    {
                                        showPass ? <HiEyeOff></HiEyeOff> : <HiEye> </HiEye>
                                    }
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link to='/login'>have an account ? <span className="text-green-500 font-bold">Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;