import { BookCreateContext } from "@/context/BookingCreateContext";
import { createBooking, getStoreLocations } from "@/services";
import React, { useContext, useEffect, useState } from "react";

export default function Form({ car }) {
  const [storeLocation, setStoreLocation] = useState([]);
  const { showToastMsg, setShowToastMsg } = useContext(BookCreateContext);
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "Firdi Audi",
    carId: "",
  });
  useEffect(() => {
    getStoreLocations__();
  }, []);

  useEffect(() => {
    if (car) {
      setFormValue({ ...formValue, carId: car.id });
    }
  }, [car]);

  const getStoreLocations__ = async () => {
    const res = await getStoreLocations();
    setStoreLocation(res.storesLocations);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createBooking(formValue);
    if (res) {
      setShowToastMsg(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select 
        select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location?
          </option>
          {storeLocation &&
            storeLocation.map((loc, index) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="dropOffTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type here"
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action ">
        <form method="dialog" className="flex gap-4">
          <button className="btn">Close</button>
          <button
            className="btn bg-blue-500 text-white
hover:bg-blue-800"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
