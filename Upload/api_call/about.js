function Get_image() {
    document.querySelectorAll('.no_loader')[0].style.visibility = 'hidden';
    document.querySelectorAll('.loader_div')[0].style.display = 'flex';
    fetch('https://vega-backend-f4m6.onrender.com/portfolio/all')
        .then(res => res.json())
        .then(response => {
            updateHtmlWithImage(response)
        }).catch(err => {
            console.error(err);
        })
}

function updateHtmlWithImage(data) {
    var expertise_image = document.querySelectorAll(".expertise_image");
    var expertise_title = document.querySelectorAll(".expertise_title");
    for (let i = 0; i < data.length; i++) {
        expertise_title[i].innerHTML = data[i].category;
        expertise_image[i].setAttribute("src", data[i].image);
    }
    document.querySelectorAll('.no_loader')[0].style.visibility = 'visible';
    document.querySelectorAll('.loader_div')[0].style.display = 'none';
}

function Get_data() {
    document.querySelectorAll('.no_loader')[1].style.visibility = 'hidden';
    document.querySelectorAll('.loader_div')[1].style.display = 'flex';
    fetch('https://vega-backend-f4m6.onrender.com/about/all')
        .then(res => res.json())
        .then(response => {
            updateHtmlWithData(response)
        }).catch(err => {
            console.error(err);
        })
}

function updateHtmlWithData(data) {
    var about_title = document.querySelectorAll(".about_title");
    var about_text = document.querySelectorAll(".about_text");
    for (let i = 0; i < data.length; i++) {
        about_title[i].innerHTML = data[i].title;
        about_text[i].innerHTML = data[i].text;
    }
    document.querySelectorAll('.no_loader')[1].style.visibility = 'visible';
    document.querySelectorAll('.loader_div')[1].style.display = 'none';
}
Get_image();
Get_data();