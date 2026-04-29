import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="gap-12 items-center bg-indigo-700 text-white flex h-70 wi-full justify-between px-6 ">
        <div>
          <h2>Movie Z </h2>
          <p> 2024 Movie Z . All right Reserved. </p>
        </div>
        <div>
          <h2>Contact information </h2>
          <div>
            <p>Email:</p>
            <p>support@movieZ.com</p>
          </div>
          <div>
            <p>Phone:</p>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <div>
          <h2> Follow us</h2>
          <div>
            <p>Facebook</p>
            <p>instagram </p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
