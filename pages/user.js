import React, { useState } from "react";
import FormUser from "../components/User/FormUser";
import UserList from "../components/User/UserList";
import { addUser, deleteUser, getUser, updateUser } from "../lib/userApi";

const user = ({ users }) => {
  const [isModalFormUserOpen, setIsModalFormUserOpen] = useState(false);
  const [listUsers, setListUsers] = useState(users);

  const handleAddUser = async (newuser) => {
    const newUserFromDb = await addUser(newuser);
    setListUsers([...listUsers, newUserFromDb]);
  };

  const handleDeleteUser = async (currentuser) => {
    await deleteUser(currentuser);
    const newUserFromDb = await getUser();
    setListUsers(newUserFromDb);
  };

  const handleUpdateUser = async (currentuserupdated) => {
    const currentUserFromDb = await updateUser(currentuserupdated);

    const newListUsers = listUsers.filter((user) => {
      return user.id !== currentUserFromDb.id;
    });

    setListUsers([...newListUsers, currentUserFromDb]);
  };

  return (
    <>
      <h1 className="mt-6 text-cyan-900">CRUD List</h1>

      <button
        className="btn mt-12 mb-6"
        onClick={() => setIsModalFormUserOpen(true)}
      >
        Add user
      </button>

      <UserList
        listUsers={listUsers}
        handleDeleteUser={handleDeleteUser}
        handleUpdateUser={handleUpdateUser}
      />

      <FormUser
        isModalFormUserOpen={isModalFormUserOpen}
        setIsModalFormUserOpen={setIsModalFormUserOpen}
        handleAddUser={handleAddUser}
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
