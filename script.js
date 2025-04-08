// script.js
function showRSVPMessage() {
    const message = document.getElementById('rsvpMessage');
    message.style.display = 'block';
    message.style.opacity = '1';
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => { message.style.display = 'none'; }, 500);
    }, 2000); // Message fades after 2 seconds
}
