var imageCount;

function load() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var image = JSON.parse(xhttp.responseText);
                imageCount = image.length;

                document.getElementById("count").innerHTML=`${imageCount} Photos`;

                image.forEach((obj) => {
                    document.getElementById("picture").innerHTML+=`<div id=${obj.id} class="grid-item" onclick="fade(${obj.id})">
                    <img
                    src=${obj.url}
                    width="400"
                    height="350"
                    />
                    <div class="description">${obj.title}</div>
                    </div>`;
                });
                
            }
        };

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums/2/photos");
        xhttp.send();
}

function fade(Id) {
    var image = document.getElementById(Id);
    var opacity = 1;

    var timer = setInterval(function() {
        if(opacity <= 0.1) {
            clearInterval(timer);

            image.remove();
            imageCount--;

            document.getElementById("count").innerHTML=`<div>${imageCount} Photos</div>`;
        }

        image.style.opacity = opacity;
        opacity -= 0.1;
    }, 75);
}