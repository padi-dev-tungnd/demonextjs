import React, { useState } from "react";
import { Popconfirm } from "antd";
import FormUser from "./FormUser";

const UserItem = ({ user, handleDeleteUser, handleUpdateUser }) => {
  const [isModalFormUserOpen, setIsModalFormUserOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)

  const clickBtnUpdate = (data) => {
    setIsModalFormUserOpen(true)
    setCurrentUser(data)
  }

  return (
    <div className="flex">
      <div className="mr-5">{user.fullname}</div>
      <div className="mr-5">{user.address}</div>
      <div>{user.favourite}</div>

      <Popconfirm
        title="Ban co muon xoa user nay ko?"
        placement="rightTop"
        onConfirm={() => handleDeleteUser(user)}
        // onCancel={cancel}
        okText="Co"
        cancelText="Khong"
      >
        <button className="btn text-xs">Xoa</button>
      </Popconfirm>

      <button className="btn text-xs" onClick={() => clickBtnUpdate(user)}>Sua</button>
      <FormUser
        isModalFormUserOpen={isModalFormUserOpen}
        setIsModalFormUserOpen={setIsModalFormUserOpen}
        currentUser={currentUser}
        handleUpdateUser={handleUpdateUser}
      />
    </div>
  );
};

export default UserItem;
