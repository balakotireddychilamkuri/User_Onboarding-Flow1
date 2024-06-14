import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import axios from 'axios';

const PerDet = () => {
    const location = useLocation();
    const { email } = location.state || {};

    const [inputValue, setInputValue] = useState({
        name: '',
        gender: '',
        age: '',
        state: '',
        email
    });
    const [showGenderSelect, setShowGenderSelect] = useState(false);
    const [showAgeInput, setShowAgeInput] = useState(false);
    const [showStateInput, setShowStateInput] = useState(false);
    const [showAgeConfirmButton, setShowAgeConfirmButton] = useState(true);
    const [showNameLabel, setShowNameLabel] = useState(true);
    const [showGenderLabel, setShowGenderLabel] = useState(true);
    const [showAgeLabel, setShowAgeLabel] = useState(true);
    const [showStateLabel, setShowStateLabel] = useState(true);
    const [nameConfirmed, setNameConfirmed] = useState(false);
    const [genderConfirmed, setGenderConfirmed] = useState(false);
    const [ageConfirmed, setAgeConfirmed] = useState(false);
    const [stateConfirmed, setStateConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleConfirmName = () => {
        setShowGenderSelect(true);
        setShowNameLabel(false);
        setNameConfirmed(true);
    };

    const handleConfirmGender = () => {
        setShowAgeInput(true);
        setShowGenderLabel(false);
        setGenderConfirmed(true);
    };

    const handleConfirmAge = () => {
        setShowStateInput(true);
        setShowAgeLabel(false);
        setShowAgeConfirmButton(false);
        setAgeConfirmed(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Form Data:', inputValue);
            // Send form data to the backend
            const response = await axios.post('http://localhost:3500/store-data', inputValue);
            console.log('Response:', response.data);
            // Show an alert to confirm successful submission
            alert('Details submitted successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            // Alert the user about submission failure
            alert('Submission failed!');
        }
    };

    // Sample list of states in India
    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
        'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
        'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    return (
        <form onSubmit={handleSubmit}>
            <div className="fixed top-0 left-0 m-4 text-white">
                <h1 className='text-xl md:text-2xl'>Logo</h1>
            </div>
            <div className="w-screen h-screen bg-blue-800 flex justify-center items-center">
                <div className="w-full max-w-md bg-white rounded-lg p-8 m-4">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold">Let's get to know you better</h1>
                    </div>

                    <div className="mt-6">
                        {showNameLabel && (
                            <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">Hey there! What should I call you?</label>
                        )}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                placeholder="Hey there! What should I call you?"
                                className='w-full border-2 rounded-lg px-4 py-2 text-lg'
                                value={inputValue.name}
                                name='name'
                                onChange={handleChange}
                            />
                            {nameConfirmed && inputValue.name && <span className="text-green-500 absolute top-0 right-0 mt-2 mr-2">&#10004;</span>}
                        </div>
                        {!showGenderSelect && (
                            <div className='flex justify-end mt-4'>
                                <button
                                    type="button"
                                    className="text-blue-600 py-2 px-4 rounded-lg text-lg"
                                    onClick={handleConfirmName}
                                >
                                    Confirm
                                </button>
                            </div>
                        )}
                        {showGenderSelect && (
                            <>
                                {showGenderLabel && (
                                    <label htmlFor="gender" className="block text-left text-sm font-medium text-gray-700 mt-8">How do you identify?</label>
                                )}
                                <div className="relative">
                                    <select
                                        id="gender"
                                        className='w-full border-2 rounded-lg px-4 py-2 mt-1 text-lg'
                                        value={inputValue.gender}
                                        name='gender'
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    {genderConfirmed && inputValue.gender && <span className="text-green-500 absolute top-0 right-0 mt-2 mr-2">&#10004;</span>}
                                </div>
                                {!showAgeInput && (
                                    <div className='flex justify-end mt-4'>
                                        <button
                                            type="button"
                                            className="text-blue-600 py-2 px-4 rounded-lg text-lg"
                                            onClick={handleConfirmGender}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                )}
                                {showAgeInput && (
                                    <>
                                        {showAgeLabel && (
                                            <label htmlFor="age" className="block text-left text-sm font-medium text-gray-700 mt-4">How young are you? Let us know!</label>
                                        )}
                                        <div className="relative">
                                            <select
                                                name="age"
                                                className='w-full border-2 rounded-lg px-4 py-2 mt-1 text-lg'
                                                value={inputValue.age}
                                                onChange={handleChange}
                                            >
                                                {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
                                                    <option key={age} value={age}>{age}</option>
                                                ))}
                                            </select>
                                            {ageConfirmed && inputValue.age && <span className="text-green-500 absolute top-0 right-0 mt-2 mr-2">&#10004;</span>}
                                        </div>
                                        {showAgeConfirmButton && (
                                            <div className='flex justify-end mt-4'>
                                                <button
                                                    type="button"
                                                    className="text-blue-600 py-2 px-4 rounded-lg text-lg"
                                                    onClick={handleConfirmAge}
                                                >
                                                    Confirm
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}
                                {showStateInput && (
                                    <>
                                        {showStateLabel && (
                                            <label htmlFor="state" className="block text-left text-sm font-medium text-gray-700 mt-4">Where do you call home?</label>
                                        )}
                                        <div className="relative">
                                            <input
                                                list="indianStates"
                                                name="state"
                                                type="text"
                                                placeholder="Enter State"
                                                className='w-full border-2 rounded-lg px-4 py-2 mt-1 text-lg'
                                                value={inputValue.state}
                                                onChange={handleChange}
                                            />
                                            {stateConfirmed && inputValue.state && <span className="text-green-500 absolute top-0 right-0 mt-2 mr-2">&#10004;</span>}
                                        </div>
                                        <datalist id="indianStates">
                                            {indianStates.map((state) => (
                                                <option key={state} value={state} />
                                            ))}
                                        </datalist>
                                        <div className='flex justify-center mt-4'>
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg text-center text-lg"
                                            >
                                                Done
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PerDet;
