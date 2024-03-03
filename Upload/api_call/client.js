function Get_image() {
  document.querySelector('.no_loader').style.visibility = 'hidden';
  document.querySelector('.loader_div').style.display = 'flex';
  fetch('https://vega-backend-f4m6.onrender.com/clients/all')
    .then(res => res.json())
    .then(response => {
      updateHtmlWithData(response)
    }).catch(err => {
      console.error(err);
    })
}

function updateHtmlWithData(data) {
  let grid = document.querySelector(".grid");
  for (let i = 0; i < data.length; i++) {
    grid.innerHTML += `<div class="grid__item">
        <img src="${data[i].image}" alt="" class="gallery-item__image">
        </div>  `
  }
  document.querySelector('.no_loader').style.visibility = 'visible';
  document.querySelector('.loader_div').style.display = 'none';
}
Get_image();