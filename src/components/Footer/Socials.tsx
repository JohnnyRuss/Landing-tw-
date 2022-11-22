import React from "react";

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {[
        "/assets/icon-facebook.svg",
        "/assets/icon-youtube.svg",
        "/assets/icon-twitter.svg",
        "/assets/icon-pinterest.svg",
        "/assets/icon-instagram.svg",
      ].map((item, i) => (
        <figure className="cursor-pointer" key={`social-icon--${i}`}>
          <img src={item} alt="social icon" />
        </figure>
      ))}
    </div>
  );
};

export default Socials;
