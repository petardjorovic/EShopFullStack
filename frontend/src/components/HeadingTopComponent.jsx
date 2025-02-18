import React from "react";

// icons
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";

function HeadingTopComponent() {
  return (
    <div className="bg-whiteTextColor h-[90px]">
      <div className="container mx-auto h-full flex-col gap-[10px] md:flex-row flex-center md:justify-between">
        <h3>Need help? Call us: (+98) 0123 456 789</h3>
        <div className="flex-center gap-[50px]">
          <div className="flex-center gap-[10px] cursor-pointer">
            <CiLocationOn size={24} color="black" />
            <span>Our store</span>
          </div>
          <div className="flex-center gap-[10px] cursor-pointer">
            <CiDeliveryTruck size={24} color="black" />
            <span>Track your order</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingTopComponent;
