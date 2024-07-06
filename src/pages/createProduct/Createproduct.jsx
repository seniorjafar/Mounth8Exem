import React, { useEffect } from "react";
import "./Createproduct.scss";
import { useGetCategorysQuery } from "../../context/api/productApi";
import { useCreateProductMutation } from "../../context/api/productApi";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { toast } from "react-toastify";
const initial = {
  title: "",
  price: "",
  description: "",
  url:["https://i.ibb.co/hyry0rJ/my.jpg"],
  category: "",
};
function Createproduct() {
    const { data : categorys } = useGetCategorysQuery()
  const [createProduct, { isSuccess }] = useCreateProductMutation();
  const { formData, setFormData } = useGetInputValue(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(formData);
  };
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: name === "url" ? value : e.target.value,
  });
};


  useEffect(() => {
    if (isSuccess) {
      setFormData(initial);
      toast.success("Created");
    }
  }, [isSuccess]);


  let category_edit = categorys?.map(category => (
    <option key={category.id}>{category.title}</option>
  ))
  return (
    <div className="create">
      <h1>Create product</h1>
      <form onSubmit={handleSubmit} action="">
        <p>Title</p>
        <input
          value={formData.title}
          onChange={handleChange}
          required
          name="title"
          type="text"
        />
        <p>Price</p>
        <input
          value={formData.price}
          onChange={handleChange}
          required
          type="number"
          name="price"
          id=""
        />
        <p>Image-url</p>
        <input
  value={formData.url[0] || ""} // agar massiv bo'sh bo'lsa, bo'sh qator ko'rsatiladi
  onChange={(e) => handleChange({ target: { name: "url", value: [e.target.value] } })}
  type="text"
  name="url"
/>


        <p>Category</p>
        <select
          value={formData.category}
          onChange={handleChange}
          required
          name="category"
          id=""
        >
          <option value="">All</option>
          {category_edit}
        </select>
        <p>Desc</p>
        <textarea
          value={formData.description}
          onChange={handleChange}
          required
          name="description"
          id=""
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}

export default Createproduct;
