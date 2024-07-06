import React, { useEffect } from "react";
import "./Createproduct.scss";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useGetCategorysQuery } from "../../context/api/productApi";
import { useCreateProductMutation } from "../../context/api/productApi";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { toast } from "react-toastify";
const initial = {
  title: "",
  price: "",
  description: "",
  image:
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
  category: "",
};
function Createproduct() {
  const { data } = useGetCategoryQuery();
    const { data : categorys } = useGetCategorysQuery()
  const [createProduct, { isSuccess }] = useCreateProductMutation();
  const { formData, handleChange, setFormData } = useGetInputValue(initial);
  let category = data?.map((option) => (
    <option key={option.id} value={option.Category}>
      {option.Category}
    </option>
  ));
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(formData);
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
          value={formData.image}
          onChange={handleChange}
          readOnly
          type="text"
          name="image"
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
