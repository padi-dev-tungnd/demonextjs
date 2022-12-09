import React, { memo } from "react";
import UserItem from "./UserItem";

const UserList = ({ listUsers, handleDeleteUser, handleUpdateUser }) => {
  console.log("re-render Component UserList");
  return (
    <div>
      {listUsers.length > 0 ? (
        listUsers.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            handleDeleteUser={handleDeleteUser}
            handleUpdateUser={handleUpdateUser}
          />
        ))
      ) : (
        <div>Chua co user nao ...</div>
      )}
    </div>
  );
};

export default memo(UserList);
