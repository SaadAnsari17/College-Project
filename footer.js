class MyFooter extends HTMLElement{
    connectedCallback(){

        this.innerHTML = `
     
        <footer class="py-3" style="background-color: #141414; color: white">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h4>About Us</h4>
              <p>Learn about our company and mission.</p>
              <a
                href="./OtherContents/AboutUs/Aboutus.html"
                class="btn btn-lg"
                style="background-color: #8c52ff; color: white"
                >Learn More</a
              >
            </div>
            <div class="col-md-4">
              <h4>Contact Us</h4>
              <ul class="list-unstyled">
                <li>Email: info@tdent.com</li>
                <li>Phone: 555-555-5555</li>
                <li>Address: 123 Main St, Anytown USA</li>
              </ul>
            </div>
            <div class="col-md-4">
              <h4>Connect With Us</h4>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-github" style="color: #8c52ff"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter" style="color: #8c52ff"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram" style="color: #8c52ff"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in" style="color: #8c52ff"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-meta" style="color: #8c52ff"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <p class="text-center" style="text-decoration-line: underline">
                Copyright © {{ year }} T-dent Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
        
        `;
    }
}
customElements.define('my-footer', MyFooter);