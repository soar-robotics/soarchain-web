import React from 'react';

const Slider = ({ bgImage }) => {
  return (
    <div className="slider d-flex w-100">
      <div
        className="picture h-100"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* <img src="/app_dev.png" className=" w-100 h-100" alt="" /> */}
      </div>
      <div className="content px-md-5 py-md-4 h-100 d-flex flex-column justify-content-between">
        <div className="content-title">Application Developers</div>
        <div className="content-p ">
          RSUs stores very diverse and rich data about the vehicles, drones,
          scooters, buildings, and in essence, any node in the smart city.{' '}
          <br />
          Developers will create applications and services to be used both by
          the vehicles and the 3rd parties such as insurance companies, micro
          lenders, DeFI platforms. <br /> Kozmito is the enabler for data
          access, application development, and data collection.
        </div>
        <div className="d-flex justify-content-between">
          <img src="prev_btn.png" className="cursor-pointer" alt="" />
          <img src="next_btn.png" alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
