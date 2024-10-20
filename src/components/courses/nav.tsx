import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Nav = () => {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-end items-center">
          <div className="flex space-x-7">
            <a href="#" className="text-black hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Courses
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Testimonials
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Blog
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              <div className="flex gap-3 items-center">
                <IoIosNotificationsOutline className="h-6 w-6" />
                <RxAvatar className="h-6 w-6" />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
