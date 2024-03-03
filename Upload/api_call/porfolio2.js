 function Get_image() {
  document.querySelector('.no_loader').style.visibility = 'hidden';
  document.querySelector('.loader_div').style.display = 'flex';
    fetch('https://vega-backend-f4m6.onrender.com/portfolio/all')
    .then(res => res.json())
    .then(response =>{
      updateHtmlWithData(response)
    }).catch(err =>{
      console.error(err);
    })
    }
async function getCategoryImage(){
  return await fetch('https://vega-backend-f4m6.onrender.com/portfolio/','Jewellery')
}
function updateHtmlWithData(data) {
  var detail_image = document.querySelectorAll(".details_Image");
  var detail_title = document.querySelectorAll(".detail_title");
  for (let i = 0; i < data.length; i++) {
    detail_title[i].textContent = data[i].category;
    detail_image[i].style.backgroundImage = "url(" + data[i].image + ")";
    detail_image[i].setAttribute("href",'#'+data[i].category)
    document.querySelector('#gallery').innerHTML +=`<div id="${data[i].category}" class="hidden">
    </div>`
  }
  document.querySelector('.no_loader').style.visibility = 'visible';
  document.querySelector('.loader_div').style.display = 'none';
}

Get_image();
