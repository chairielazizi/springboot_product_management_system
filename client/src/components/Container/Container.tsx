import React from "react";
import TableList from "../TableList/TableList";
import { API_URL } from "../../api/config";

const Container = () => {
  const fetchTableList = async () => {
    const res = await fetch(`${API_URL}/api/products`);
    const data = res.json();
    console.log(data);

    if (!res.ok) {
      console.log("Not able to retrieve products list");
    }
  };

  React.useEffect(() => {
    console.log("Container mounted");
    fetchTableList();
  }, []);
  return (
    <div>
      <TableList />
    </div>
  );
};

export default Container;
