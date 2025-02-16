import React from "react";

const TableList = () => {
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
          <tr>
            <td className="border px-4 py-2">Product 1</td>
            <td className="border px-4 py-2">Description 1</td>
            <td className="border px-4 py-2">$10.99</td>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product 1"
                width="50"
                height="50"
              />
            </td>
            <td className="flex flex-col items-center m-2 text-lg">
              <i className="fa-solid fa-pencil cursor-pointer"></i>
              <i className="fa-solid fa-trash-can text-red-500 pt-2 cursor-pointer"></i>
            </td>
          </tr>
          {/* {products.map((product, index) => (
      <tr key={index}>
        <td className="border px-4 py-2">{product.name}</td>
        <td className="border px-4 py-2">{product.description}</td>
        <td className="border px-4 py-2">{product.price}</td>
        <td className="border px-4 py-2">{product.quantity}</td>
        <td className="border px-4 py-2">
          <img src={product.imageUrl} alt={product.name} width="50" height="50" />
        </td>
      </tr>
    ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
