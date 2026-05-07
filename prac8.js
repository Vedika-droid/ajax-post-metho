function loadData() {

    alert("Button Clicked");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);

    xhr.onload = function () {

        alert("Response Received");

        document.getElementById("demo").innerHTML =
        xhr.responseText;

    };

    xhr.onerror = function () {

        alert("Error Loading File");

    };

    xhr.send();
}