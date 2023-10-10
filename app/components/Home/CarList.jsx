import React from "react";
import CarCard from "./CarCard";

export default function CarList({ carsList }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carsList.map((car, index) => (
        <div key={index}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}
