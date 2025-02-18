import React from "react";
import { API_URL, Product } from "../../api/config";
import { Link } from "react-router";

const TableList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const fetchTableList = async () => {
    const res = await fetch(`${API_URL}/api/products`);
    if (!res.ok) {
      console.log("Not able to retrieve products list");
    }

    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  React.useEffect(() => {
    console.log("TableList mounted");
    fetchTableList();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await fetch(`${API_URL}/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Product deleted successfully");
      fetchTableList();
    } else {
      console.log("Error deleting product");
    }
  };

  return (
    <div className="mx-auto mt-5 sm:mx-4 md:mx-auto lg:mx-auto xl:mx-auto">
      <div className="flex justify-end mb-4">
        <Link
          to="/product-form"
          className="bg-violet-900 text-white px-4 py-2 rounded-md hover:bg-violet-700"
        >
          Create Product
        </Link>
      </div>
      <table className="table-auto w-full rounded-2xl overflow-hidden">
        <thead className="bg-violet-900">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="bg-slate-300 text-gray-900 font-semibold">
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-slate-100 border">
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2">
                <img
                  src={product.imageUrl || "https://dummyimage.com/50"}
                  alt={product.name}
                  width="50"
                  height="50"
                />
              </td>
              <td className="flex flex-col items-center m-2 text-lg">
                <Link to={`/product-form/${product.id}`}>
                  <i className="fa-solid fa-pencil cursor-pointer"></i>
                </Link>
                <button onClick={() => handleDelete(product.id)}>
                  <i className="fa-solid fa-trash-can text-red-500 pt-2 cursor-pointer"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
