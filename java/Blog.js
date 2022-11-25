function BlogP1()
{
    fetch('blog re/P1title.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('P1title').innerHTML = text);
    fetch('blog re/P1BodyText.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('P1BodyText').innerHTML = text);
}