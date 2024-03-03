function Get_image() {
  document.querySelector('.no_loader').style.visibility = 'hidden';
  document.querySelector('.loader_div').style.display = 'flex';
  fetch('https://vega-backend-f4m6.onrender.com/all')
    .then(res => res.json())
    .then(response => {
      updateHtmlWithData(response)
    }).catch(err => {
      console.error(err);
    })
}

function updateHtmlWithData(data) {
  var front_elements = document.querySelectorAll("#font_image");
  var back_elements = document.querySelectorAll("#background-image");
  var leftSilder_elements = document.querySelectorAll("#leftSilder_image");
  var rightSilder_elements = document.querySelectorAll("#rightSilder_image");
  var silderText = document.querySelectorAll("#silder_text");
  for (let i = 0; i < data.length; i++) {
    var imageUrl = data[i].image;
    silderText[i].innerHTML = data[i].title;
    front_elements[i].style.backgroundImage = "url(" + imageUrl + ")";
    back_elements[i].style.backgroundImage = "url(" + imageUrl + ")";
    leftSilder_elements[i].style.backgroundImage = "url(" + imageUrl + ")";
    rightSilder_elements[i].style.backgroundImage = "url(" + imageUrl + ")";
  }
  document.querySelector('.no_loader').style.visibility = 'visible'; 
  document.querySelector('.loader_div').style.display = 'none';
}
Get_image();