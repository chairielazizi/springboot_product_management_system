import React from "react";
import { API_URL, Product } from "../../api/config";

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

  return (
    <div className="mx-auto mt-5">
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
        <tbody className="bg-slate-200 text-gray-900 font-semibold hover:bg-slate-300">
          {products.map((product, index) => (
            <tr key={index}>
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
                <i className="fa-solid fa-pencil cursor-pointer"></i>
                <i className="fa-solid fa-trash-can text-red-500 pt-2 cursor-pointer"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
