import React, { FormEvent, useState } from "react";

import { API_URL } from "../../api/config";
import { useNavigate } from "react-router";

const productStartingData = {
  name: "",
  description: "",
  price: 0,
  quantity: 0,
  imageUrl: "",
};

const ProductForm = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(productStartingData);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`${API_URL}/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      console.log("Product created successfully");
      navigate("/");
    } else {
      console.log("Error creating product");
    }
  };

  const handleChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div className="mx-auto my-5 text-amber-50 bg-cyan-800 w-1/2 rounded-2xl p-5">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={product.name}
            onChange={handleChange}
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={product.description}
            onChange={handleChange}
            name="description"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            value={product.price}
            onChange={(event) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                price: Number(event.target.value),
              }))
            }
            name="price"
            required
            min={0}
            step={0.01}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3   leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            type="number"
            value={product.quantity}
            onChange={(event) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                quantity: Number(event.target.value),
              }))
            }
            name="quantity"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="imageUrl"
            type="text"
            value={product.imageUrl}
            onChange={handleChange}
            name="imageUrl"
          />
        </div>
        <button
          type="submit"
          className="bg-violet-900 text-white px-4 py-2 rounded-md hover:bg-violet-700 cursor-pointer"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
