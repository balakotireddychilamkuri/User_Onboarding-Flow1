import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const LoginPage = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [inputType, setInputType] = useState(''); // New state to track input type
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Determine the input type
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setInputType('email');
        } else if (/^\d+$/.test(value)) {
            setInputType('phone');
        } else {
            setInputType('user');
        }
    };

    const handleContinueClick = async () => {
        console.log('Input Value:', inputValue);
        if (inputValue) {
            try {
                const response = await axios.get("http://localhost:3500/data");
                const data = response.data;
                console.log('Fetched Data:', data);
                // Check if the email exists in the fetched data
                const isEmailAvailable = data.some(item => item.email === inputValue);
                if (!isEmailAvailable) {
                    // Email is not available, prompt user to sign up
                    setIsSignUp(true);
                    setErrorMessage('User does not exist. Continue to sign up');
                } else {
                    // Email exists, navigate to sign up
                    setErrorMessage('');
                    navigate('/Signup');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorMessage('Error fetching data. Please try again.');
            }
        } else {
            // No input value
            setErrorMessage('Please enter your phone no or email');
        }
    };

    return (
        <>
            <div className="fixed top-4 left-4 m-4 text-white  md:text-2xl">
                <h1 className=''>Logo</h1>
            </div>
            <div className="w-screen h-screen bg-blue-800 flex justify-center items-center">
                <div className="w-full md:max-w-md bg-white rounded-lg p-8 m-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Sign in or Sign up</h1>
                        <p className="mt-4">Sign in or sign up using your mobile no. or email</p>
                    </div>

                    <div className="mt-6 relative">
                        <input
                            type="text"
                            placeholder="Enter Email or Mobile number"
                            className={`w-full border-2 rounded-lg pl-12 pr-4 py-2 text-lg ${
                                errorMessage ? 'border-red-500 text-red-500' : 'border-gray-300'
                            }`}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <div className="absolute top-0 left-0 h-full flex items-center pl-3">
                            {inputType === 'email' && <FaEnvelope className="text-gray-400" />}
                            {inputType === 'phone' && <FaPhone className="text-gray-400" />}
                            {!inputType && <FaUser className="text-gray-400" />}
                        </div>
                    </div>
                    {errorMessage && (
                        <div className="mt-2 text-red-600 text-sm text-left">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mt-4 flex justify-center">
                        {isSignUp ? (
                            <button
                                className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg text-lg"
                                onClick={() => navigate('/emailverify')}
                            >
                                Sign up
                            </button>
                        ) : (
                            <button
                                className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg text-lg"
                                onClick={handleContinueClick}
                            >
                                Continue
                            </button>
                        )}
                    </div>

                    <div className="mt-4 text-center text-sm">
                        <p>By continuing, you agree to YaT’s Terms & Conditions and Privacy Policy.</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                        <div className="border-t border-black w-1/4"></div>
                        <div className="mx-4 font-bold">or Continue with</div>
                        <div className="border-t border-black w-1/4"></div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <img
                            src="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png"
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                        <img
                            src="https://i.pinimg.com/originals/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.png"
                            alt="Twitter"
                            className="w-8 h-8 mx-4"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WwgH7Nl5_AW9nDCnR2Ozb_AU3rkIbSJdAg&s"
                            alt="Google"
                            className="w-8 h-8"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
