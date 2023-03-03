import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name } = existingUser;
  const [values, setValues] = useState({
    name: name,
  });
  const handleEditUser = () => {
    setValues({ name: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
      })
    );

    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Edit User Name"
        label="name "
        values={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <button onClick={handleEditUser}>Edit</button>
    </div>
  );
};

export default EditUser;
