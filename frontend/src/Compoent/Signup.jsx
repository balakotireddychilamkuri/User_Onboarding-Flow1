import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [passwordOrOtp, setPasswordOrOtp] = useState('');
  const [useOtp, setUseOtp] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOrOtpChange = (e) => {
    setPasswordOrOtp(e.target.value);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Email:', email);
    console.log('Password or OTP:', passwordOrOtp);
    // You can add more logic to sign up the user

    // Navigate to the login page after successful sign-up
    navigate('/loginpage');
  };

  const handleUseOtpInstead = () => {
    setUseOtp(!useOtp);
  };

  const handleResendOtp = () => {
    // Handle resend OTP logic here
    console.log('Resend OTP');
  };

  return (
    <div className="relative w-screen h-screen bg-blue-800 flex justify-center items-center">
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg p-8 m-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Sign in</h1>
          <p className="mt-2 text-gray-600">Using your Mobile no or email</p>
        </div>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full border-2 rounded-lg px-4 py-2 text-lg"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mt-4">
          <input
            type={useOtp ? 'text' : 'password'}
            placeholder={useOtp ? 'Enter OTP' : 'Enter Password'}
            className="w-full border-2 rounded-lg px-4 py-2 text-lg"
            value={passwordOrOtp}
            onChange={handlePasswordOrOtpChange}
          />
        </div>

        <div className="mt-4 flex justify-between">
          <button className="text-blue-500 text-lg" onClick={handleUseOtpInstead}>
            {useOtp ? 'Use Password instead' : 'Use OTP instead'}
          </button>
          {useOtp && (
            <button className="text-blue-500 text-lg" onClick={handleResendOtp}>
              Resend OTP
            </button>
          )}
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg text-center text-lg"
            onClick={handleSignUp}
          >
            Sign in
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-gray-400 w-1/4"></div>
          <div className="mx-4 font-bold text-gray-600">or Continue with</div>
          <div className="border-t border-gray-400 w-1/4"></div>
        </div>

        <div className="mt-6 flex justify-center">
          <img
            src="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png"
            alt="Facebook"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          />
          <img
            src="https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png"
            alt="Twitter"
            className="w-8 h-8 mx-4 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WwgH7Nl5_AW9nDCnR2Ozb_AU3rkIbSJdAg&s"
            alt="Google"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
