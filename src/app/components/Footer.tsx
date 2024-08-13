import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#112d60] text-white py-6">
      <div className="w-full px-4 lg:px-24">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Help Center</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Air University™. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <BsFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
