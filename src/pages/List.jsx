import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

const List = () => {
  const [items, setItems] = useState([]);

  // Fetch items from API
  const getAllItems = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/item/getAllItems",
      });
      setItems(response.data.items || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(dateString));
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 tracking-wide">
        Item List
      </h1>
      {items.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.vehicle}
                </h2>
                <p className="text-gray-700 mb-4">{item.item}</p>
                <p className="text-sm text-gray-500">
                  Added on:{" "}
                  <span className="font-medium text-gray-700">
                    {formatDate(item.date)}
                  </span>
                </p>
              </div>
              <div className="p-4 bg-gray-100 border-t border-gray-200">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No items available.</p>
      )}
    </div>
  );
};

export default List;
