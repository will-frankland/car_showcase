"use client"
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-ard__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
        <p>
          <span>
            Car Rent...
          </span>
        </p>

      </div>
    </div>
  )
}

export default CarCard;
