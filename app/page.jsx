"use client";
import { useEffect, useState } from "react";
import CarsFilterOption from "./components/Home/CarsFilterOption";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import { getCarList } from "@/services";
import CarList from "./components/Home/CarList";

export default function Home() {
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarList();
    setCarsList(result.carLists);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption />
      <CarList carsList={carsList} />
    </div>
  );
}
