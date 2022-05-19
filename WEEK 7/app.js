const loginId = document.getElementById("login-id");
const loginPassword = document.getElementById("login-password");
const form = document.getElementById("login");

const result = document.getElementById("result");

const correctId = "root";
const correctPwd = "1234";

const handleLogin = (e) => {
  e.preventDefault();
  const id = loginId.value;
  const pwd = loginPassword.value;
  const message = document.createElement("h1");

  if ((id === correctId) & (pwd === correctPwd)) {
    message.innerHTML = "입력 id: " + id + "입력 pwd: " + pwd + "결과: 성공!";
  } else {
    message.innerHTML = "입력 id: " + id + "입력 pwd: " + pwd + "결과: 실패";
  }
  result.appendChild(message);
};

form.addEventListener("submit", handleLogin);
