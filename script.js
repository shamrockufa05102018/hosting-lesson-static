const yearElement = document.querySelector("#year");
const statusText = document.querySelector("#statusText");
const checkButton = document.querySelector("#checkButton");

yearElement.textContent = new Date().getFullYear();

checkButton.addEventListener("click", () => {
  statusText.textContent = "Статус: страница открылась, JavaScript работает";
  checkButton.textContent = "Проверено";
});
