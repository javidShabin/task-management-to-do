import React from 'react';
import { CheckCircle } from 'lucide-react'; // Import an icon for visual appeal
import { useDispatch } from 'react-redux';
import { checkIs } from '../redux/features/startSlice';

const GetStarted = () => {
  const dispatch = useDispatch()
  const getStartHandler = () => {
    dispatch(checkIs())
  }
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Get Started with To-Do App</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-md">
        Welcome to our To-Do App! Follow the steps below to get started and make your task management easier.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Steps to Get Started:</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-gray-700">Create an account to save your tasks.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-gray-700">Add your tasks and set deadlines.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-gray-700">Organize tasks by categories.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-gray-700">Check off tasks as you complete them!</span>
          </li>
        </ol>
      </div>

      <button onClick={getStartHandler} className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-24 rounded-xl transition duration-300">
        Get Started Now
      </button>
    </div>
  );
};

export default GetStarted;
