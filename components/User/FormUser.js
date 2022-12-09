import React, { useState, useEffect, memo } from "react";
import { Form, Input, Modal, Select } from "antd";

const FormUser = ({
  isModalFormUserOpen,
  setIsModalFormUserOpen,
  handleAddUser,
  currentUser,
  handleUpdateUser,
}) => {
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("Ha Noi");
  const [favourite, setFavourite] = useState("");

  console.log("re-render Component FormUser");

  const handleSubmit = () => {
    if (handleAddUser) {
      handleAddUser({
        fullname,
        address,
        favourite,
      });
    }
    if (handleUpdateUser) {
      handleUpdateUser({
        id: currentUser.id,
        fullname,
        address,
        favourite,
      });
    }

    setIsModalFormUserOpen(false);
  };

  const handleCancel = () => {
    setIsModalFormUserOpen(false);
  };

  useEffect(() => {
    if (currentUser) {
      setFullname(currentUser.fullname);
      setAddress(currentUser.address);
      setFavourite(currentUser.favourite);
    }
    return () => {
      setFullname("");
      setAddress("Ha Noi");
      setFavourite("");
    };
  }, [isModalFormUserOpen]);

  return (
    <Modal
      title="Add User"
      open={isModalFormUserOpen}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item label="Fullname">
          <Input
            placeholder="Nguyen Danh Tung"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Address">
          <Select
            className="w-[100%]"
            value={address}
            onChange={(e) => setAddress(e)}
            options={[
              {
                value: "Ha Noi",
                label: "Ha Noi",
              },
              {
                value: "Hai Phong",
                label: "Hai Phong",
              },
              {
                value: "Hoa Binh",
                label: "Hoa Binh",
              },
              {
                value: "Hung Yen",
                label: "Hung Yen",
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Favourite">
          <Input
            placeholder="Football"
            value={favourite}
            onChange={(e) => setFavourite(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(FormUser);
