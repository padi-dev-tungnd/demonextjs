import React, { useState } from "react";
import { Popconfirm } from "antd";
import FormUser from "./FormUser";

const UserItem = ({ user, handleDeleteUser, handleUpdateUser }) => {
  const [isModalFormUserOpen, setIsModalFormUserOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const clickBtnUpdate = (data) => {
    setIsModalFormUserOpen(true);
    setCurrentUser(data);
  };

  return (
    <>
      <tr>
        <td className="tdTable">{user.fullname}</td>
        <td className="tdTable">{user.address}</td>
        <td className="tdTable">{user.favourite}</td>
        <td className="tdTable">
          <button className="btn text-xs" onClick={() => clickBtnUpdate(user)}>
            Sua
          </button>
        </td>
        <td className="tdTable">
          <Popconfirm
            title="Ban co muon xoa user nay ko?"
            placement="top"
            onConfirm={() => handleDeleteUser(user)}
            // onCancel={cancel}
            okText="Co"
            cancelText="Khong"
          >
            <button className="btn text-xs">Xoa</button>
          </Popconfirm>
        </td>
      </tr>

      <FormUser
        isModalFormUserOpen={isModalFormUserOpen}
        setIsModalFormUserOpen={setIsModalFormUserOpen}
        currentUser={currentUser}
        handleUpdateUser={handleUpdateUser}
      />
    </>
  );
};

export default UserItem;
