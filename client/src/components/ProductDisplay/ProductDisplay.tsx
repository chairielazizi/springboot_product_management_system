import React, { useState, useEffect } from "react";
import { API_URL, Product } from "../../api/config";

const ProductDisplay = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mx-auto my-5 sm:mx-6">
      <h2 className="text-2xl font-bold mb-4">Product Display</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-950 font-medium">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-sm mb-2">{product.description}</p>
            <p className="text-sm mb-2">Price: RM{product.price}</p>
            <p className="text-sm mb-2">Quantity: {product.quantity}</p>
            <img
              src={product.imageUrl || "https://dummyimage.com/300"}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
