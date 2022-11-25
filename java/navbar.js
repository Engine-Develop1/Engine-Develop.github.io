function loadHTML()
{
    fetch('navbar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('NavBox').innerHTML = text);
    fetch('Links.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('sLikes').innerHTML = text);
}