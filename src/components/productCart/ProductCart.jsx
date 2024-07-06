import React from "react";
import "./ProductCart.scss";
import Delete from "../../assets/icon/delet.svg";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../../context/cartSlice";
import GetOrder from "../getOrder/GetOrder";
function ProductCart({ data }) {
  const dispatch = useDispatch();
  let cartList = useSelector((state) => state.cart.value);
  let total = cartList?.reduce(
    (sum, item) => sum + +item.price * item.quantity,
    0
  );
  let ProductCart = data?.map((cart) => (
    <div key={cart.id} className="productCart2">
      <img
        style={{ borderRadius: "15px" }}
        width={80}
        height={80}
        src={cart.image}
        alt=""
      />
      <div>
        <h1>{cart.title}</h1>
        <p>{Math.round(+cart.price * cart.quantity)}$</p>
      </div>
      <h2>{cart.description}</h2>
      <h3>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</h3>
      <div className="productCart4">
        <div className="productCart3">
          <button
            disabled={cart.quantity <= 1}
            onClick={() => dispatch(decrementCart(cart))}
          >
            -
          </button>
          <h4>{cart.quantity}</h4>
          <button onClick={() => dispatch(incrementCart(cart))}>+</button>
        </div>
        <img
          onClick={() => {
            dispatch(removeFromCart(cart));
            toast.success("Deleted");
          }}
          src={Delete}
          alt=""
        />
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="productCart">
        <div className="productCart1">
          <p>Фото</p>
          <p>Товары</p>
          <p style={{ marginLeft: "100px" }}>Описание</p>
          <p style={{ marginLeft: "173px" }}>Артикул</p>
          <p style={{ marginLeft: "160px" }}>Количество</p>
        </div>
        {ProductCart}
      </div>
      <GetOrder total={total} />
    </div>
  );
}

export default ProductCart;
