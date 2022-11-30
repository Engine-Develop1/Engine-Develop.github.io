function BlogP1()
{
    fetch('blog re/P1BodyText.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('text').innerHTML = text);
}