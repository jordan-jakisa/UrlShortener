const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl(){
    var originalUrl = document.getElementById('originalUrl').value;
    console.log(originalUrl);

    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    console.log(apiUrl);
    
    shortenedUrl = document.getElementById('shortenedUrl');


    fetch(apiUrl).then(response => response.text()).then( data => {
        shortenedUrl.value = data;
        
    }).catch( error => {
        shortenedUrl.value = "Error: Unable to shorten URL";
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
})