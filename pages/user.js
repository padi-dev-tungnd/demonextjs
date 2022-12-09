import React, { useState } from "react";
import FormUser from "../components/User/FormUser";
import UserList from "../components/User/UserList";
import { addUser, deleteUser, getUser } from "../lib/userApi";

const user = ({ users }) => {
  const [isModalFormUserOpen, setIsModalFormUserOpen] = useState(false);
  const [listUsers, setListUsers] = useState(users);

  const showModalFormUser = () => {
    setIsModalFormUserOpen(true);
  };

  const handleAddUser = async (newuser) => {
    const newUserFromDb = await addUser(newuser);
    setListUsers([...listUsers, newUserFromDb]);
  };

  const handleDeleteUser = async (currentuser) => {
    await deleteUser(currentuser);
    const newUserFromDb = await getUser();
    setListUsers(newUserFromDb);
  };

  const handleUpdateUser = (currentuserupdated) => {
    console.log(currentuserupdated);
  };

  return (
    <>
      <h1 className="mt-6 text-cyan-900">CRUD List</h1>

      <button className="btn mt-12 mb-6" onClick={showModalFormUser}>
        Add user
      </button>
      <FormUser
        isModalFormUserOpen={isModalFormUserOpen}
        setIsModalFormUserOpen={setIsModalFormUserOpen}
        handleAddUser={handleAddUser}
      />

      <UserList
        listUsers={listUsers}
        handleDeleteUser={handleDeleteUser}
        handleUpdateUser={handleUpdateUser}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const users = await getUser();

  return {
    props: {
      users,
    },
  };
};

export default user;
