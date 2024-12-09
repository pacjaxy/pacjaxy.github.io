if (navigator.platform.indexOf("Win") !== -1) {
    ShowElementByID("WindowsLink");  // Pass the string "WindowsLink"
}

if (navigator.platform.indexOf("Mac") !== -1) {
    ShowElementByID("MacLink");  // Pass the string "MacLink"
}

function ShowElementByID(id) {
    var element = document.getElementById(id);
    if (element) {
        element.style.display = "block";  // Or any other method to show the element
    }
}
