import React from "react";
import "./Manageproduct.scss";
import ProductAdmin from "../../components/productAdmin/ProductAdmin";
import { useGetProductsQuery } from "../../context/api/productApi";
function Manageproduct() {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <div>
      <div className="manage">
        <h1>Manage product</h1>
        <ProductAdmin data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Manageproduct;
