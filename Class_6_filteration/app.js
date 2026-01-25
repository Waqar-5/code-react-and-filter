const input = document.getElementById("getdata");
const items = document.getElementsByClassName("li");

input.addEventListener("keyup", function () {
    const filter = input.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
});
