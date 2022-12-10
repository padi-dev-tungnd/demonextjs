import React, { memo } from "react";
import UserItem from "./UserItem";

const UserList = ({ listUsers, handleDeleteUser, handleUpdateUser }) => {
  console.log("re-render Component UserList");
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primary">
                <tr>
                  <th scope="col" className="thTable">
                    Fullname
                  </th>
                  <th scope="col" className="thTable">
                    Address
                  </th>
                  <th scope="col" className="thTable">
                    Favourite
                  </th>
                  <th scope="col" className="thTable">
                    Edit
                  </th>
                  <th scope="col" className="thTable">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
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
                  <div>Chua co user nao! ...</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UserList);
