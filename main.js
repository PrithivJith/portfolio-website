const ageElement = document.getElementById("age");
ageElement.innerText = new Date(Date.now()).getFullYear() - 2010;
const title = document.getElementById("title");
let count = 0;
setInterval(function () {
    if (count % 2 === 0) {
        title.innerHTML = "Hello, I'm<br />Prithiv Jith&nbsp;";
    } else {
        title.innerHTML = "Hello, I'm<br />Prithiv Jith|";
    }
    count++;
}, 600);



