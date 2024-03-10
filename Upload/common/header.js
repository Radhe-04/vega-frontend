let headercontainer = document.querySelector('.header_container');

function setheader() {
  headercontainer.innerHTML = `
  <nav class="text-left topBotomBordersIn clearfix">
    <ul>
      <li>
        <a href="http://15.206.237.42:3000/">Home</a>
      </li>
  
      <li>
        <a href="http://15.206.237.42:3000/about">About</a>
      </li>
  
      <li>
        <a href="http://15.206.237.42:3000/portfolio">Portfolio</a>
        <span class="toggle-icon"></span>
        <ul>
          <li><a href="http://15.206.237.42:3000/portfolio">Photos</a></li>
          <li><a href="http://15.206.237.42:3000/portfolio-video">Videos</a></li>
        </ul>
      </li>
  
      <li>
        <a href="http://15.206.237.42:3000/service">Services</a>
      </li>
  
      <li>
        <a href="http://15.206.237.42:3000/blog">Blog</a>
      </li>
  
      <li>
        <a href="http://15.206.237.42:3000/clients">Our Clients</a>
        <span class="toggle-icon"></span>
        <ul>
          <li><a href="http://15.206.237.42:3000/clients">OurClients</a></li>
          <li><a href="http://15.206.237.42:3000/tesinomial">Testimonials</a></li>
        </ul>
      </li>
  
      <li>
        <a href="http://15.206.237.42:3000/contact">Contact Us</a>
      </li>
    </ul>
  </nav>`
}
setheader();