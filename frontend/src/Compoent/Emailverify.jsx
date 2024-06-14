import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi'; // Import icons from react-icons library

const EmailVerify = () => {
    const [emails, setEmails] = useState('');
    const [otpNumber, setOtpNumber] = useState(null);
    const [enteredOtp, setEnteredOtp] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const generateOtp = () => {
        if (!emails) {
            setEmailError('Please enter email');
            return;
        }
        setEmailError('');
        // Generate a random four-digit number for OTP
        const otp = Math.floor(1000 + Math.random() * 9000);
        setOtpNumber(otp);
        // Show the OTP in an alert for simplicity (you would typically send this via email)
        alert(`Your OTP is ${otp}`);
    };

    const handleContinueClick = (event) => {
        event.preventDefault();
        if (!emails) {
            setEmailError('Please enter email');
            return;
        }
        setEmailError('');
        // Check if entered OTP matches the generated OTP
        if (otpNumber === parseInt(enteredOtp)) {
            alert('OTP verification successful');
            navigate('/ProsonDetail', { state: { email: emails } });
        } else {
            alert('Incorrect OTP');
            // Handle incorrect OTP scenario
        }
    };

    const handleInputChange = (event) => {
        setEmails(event.target.value);
    };

    const isEmail = (input) => {
        return /\S+@\S+\.\S+/.test(input);
    };

    return (
        <>
            <div className="fixed top-0 left-0 m-4 text-white">
                <h1 className='text-xl md:text-2xl'>Logo</h1>
            </div>
            <div className="w-screen h-screen bg-blue-800 flex justify-center items-center">
                <div className="w-full max-w-md bg-white rounded-lg p-8 m-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Verify Email Address</h1>
                        <p className="mt-4">We have emailed you a one-time password to</p>
                    </div>

                    <div className="mt-6 relative">
                        {isEmail(emails) ? (
                            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        ) : (
                            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        )}
                        <input
                            type="text"
                            placeholder="Enter Email or Phone Number"
                            className='w-full border-2 rounded-lg pl-10 pr-4 py-2 text-lg'
                            name="email"
                            value={emails}
                            onChange={handleInputChange}
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>

                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            className='w-full border-2 rounded-lg px-4 py-2 text-lg'
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                        />
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button 
                            className="text-blue-500 text-lg "  
                            onClick={generateOtp}
                        >
                            Resend OTP
                        </button>
                    </div>

                    <div className="mt-4 flex justify-center">
                        <button 
                            className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg text-lg" 
                            onClick={handleContinueClick}
                        >
                            Continue
                        </button>
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

export default EmailVerify;
