export const registerUser = async (user, cleanFormRegister) => {
  const url = `http://localhost:9000/api/auth/register`;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await resp.json();
  console.log(data);
  data.ok && cleanFormRegister();
  return data;
};

export const loginUser = async (user, navigate) => {
  const url = `http://localhost:9000/api/auth/login`;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await resp.json();
  console.log(data);
  if ( data.ok ){
    
  sessionStorage.setItem("user", `${data}`);
  navigate("/home")
  }
  return data;
};
