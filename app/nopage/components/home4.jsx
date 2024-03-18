"use client"
import Link from "next/link";

const csection = () => {
  return (
    <>
    <div className="bg-gray-800 text-white py-4 px-6 flex flex-col items-center lg:flex-row lg:justify-between mt-4">
      <div className="mb-4 lg:mb-0 flex items-center">
        <img src="https://via.placeholder.com/150" alt="Footer Logo" className="w-100 h-100 mr-2" />
        
      </div>
      <div className="text-center lg:text-right">
        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
    <div className="flex bg-gray-800 justify-center p-2">
    <Link  className="bg-blue-500 p-4  text-white px-4 py-2 rounded shadow " href="/create_design">
        Create your Design
      </Link>
    </div>
    </>
  );
};

export default csection;
