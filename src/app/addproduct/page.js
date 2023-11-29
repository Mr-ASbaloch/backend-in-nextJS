"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  // const addProduct = async () => {
  //   console.log(name, price, color, company, category);
  //   let result = await fetch("http://localhost:3000/api/products", {
  //     method: "post",
  //     body: JSON.stringify({ name, price, color, company, category }),
  //   });
  //   result = await result.json();
  //   if (result.success) {
  //     alert("product added ");
  //   }
  // };
  const addProduct = async () => {
    console.log(name, price, color, company, category);
    try {
      let result = await fetch("http://localhost:3000/api/products", {
        method: "post",
        body: JSON.stringify({ name, price, color, company, category }),
      });
  
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
  
      result = await result.json();
  
      if (result.success) {
        alert("Product added");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  

  return (
    <div>
      <div>
        <section className="max-w-4xl  px-5 mx-5 p-6 md:mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            Add Products
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white dark:text-gray-200" for="username">
                  Name
                </label>
                <input
                  id="username"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter product name"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="emailAddress"
                >
                  Price
                </label>
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  placeholder="Enter product price"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" for="password">
                  Color
                </label>
                <input
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  placeholder="Enter product color"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Company
                </label>
                <input
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  placeholder="Enter product company"
                  id="passwordConfirmation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Category
                </label>
                <input
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  placeholder="Enter product category"
                  id="color"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={addProduct}
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                Add product
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default page;
