import React, { useEffect } from "react";
import "./EditProduct.scss";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useUpdateProductMutation } from "../../context/api/productApi";
import { toast } from "react-toastify";
function EditProduct({ editProduct, setEditProduct }) {
  const { data : categorys } = useGetCategoryQuery();
  let category_edit = categorys?.map(category => (
    <option key={category.id}>{category.title}</option>
  ))
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
    url: editProduct.url[0],
  };
  update({ body: Product, id: editProduct.id });
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: name === "url" ? value : e.target.value,
  });
};


  return (
    <div>
      <div onClick={() => setEditProduct(null)} className="overlayedit"></div>
      <div className="editProduct" style={{zIndex:'-0'}}>
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
  value={editProduct.url[0] || ""} // agar massiv bo'sh bo'lsa, bo'sh qator ko'rsatiladi
  onChange={(e) =>
    setEditProduct((prev) => ({ ...prev, url: [e.target.value] }))
  }
  readOnly
  type="text"
  name="url"
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
              {category_edit}
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
