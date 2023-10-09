import React from "react";

export default function CarsFilterOption() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered  max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select
          className="select select-bordered whitespace-nowrap
        hidden w-[150px] md:block max-w-xs"
        >
          <option disabled selected>
            Manufactural
          </option>
          <option>Honda</option>
          <option>BMW</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  );
}
