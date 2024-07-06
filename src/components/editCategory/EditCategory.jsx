import React, { useEffect } from "react";
import "./EditCategory.scss";
import { useUpdateCategoryMutation } from "../../context/api/categoryApi";
import { toast } from "react-toastify";
function EditCategory({ setEditCategory, editCategory }) {
  let [update, { isLoading, isSuccess }] = useUpdateCategoryMutation();
  useEffect(() => {
    if (isSuccess) {
      setEditCategory(null);
      toast.success("Saved");
    }
  }, [isSuccess]);
  const handleupdate = (e) => {
    e.preventDefault();
    let category = {
      Category: editCategory.Category,
    };
    update({ body: category, id: editCategory.id });
  };
  return (
    <div>
      <div onClick={() => setEditCategory(null)} className="overlayedit"></div>
      <div style={{ height: "240px" }} className="editProduct">
        <div style={{ marginLeft: "0" }} className="create">
          <form onSubmit={handleupdate} action="">
            <p>Category</p>
            <input
              value={editCategory.title}
              onChange={(e) =>
                setEditCategory((prev) => ({
                  ...prev,
                  Category: e.target.value,
                }))
              }
              required
              type="text"
              name="Category"
            />
            <button disabled={isLoading}>
              {isLoading ? "Loading..." : "Save"}
            </button>
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => setEditCategory(null)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
