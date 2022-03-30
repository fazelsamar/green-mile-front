import http from "./httpService";

async function login(user) {
  try {
    const { data: token, status } = await http.post("/v1/account/login/", user);
    window.localStorage.setItem("token", token["token"]);
    if (status === 200) return true;
  } catch (e) {
    return false;
  }
  return false;
}

const exportedObject = {
  login,
};

export default exportedObject;
