function Get_image() {
  document.querySelector('.no_loader').style.visibility = 'hidden';
  document.querySelector('.loader_div').style.display = 'flex';
  fetch('https://vega-backend-f4m6.onrender.com/blog/all')
    .then(res => res.json())
    .then(response => {
      updateHtmlWithData(response)
    }).catch(err => {
      console.error(err);
    })
}

function updateHtmlWithData(data) {
  let blogs = document.querySelector(".blogs");
  blogs.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    blogs.innerHTML += `<div class="col-sm-6 col-md-4 blog-entry-clear">
            <div class="blog-landing-entry-2">
              <a
                class="mouseover blogImage"
                style="
                  background-image: url(${data[i].image});
                "
                >
              </a>
              <div class="description">
                <div class="title">
                  <p class="h4 small">
                    <b class="blogTitle"
                      >${data[i].title}</b
                    >
                  </p>
                </div>
                <div class="empty-space col-xs-b15"></div>
                <div
                  class="simple-article grey small blog-light-color blogDate"
                >
                  January 19, 2016
                </div>
                <div class="empty-space col-xs-b15"></div>
                <div class="simple-article grey small blogBody">
                ${data[i].text}
                </div>
              </div>
              <div class="data">
                <div class="valign-middle d-comment">
                  <button class="button-27" onclick="openPopup()">
                    Comment
                  </button>
                </div>
              </div>
            </div>
            <div class="empty-space col-xs-b30 col-sm-b110"></div></div>`
  }
  document.querySelector('.no_loader').style.visibility = 'visible';
  document.querySelector('.loader_div').style.display = 'none';
}
let data = {
  from: 'rishitrajpara2002@gmail.com',
  to: 'rishitrajpara@gmail.com'
}

async function openPopup() {
  const { value: text } = await Swal.fire({
    input: "textarea",
    inputLabel: "Comment",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
    confirmButtonText: "Submit",
    confirmButtonColor: "#3b3b3b",
  });
  if (text) {
    fetch('https://vega-backend-f4m6.onrender.com/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.error(err);
      })
  }

}

Get_image();