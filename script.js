/* =================================
MOBILE MENU
================================= */

function toggleMobileMenu() {


const menu =
    document.getElementById("mobileNav");

if (menu) {
    menu.classList.toggle("show");
}


}

/* =================================
CLOSE MOBILE MENU
================================= */

function closeMobileMenu() {


const menu =
    document.getElementById("mobileNav");

if (menu) {
    menu.classList.remove("show");
}


}

/* =================================
LOGIN
================================= */

function loginUser(event) {


event.preventDefault();

const username =
    document.getElementById("username").value.trim();

const password =
    document.getElementById("password").value.trim();

if (!username || !password) {

    showMessage(
        "Please enter username and password.",
        "error"
    );

    return false;
}

/*
   Demo login only.

   Replace this section with your
   actual authentication system.
*/

showMessage(
    "Login successful.",
    "success"
);

setTimeout(function() {

    window.location.href =
        "engineer.html";

}, 800);

return false;


}

/* =================================
GPS
================================= */

function getLocation(action) {


const status =
    document.getElementById("locationStatus");

if (!status) {
    return;
}

if (!navigator.geolocation) {

    status.innerHTML =
        "GPS is not supported by this browser.";

    return;
}

status.innerHTML =
    "📍 Getting your location...";

navigator.geolocation.getCurrentPosition(

    function(position) {

        const latitude =
            position.coords.latitude;

        const longitude =
            position.coords.longitude;

        const accuracy =
            position.coords.accuracy;

        const now =
            new Date();

        status.innerHTML =
            "<b>" + action + "</b><br>" +

            "Latitude: " +
            latitude.toFixed(6) +
            "<br>" +

            "Longitude: " +
            longitude.toFixed(6) +
            "<br>" +

            "Accuracy: " +
            Math.round(accuracy) +
            " meters<br>" +

            "Time: " +
            now.toLocaleString();

    },

    function(error) {

        let message =
            "Unable to get location.";

        if (error.code === 1) {
            message =
                "Location permission was denied.";
        }

        if (error.code === 2) {
            message =
                "Location is unavailable.";
        }

        if (error.code === 3) {
            message =
                "Location request timed out.";
        }

        status.innerHTML =
            "⚠️ " + message;
    },

    {
        enableHighAccuracy: true,

        timeout: 15000,

        maximumAge: 0
    }
);


}

/* =================================
SEARCH
================================= */

function searchTicket() {


const input =
    document.getElementById("ticketSearch");

const result =
    document.getElementById("searchResult");

if (!input || !result) {
    return;
}

const ticket =
    input.value.trim();

if (!ticket) {

    result.innerHTML =
        '<div class="message show error">' +
        'Please enter a Ticket No.' +
        '</div>';

    return;
}

/*
   Demo result.
   Connect this to your database/API later.
*/

result.innerHTML =

    '<div class="card">' +

    '<h2>Ticket Details</h2>' +

    '<p><b>Ticket No:</b> ' +
    escapeHtml(ticket) +
    '</p>' +

    '<p><b>Engineer:</b> Engineer 01</p>' +

    '<p><b>Location:</b> Kolkata</p>' +

    '<p><b>Status:</b> ' +

    '<span class="status status-open">' +
    'Open' +
    '</span>' +

    '</p>' +

    '</div>';


}

/* =================================
MESSAGE
================================= */

function showMessage(text, type) {


let box =
    document.getElementById("globalMessage");

if (!box) {
    return;
}

box.className =
    "message show " + type;

box.textContent = text;

setTimeout(function() {

    box.classList.remove("show");

}, 3000);


}

/* =================================
HTML ESCAPE
================================= */

function escapeHtml(value) {


return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");


}

/* =================================
CLOSE MENU WHEN CLICKING OUTSIDE
================================= */

document.addEventListener(
"click",
function(event) {


    const menu =
        document.getElementById("mobileNav");

    const button =
        document.querySelector(
            ".mobile-menu-btn"
        );

    if (!menu || !button) {
        return;
    }

    if (
        menu.classList.contains("show") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {

        menu.classList.remove("show");
    }
}


);
