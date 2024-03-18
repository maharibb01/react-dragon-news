import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photourl = form.get("photourl");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photourl, email, password);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="w-full md:w-3/4 lg:h-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photourl" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-10">Already have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;