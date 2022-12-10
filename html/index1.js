const text = document.getElementById("text-id");
const pass = document.getElementById("password-id");
const button = document.querySelector("#button")
text.addEventListener("click",() => {
    alert('Hallo')
})

const inputName = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", (event) => {
    const value = event.target.value;
    if (value.length < 8) return;

    pass.innerHTML=value;
});

inputName.addEventListener("input", (event) => {
    const value = event.target.value;

    text.innerHTML=value;
});

const form = document.getElementById("list");
const inputTodo = document.getElementById("todo");
const buttonAdd = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valueInput = inputTodo.value;
    if (valueInput === "") return alert("Yeu cau nhap du");
    if (valueInput.length < 5) return alert("Nhap lon hon 5");

    
    const div = document.createElement("div")
    div.classList.add("todoing")
    div.innerHTML = `
        <h1>${valueInput}</h1>
        <h2> X </h2>
    `;
    console.log("submitted");
    document.querySelector("body").appendChild(div)

})
   
