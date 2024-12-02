import React, { useContext } from 'react';
import NavBar from '../Components/NavBar';
import { AuthContex } from '../Providers/AuthProvider';

const SignIn = () => {
    const {signinUser} = useContext(AuthContex)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signinUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const lastSignInTime = user.metadata.lastSignInTime
            const loginInfo = {email, lastSignInTime}

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => console.log(data))


          })
          .catch((error) => {
            const errorMessage = error.message;
          });
        
    }
    return (
        <div className='w-[85%] mx-auto'>
            <nav>
                <NavBar></NavBar>
            </nav>
            <form onSubmit={handleSubmit} className="card-body bg-[#F4F3F0] my-20">
                <div>
                    <h2 className='text-5xl font-extrabold text-center mb-10'>Sign In</h2>
                    <p className='text-center text-lg text-gray-500 mb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Sign In" className="btn bg-[#D2B48C] text-black hover:bg-[#D2B48C] border-[#725f46] hover:border-[#725f46] btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default SignIn;