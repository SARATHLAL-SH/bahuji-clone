
var textarea = document.querySelector(".bsearch");
var arr = ["Home", "Wedding Collections", "New Arrivals", "Saree", "Handloom Silk", "On Sale", "Trending Sarees", "Lehanga Choli", "Sailwar Suit", "Happy Customers"];
// let bsearch = search.value.toLowerCase();
var myUl = document.querySelector("#bSearchlist");





let myArray = [];
textarea.addEventListener("input", () => {
    let textAreaValue = textarea.value.toLowerCase();
    myUl.innerHTML = "";
    if (textAreaValue !== "") {
        var myFilterArr = arr.filter(elment => elment.toLowerCase().includes(textAreaValue));
        var mylistleng = myFilterArr.length;


    }
    for (i = 0; i < mylistleng; i++) {
        let myList = document.createElement("li");

        myList.textContent = myFilterArr[i];
        myUl.appendChild(myList);
    }

});


document.addEventListener("DOMContentLoaded", function () {
    let pos = document.getElementById("pos");
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 350) {
            pos.style.position = "sticky";
            pos.style.top = 0;
            document.getElementById("pos").style.transition = "all 1s";
        }
        else {
            pos.style.position = "relative"
            document.getElementById("pos").style.transition = "";
        }
    };
});

