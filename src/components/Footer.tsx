import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-20">
      <div className="flex justify-between">
        <div className="w-1/3 text-red-500 font-bold text-3xl dark:text-red-400">
          TakeUForward
        </div>
        <div className="w-2/3 flex text-white dark:text-gray-300 space-x-32">
          <div>
            <p className="text-xl font-bold dark:text-gray-100">Company</p>
            <div>
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Community</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold dark:text-gray-100">Contact</p>
            <div>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>GitHub</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold dark:text-gray-100">Support</p>
            <div>
              <p>Help Center</p>
              <p>Safety Center</p>
              <p>Community Guidelines</p>
              <p>Cookies</p>
              <p>Language</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-white dark:border-gray-700 py-4"></div>
      <div className="text-white dark:text-gray-400 py-4 flex justify-between">
        <div>
          <p>© 2023 TakeUForward. All rights reserved.</p>
        </div>
        <div>
          <p>548 Market St #75826 San Francisco, CA 94104</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
