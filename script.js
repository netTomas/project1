const btn = document.querySelector("button");

let number = 1;

const addCount = function () {
    const li = document.createElement("li");
    li.textContent = number;

    if (number%3 == 0) {
        li.classList.add("circle");
    }

    document.body.appendChild(li);
    number +=2;
}

btn.addEventListener("click", addCount); 


