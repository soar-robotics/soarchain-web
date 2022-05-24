import React from 'react';

const Card = ({ title, iconPath, children }) => {
  return (
    <div className="card-holder w-100 bg-card text-center d-flex flex-column justify-content-between py-5 px-4">
      <div className="icon h-50">
        <img src={iconPath} alt="Card" />
      </div>
      <div className="h-50">
        <div className="card-title">{title}</div>
        <div className="card-p">{children}</div>
      </div>
    </div>
  );
};

export default Card;
