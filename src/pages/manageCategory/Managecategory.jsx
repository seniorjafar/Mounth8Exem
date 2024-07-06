import React, { useEffect, useState } from "react";
import "./Managecategory.scss";
import {
  useGetCategoryQuery,
  useDeleteCategoryMutation,
} from "../../context/api/categoryApi";
import deleteadmin from "../../assets/icon/delet.svg";
import editadmin from "../../assets/icon/edit.svg";
import { toast } from "react-toastify";
import EditCategory from "../../components/editCategory/EditCategory";
function Managecategory() {
  const [editCategory, setEditCategory] = useState(null);
  const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation();
  const { data } = useGetCategoryQuery();
  let Categories = data?.map((el) => (
    <div key={el.id} className="manageCategory1">
      <p>{el.title}</p>
      <div className="manageCategory2">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => setEditCategory(el)}
          src={editadmin}
          alt=""
        />
        <img
          style={{ cursor: "pointer",background:"black" }}
          onClick={() => deleteCategory(el.id)}
          src={deleteadmin}
          alt=""
        />
      </div>
    </div>
  ));
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted");
    }
  }, [isSuccess]);
  return (
    <div>
      <div className="manageCategory">
        <h1>Manage Category</h1>
        {Categories}
      </div>
      {editCategory ? (
        <EditCategory
          editCategory={editCategory}
          setEditCategory={setEditCategory}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Managecategory;
