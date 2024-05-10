import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            {/* https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148423542.jpg?t=st=1715337413~exp=1715341013~hmac=53f383d90e738e76a5fc2ef7f1edb225a0a4b5827b63393ca305917a194d00ef&w=826 */}
            <div className="hero min-h-screen " style={{backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148423542.jpg?t=st=1715337413~exp=1715341013~hmac=53f383d90e738e76a5fc2ef7f1edb225a0a4b5827b63393ca305917a194d00ef&w=826)'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       <img className="h-[400px] w-[400px] lg:ml-20 rounded-3xl" src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1715337931~exp=1715341531~hmac=357a3e015c8bea109a2012e0251ec39cbc90287f0dd50c06cd4602b745778f0b&w=740" alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <form className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-center">Login</button>
                            </div>
                        </form>
                        <div className="text-center">
                        
                        <button className="btn btn-outline text-center mb-6 font-poppins"><span className="text-4xl"><FcGoogle /></span> Login with Google</button>
                        </div>
                        <div className="text-center mb-4">
                            <p>Have a Account? please <Link to='/login'><span className="text-blue-600 font-poppins">Login</span></Link></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;