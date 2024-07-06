import React, { useEffect } from "react";
import "./EditProduct.scss";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useUpdateProductMutation } from "../../context/api/productApi";
import { toast } from "react-toastify";
function EditProduct({ editProduct, setEditProduct }) {
  const { data } = useGetCategoryQuery();
  let Category = data?.map((option) => (
    <option key={option.id} value={option.Category}>
      {option.Category}
    </option>
  ));
  let [update, { isLoading, isSuccess }] = useUpdateProductMutation();
  useEffect(() => {
    if (isSuccess) {
      setEditProduct(null);
      toast.success("Saved");
    }
  }, [isSuccess]);
  const handleupdate = (e) => {
    e.preventDefault();
    let Product = {
      title: editProduct.title,
      description: editProduct.description,
      price: editProduct.price,
      category: editProduct.category,
      image: editProduct.image,
    };
    update({ body: Product, id: editProduct.id });
  };
  return (
    <div>
      <div onClick={() => setEditProduct(null)} className="overlayedit"></div>
      <div className="editProduct">
        <div style={{ marginLeft: "0" }} className="create">
          <form onSubmit={handleupdate} action="">
            <p>Title</p>
            <input
              value={editProduct.title}
              onChange={(e) =>
                setEditProduct((prev) => ({ ...prev, title: e.target.value }))
              }
              required
              name="title"
              type="text"
            />
            <p>Price</p>
            <input
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct((prev) => ({ ...prev, price: e.target.value }))
              }
              required
              type="number"
              name="price"
              id=""
            />
            <p>Image-url</p>
            <input
              value={editProduct.image}
              onChange={(e) =>
                setEditProduct((prev) => ({ ...prev, image: e.target.value }))
              }
              readOnly
              type="text"
              name="image"
            />
            <p>Category</p>
            <select
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              required
              name="category"
              id=""
            >
              <option value="">All</option>
              {Category}
            </select>
            <p>Desc</p>
            <textarea
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required
              name="description"
              id=""
            ></textarea>
            <button disabled={isLoading}>
              {isLoading ? "Loading..." : "Save"}
            </button>
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => setEditProduct(null)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
