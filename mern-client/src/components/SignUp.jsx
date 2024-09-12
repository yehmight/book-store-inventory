import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from '../assets/google-logo.svg';

const SignUp = () => {
  const { createUser, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      alert('Sign up successfully!!!');
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const result = await loginwithGoogle();
      const user = result.user;
      alert('Sign up successfully with Google!!!');
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                    required
                  />
                </div>
                <p>
                  If you have an account, please{' '}
                  <Link to="/login" className="text-blue-600 underline">login</Link> here
                </p>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-6 py-2"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="flex items-center">
                <img src={googleLogo} alt="Google logo" className="w-12 h-12 inline-block" />
                <span className="ml-2">Sign Up with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;





// import React, { useContext, useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthProvider';
// import googleLogo from "../assets/google-logo.svg"


// const SignUp = () => {
//   const {createUser, loginwithGoogle} = useContext(AuthContext);
//   const [error, setError] = useState("error");

// // login and direct you to home page
//   const location = useLocation();
//   const navigate = useNavigate(); 

//   const from = location.state?.from?.pathname || "/";

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     createUser(email,password).then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;

//       alert("Sign up successfully!!!")
//       navigate(from, {replace: true})
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setError(errorMessage)
//       // ..
//     });

//   }

//       // Sign Up Using Google Account
//       const handleRegister = () => {
//         loginwithGoogle().then((result) => {
//           const user = result.user;
//           alert("Sign up successfully!!!")
//       navigate(from, {replace: true})

//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           setError(errorMessage)
//           // ..
//         });
    
//       }

//   return (
    
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
//         </div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-2xl font-semibold">Sign Up Form</h1>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="relative">
//                   <input id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
//                 </div>
//                 <div className="relative">
//                   <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
//                 </div>
//                 <p>
//                   If you have an account, please <Link to="/login" className="text-blue-600
//                   underline ">login</Link> here
//                 </p>
//                 <div className="relative">
//                   <button className="bg-blue-500 text-white rounded-md px-6 py-2">Sign Up</button>
//                 </div>
//               </form>
//             </div>

//             <hr />
//             <div className='flex w-full items-center flex-col mt-5 gap-3'>
//             <button onClick={handleRegister} className='block'><img src={googleLogo} alt='' className='w-12 h-12 inline-block'/>Login with Google</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>



//     // <div className='min-h-screen  bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
//     //   <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
//     //     <div>

//     //     </div>

//     //   </div>
//     //   SignUp
//     // </div>
//   )
// }

// export default SignUp

