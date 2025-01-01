import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleFailure, handleSuccess } from "../utils";

// function Login() {
//   const [loginInfo, setLoginInfo] = useState({
//     // name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target; //what w etype  we r getting
//     const copyLoginInfo = { ...loginInfo };
//     copyLoginInfo[name] = value;
//     setLoginInfo(copyLoginInfo);
//     console.log(name, value);
//   };

//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // day2
//     // extract info from signupinfo
//     const { email, password } = loginInfo;
//     if (!email || !password) {
//       return handleFailure("email and password are required");
//     }

//     //do try catch if name email pass entered

//     try {
//       const url = "http://localhost:5000/auth/login";

//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(loginInfo),
//       }); //diwali did
//       const result = await response.json();

//       // we add jwttoken and name check
//       const { success, message, jwtToken, name, error } = result;
//       if (success) {
//         handleSuccess(message);
//         // before going
//         localStorage.setItem("token", jwtToken);
//         localStorage.setItem("loggedInUser", name);
//         setTimeout(() => {
//           navigate("/home");
//         }, 1500);
//       } else if (error) {
//         const details = error?.details[0].message;
//         handleFailure(details);
//       } else if (!success) {
//         handleFailure(message);
//       }
//     } catch (error) {
//       console.log(error);
//       handleFailure(error);
//     }
//   };

//   return (
//     // bg-green-100 background-image: linear-gradient(to right, var(--tw-gradient-stops))
//     <>
//       <div>
//         {/* left */}
//         {/* <div>
//           <img
//             src="src/assets/GFG_SC_LOGO.png"
//             alt="Sample"
//             className="w-full h-full object-cover opacity-80"
//           />
//         </div> */}
//         {/* right */}
//         <div>
//           <div className="  flex items-center justify-center min-h-screen bg-background-pattern1 bg-cover h-screen">
//             <div className=" bg-white/25 backdrop-blur-sm border-1 border-blue-950 drop-shadow-lg  flex flex-col items-center justify-center h-fit px-10 py-6 rounded-2xl ">
//               <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//                 Login
//               </h2>
//               <form method="post" action="#" onSubmit={handleLogin}>
//                 {/* <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700 "
//           >
//             Username
//           </label>
//           <input
//             onChange={handleChange}
//             type="text"
//             autoFocus
//             placeholder="Enter Username"
//             name="name"
//             value={loginInfo.name}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-3"
//           />
//         </div> */}

//                 <div>
//                   <label
//                     className="block text-sm font-medium text-black"
//                     htmlFor="email"
//                   >
//                     Email
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     type="email"
//                     autoFocus
//                     placeholder="Enter email"
//                     name="email"
//                     value={loginInfo.email}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  mb-3"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     className="block text-sm font-medium text-black"
//                     htmlFor="password"
//                   >
//                     Password
//                   </label>
//                   <input
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Enter password"
//                     name="password"
//                     value={loginInfo.password}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  mb-3"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-red-500 text-white p-1 rounded-md shadow-sm hover:bg-green-600 focus:outline-none  mt-6 text-center align-middle justify-center"
//                 >
//                   Login
//                 </button>
//                 <div className="m-2">
//                   <span>
//                     Don't have an account ?{" "}
//                     <Link
//                       className="text-white hover:underline hover:text-cyan-300"
//                       to="/signup"
//                     >
//                       Signup
//                     </Link>
//                   </span>
//                 </div>
//               </form>
//               <ToastContainer
//                 position="top-left"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 transition:Bounce
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    // name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //what w etype  we r getting
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
    console.log(name, value);
  };

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // day2
    // extract info from signupinfo
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleFailure("email and password are required");
    }

    //do try catch if name email pass entered

    try {
      const url = "http://localhost:5000/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      }); //diwali did
      const result = await response.json();

      // we add jwttoken and name check
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        // before going
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else if (error) {
        const details = error?.details[0].message;
        handleFailure(details);
      } else if (!success) {
        handleFailure(message);
      }
    } catch (error) {
      console.log(error);
      handleFailure(error);
    }
  };
  return (
    <div
      className="min-h-screen py-20"
      style={{ backgroundImage: "linear-gradient(115deg, #0F9D58, #A8E6CF)" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">
              Login to{" "}
              <span className="text-green-600 font-medium">
                gfgstudentchapterggv
              </span>
            </h2>
            <p className="mb-4">
              Log in to re-enter the Matrix
            </p>
            <form method="post" action="#" onSubmit={handleLogin}>
              {/* <div className="mt-5 text-inherit">
                <input
                  type="text"
                  onChange={handleChange}
                  autoFocus
                  placeholder="Enter Username"
                  name="name"
                  value={loginInfo.name}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div> */}
              <div className="mt-5">
                <input
                  type="email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={handleChange}
                  placeholder="Enter email"
                  name="email"
                  value={loginInfo.email}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={loginInfo.password}
                />
              </div>
              <div className="mt-5">
                <button
                  className="w-full bg-green-600 py-3 text-center text-white flex justify-center items-center"
                  type="submit"
                >
                  Login
                  <i className="fas fa-sign-in mx-2"></i>
                </button>
              </div>
              <p>
              Don't have an account ?{" "}
                <a href="/signup" className="text-green-800">
                  Click here.
                </a>
              </p>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-green-600" style={{backgroundImage: "url('https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-college-graduate_23-2148571733.jpg?t=st=1735649807~exp=1735653407~hmac=08a88fa677356286cf37e680d1cc4221cc650a96ce79299f96cd63e157aa6d6d&w=740')"}}>
            {/* <h2 className="text-2xl text-white font-bold mb-4 text-center">
              Welcome to{" "}
              <span className="text-white text-3xl">
                gfgstudentchapter<span className="text-red-600">ggv</span>
              </span>
            </h2>
            <p className="text-white">
              🚀 Get ready to learn and grow with us. 🌟
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
