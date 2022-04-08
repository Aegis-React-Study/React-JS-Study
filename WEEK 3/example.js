const number = document.getElementById("number");
const add_btn = document.getElementById("add");
const sub_btn = document.getElementById("sub");

function handleAddClick() {
  number.innerHTML = Number(number.innerHTML) + 1;
}

const handleSubClick = () => {
  number.innerHTML = Number(number.innerHTML) - 1;
};

add_btn.addEventListener("click", handleAddClick);
sub_btn.addEventListener("click", handleSubClick);
