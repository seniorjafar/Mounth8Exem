import React, { useEffect, useState } from "react";
import ProductImg from "../../assets/image/kat1.png";
import { NavLink } from "react-router-dom";
import deleteadmin from "../../assets/icon/delet.svg";
import editadmin from "../../assets/icon/edit.svg";
import { useDeleteProductMutation } from "../../context/api/productApi";
import { toast } from "react-toastify";
import EditProduct from "../editProduct/EditProduct";
function Product({ data, isLoading }) {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted");
    }
  }, [isSuccess]);
  let Products = data?.map((products) => (
    <div key={products.id} className="d1">
      <NavLink to={`/product/${products.id}`}>
        <img width={290} height={290} src={products.url[1]} alt="" />
      </NavLink>
      <h1>{products.title}</h1>
      <div className="d2">
        <div>
          <del>{Math.round(+products.price + 10)}$</del>
          <p>{products.price}$</p>
        </div>
        <div>
          <img
            onClick={() => setEditProduct(products)}
            style={{ marginRight: "10px", cursor: "pointer",}}
            src={editadmin}
            alt=""
          />
          <img
            onClick={() => deleteProduct(products.id)}
            style={{ cursor: "pointer",  background:"black" }}
            src={deleteadmin}
            alt=""
          />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="d">
          <div className={isLoading ? "loading" : "hide"}>
            {data?.map((load) => (
              <div key={load.id}>
                <div className="sk1"></div>
                <div className="sk2"></div>
                <div className="sk3"></div>
                <div className="sk3"></div>
              </div>
            ))}
          </div>
          {Products}
        </div>
      </div>
      {editProduct ? (
        <EditProduct
          editProduct={editProduct}
          setEditProduct={setEditProduct}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Product;
