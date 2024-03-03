let cardContainer = document.querySelector('.carousel-inner');

function Get_data() {
    document.querySelector('.no_loader').style.visibility = 'hidden';
    document.querySelector('.loader_div').style.display = 'flex';
    fetch('https://vega-backend-f4m6.onrender.com/testimonial/all')
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        addDataInCards(data)
      }).catch(error =>{
    console.error(error);
  })
}

function addDataInCards(testimonialData){
    cardContainer.innerHTML = '';
    for(let i = 0 ; i< testimonialData.length; i += 3){
        if(i===0){
            cardContainer.innerHTML = `<div class="carousel-item active">
            <div class="card-wrapper container-sm d-flex  justify-content-around">
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-text">
                        <div class="card-title">${testimonialData[i].title}</div>
                        ${testimonialData[i].text}
                    </div>
                    <div class="footer">
                        <span id="name">${testimonialData[i].authorName}<br></span>
                        <span id="position">${testimonialData[i].city}</span>
                    </div>
                 </div>
                </div>
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-text">
                            <div class="card-title">${testimonialData[i+1].title}</div>
                            ${testimonialData[i+1].text}
                        </div>
                        <div class="footer">
                            <span id="name">${testimonialData[i+1].authorName}<br></span>
                            <span id="position">${testimonialData[i+1].city}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-text">
                            <div class="card-title">${testimonialData[i+2].title}</div>
                            ${testimonialData[i+2].text}
                        </div>
                        <div class="footer">
                            <span id="name">${testimonialData[i+2].authorName}<br></span>
                            <span id="position">${testimonialData[i+2].city}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`   
        }
        else{
            cardContainer.innerHTML += `<div class="carousel-item">
            <div class="card-wrapper container-sm d-flex  justify-content-around">
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-text">
                        <div class="card-title">${testimonialData[i].title}</div>
                        ${testimonialData[i].text}
                    </div>
                    <div class="footer">
                        <span id="name">${testimonialData[i].authorName}<br></span>
                        <span id="position">${testimonialData[i].city}</span>
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-text">
                            <div class="card-title">${testimonialData[i+1].title}</div>
                            ${testimonialData[i+1].text}
                        </div>
                        <div class="footer">
                            <span id="name">${testimonialData[i+1].authorName}<br></span>
                            <span id="position">${testimonialData[i+1].city}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-text">
                            <div class="card-title">${testimonialData[i+2].title}</div>
                            ${testimonialData[i+2].text}
                        </div>
                        <div class="footer">
                            <span id="name">${testimonialData[i+2].authorName}<br></span>
                            <span id="position">${testimonialData[i+2].city}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`   
        }
    }
    document.querySelector('.no_loader').style.visibility = 'visible';
    document.querySelector('.loader_div').style.display = 'none';
}

Get_data()
