import React, { useEffect, useState } from "react";

export default function CarsFilterOption({ carsList, setBrand, orderCarList }) {
  const [brandList, setBrandList] = useState();
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered  max-w-xs"
          onChange={(e) => {
            orderCarList(e.target.value);
          }}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered whitespace-nowrap
        hidden w-[150px] md:block max-w-xs"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        >
          <option disabled selected>
            Manufactural
          </option>
          {brandList &&
            brandList.map((brand, index) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  );
}
