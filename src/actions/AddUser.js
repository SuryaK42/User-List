import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
  });
  const handleAddUser = () => {
    setValues({ name: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <input
        type="text"
        name="name "
        values={values.name}
        placeholder="Type User Name"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <button onClick={handleAddUser}>ADD</button>
    </div>
  );
};

export default AddUser;
