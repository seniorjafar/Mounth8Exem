import React, { useEffect, useState } from "react";

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
        <img width={290} height={290} src={products.url[0]} alt="" />
      </NavLink>
      <h1>{products.title}</h1>
      <div className="d2" style={{display:'flex', justifyContent:'space-between'}}>
        <div>
          <del style={{color:'grey'}}>{Math.round(+products.price + 10)}$</del>
          <p style={{fontSize:'30px'}}>{products.price}$</p>
        </div>
        <div>
          <img
            onClick={() => setEditProduct(products)}
            style={{ marginRight: "10px", cursor: "pointer",border:'1px solid black', padding: "5px 11px",borderRadius:'15px'}}
            src={editadmin}
            alt=""
          />
          <img
            onClick={() => deleteProduct(products.id)}
            style={{ cursor: "pointer",  background:"black",padding: "8px 15px",borderRadius:'15px' }}
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
        <div style={{display:"flex", flexWrap:'wrap', gap:'40px',width:'100%'}}>
          <div  className={isLoading ? "loading" : "hide"}>
            {data?.map((load) => (
              <div key={load.id}>
               
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
