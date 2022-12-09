export const getUser = async () => {
  try {
    const response = await fetch(`http://localhost:4000/listuser`);
    return response.json();
  } catch (error) {
    return error;
  }
};

export const addUser = async (data) => {
  try {
    const response = await fetch("http://localhost:4000/listuser", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (data) => {
    try {
      const response = await fetch(`http://localhost:4000/listuser/${data.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      return response.json();
    } catch (error) {
      return error;
    }
  };
