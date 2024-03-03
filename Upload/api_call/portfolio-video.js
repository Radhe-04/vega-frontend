 function Get_image() {
  document.querySelector('.no_loader').style.visibility = 'hidden';
  document.querySelector('.loader_div').style.display = 'flex';
    fetch('https://vega-backend-f4m6.onrender.com/link/all')
    .then(res => res.json())
    .then(response =>{
      updateHtmlWithData(response)
    }).catch(err =>{
      console.error(err);
    })
  }

Get_image();

function updateHtmlWithData(data) {
  for (let i = 0; i < data.length; i+=2) {
    let iframeContainer = document.querySelector(".iframeContainer");
    iframeContainer.innerHTML += `<div class="row">
    <div class="col-md-12">
      <div class="left-right-entry style-1 new-view clearfix">
        <div class="right iframe">
        ${data[i].link.replace(/width="[^"]*"/, '')
        .replace(/height="[^"]*"/, '')}
        </div>
        <div class="left">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-2">
              <div class="cell-view">
                <div class="simple-article border-left grey">
                  <h3><b class="dec_title">${data[i].title}</b></h3>
                  <div class="empty-space col-xs-b15"></div>
                  <p class="dec_text">
                  ${data[i].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="empty-space col-xs-b30 col-sm-b60"></div>

  <div class="row">
    <div class="col-md-12">
      <div class="left-right-entry style-1 clearfix">
        <div class="right iframe">
        ${data[i+1].link.replace(/width="[^"]*"/, '')
        .replace(/height="[^"]*"/, '')}
        </div>
        <div class="left">
          <div class="row">
            <div class="col-sm-10">
              <div class="cell-view">
                <div class="simple-article border-left grey">
                  <h3><b class="dec_title">${data[i+1].title}</b></h3>
                  <div class="empty-space col-xs-b15"></div>
                  <p class="dec_text">
                  ${data[i+1].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="empty-space col-xs-b30 col-sm-b60"></div>`
  }
  document.querySelector('.no_loader').style.visibility = 'visible';
  document.querySelector('.loader_div').style.display = 'none';
}