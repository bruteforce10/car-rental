"use client";
import { useEffect, useState } from "react";
import CarsFilterOption from "./components/Home/CarsFilterOption";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import { getCarList } from "@/services";
import CarList from "./components/Home/CarList";
import orderBy from "lodash/orderBy";
import ToastMsg from "./components/ToastMsg";
import { BookCreateContext } from "@/context/BookingCreateContext";

export default function Home() {
  const [carsList, setCarsList] = useState([]);
  const [carOrgList, setCarOrgList] = useState([]);
  const [showToastMsg, setShowToastMsg] = useState(false);

  useEffect(() => {
    getCarList_();
  }, []);

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(false);
      }, 3000);
    }
  }, [showToastMsg]);

  const getCarList_ = async () => {
    const result = await getCarList();
    setCarsList(result.carLists);
    setCarOrgList(result.carLists);
  };

  const filterCarList = (brand) => {
    const filterList = carOrgList.filter((car) => car.carBrand === brand);
    setCarsList(filterList);
  };

  const orderCarList = (order) => {
    const sortedData = orderBy(
      carOrgList,
      ["price"],
      [order == -1 ? "asc" : "desc"]
    );
    setCarsList(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreateContext.Provider value={{ showToastMsg, setShowToastMsg }}>
        <Hero />
        <SearchInput />
        <CarsFilterOption
          carsList={carOrgList}
          setBrand={(value) => filterCarList(value)}
          orderCarList={(value) => orderCarList(value)}
        />
        <CarList carsList={carsList} />
        {showToastMsg && <ToastMsg msg={"Booking Created Successfully"} />}
      </BookCreateContext.Provider>
    </div>
  );
}
