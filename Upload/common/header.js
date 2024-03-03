let headercontainer = document.querySelector('.header_container');

function setheader() {
  headercontainer.innerHTML = `
  <nav class="text-left topBotomBordersIn clearfix">
    <ul>
      <li>
        <a href="index.html">Home</a>
      </li>
  
      <li>
        <a href="about2.html">About</a>
      </li>
  
      <li>
        <a href="portfolio2.html">Portfolio</a>
        <span class="toggle-icon"></span>
        <ul>
          <li><a href="portfolio2.html">Photos</a></li>
          <li><a href="portfolio-video.html">Videos</a></li>
        </ul>
      </li>
  
      <li>
        <a href="services1.html">Services</a>
      </li>
  
      <li>
        <a href="blog2.html">Blog</a>
      </li>
  
      <li>
        <a href="clients.html">Our Clients</a>
        <span class="toggle-icon"></span>
        <ul>
          <li><a href="clients.html">OurClients</a></li>
          <li><a href="testinomial.html">Testimonials</a></li>
        </ul>
      </li>
  
      <li>
        <a href="contacts1.html">Contact Us</a>
      </li>
    </ul>
  </nav>`
}
setheader();