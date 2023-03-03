import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./userSlice";

const UserList = () => {
  const users = useSelector((store) => store.users);
  console.log(users);
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <Link to={`/edit-user/${user.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => handleRemoveUser(user.id)}>Delete</button>
      </div>
    ));

  return (
    <>
      <Link to="/add-user">
        <button>Add USERS</button>
      </Link>

      <div className="user-list">
        {users.length ? renderCard() : <p>NO USER</p>}
      </div>
    </>
  );
};
export default UserList;
