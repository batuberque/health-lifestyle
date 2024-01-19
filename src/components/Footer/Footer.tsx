import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-200 p-2 sm:p-4 shadow-up-md w-full flex justify-center items-center">
      <div className="container flex flex-col items-center justify-center bg-white-100 ">
        <div>
          <span className="text-xs sm:text-sm font-light justify-center">
            © {new Date().getFullYear()} SAĞLIKLI YAŞAM
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
