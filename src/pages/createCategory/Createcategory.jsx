import React, { useEffect } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateCategoryMutation } from "../../context/api/categoryApi";
import { toast } from "react-toastify";
const initial = {
  Category: "",
};
function Createcategory() {
  const { formData, handleChange, setFormData } = useGetInputValue(initial);
  const [createProduct, { isSuccess }] = useCreateCategoryMutation();
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
  return (
    <div>
      <div className="create">
        <h1>Create Category</h1>
        <form onSubmit={handleSubmit} action="">
          <p>Category</p>
          <input
            value={formData.Category}
            onChange={handleChange}
            required
            name="Category"
            type="text"
          />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default Createcategory;
