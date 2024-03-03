let headercontainer = document.querySelector('.header_container');

function setheader() {
  headercontainer.innerHTML = `
  <nav class="text-left topBotomBordersIn clearfix">
    <ul>
      <li>
        <a href="https://vega-frontend.onrender.com/">Home</a>
      </li>
  
      <li>
        <a href="https://vega-frontend.onrender.com/about">About</a>
      </li>
  
      <li>
        <a href="https://vega-frontend.onrender.com/portfolio">Portfolio</a>
        <span class="toggle-icon"></span>
        <ul>
          <li><a href="https://vega-frontend.onrender.com/portfolio">Photos</a></li>
          <li><a href="https://vega-frontend.onrender.com/portfolio-video">Videos</a></li>
        </ul>
      </li>
  
      <li>
        <a href="https://vega-frontend.onrender.com/service">Services</a>
      </li>
  
      <li>
        <a href="https://vega-frontend.onrender.com/blog">Blog</a>
      </li>
  
      <li>
        <a href="https://vega-frontend.onrender.com/clients">Our Clients</a>
        <span class="toggle-icon"></span>
        <ul>
          <li><a href="https://vega-frontend.onrender.com/clients">OurClients</a></li>
          <li><a href="https://vega-frontend.onrender.com/tesinomial">Testimonials</a></li>
        </ul>
      </li>
  
      <li>
        <a href="https://vega-frontend.onrender.com/contact">Contact Us</a>
      </li>
    </ul>
  </nav>`
}
setheader();