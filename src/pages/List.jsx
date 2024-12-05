import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import html2pdf from 'html2pdf.js';

const List = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
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

  // Handle item deletion with confirmation
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      try {
        await axiosInstance({
          method: "DELETE",
          url: `/item/deleteItem/${id}`,
        });
        setItems(items.filter((item) => item._id !== id)); // Remove item from state
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  // Download items list as PDF
  const downloadPDF = () => {
    const element = document.getElementById("items-list"); // Get the section you want to export
    html2pdf().from(element).save('items-list.pdf'); // Convert to PDF and save
  };

  useEffect(() => {
    getAllItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-orange-400">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 tracking-wide">
        Item List
      </h1>
      <button
        onClick={downloadPDF}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-6"
      >
        Download as PDF
      </button>

      <div id="items-list">
        {items.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
              >
                <button
                  onClick={() => handleDelete(item._id)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={24} />
                </button>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {item.vehicle}
                  </h2>
                  <p className="text-gray-700 mb-4">{item.item}</p>
                  <p className="text-sm text-gray-500">
                    Added on:{" "}
                    <span className="font-medium text-gray-700">
                      {formatDate(item.createdAt)}
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-gray-100 border-t border-gray-200">
                  <Link to={`/edit/${item._id}`}>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                      Edit Item
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No items available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
