class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <nav
      class="navbar fixed-top navbar-expand-md navbar-dark"
      style="background-color: #141414"
    >
    <a href="#" class="navbar-brand mb-0">
    <img
      class="d-inline-block align-top ms-2"
      src="./images/logo.png"
      style="height: 70px; width: 250px; object-fit: cover"
    />
  </a>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        class="navbar-toggler"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle-navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse me-3" id="navbarMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a href="./index.html" class="nav-link active " id=" "
              >Home</a
            >
          </li>
          <li class="nav-item active me-2">
            <a href="./Aboutus.html" class="nav-link">About Us</a>
          </li>
        </ul>
        <button
        onclick="window.location.href='../login/signup.php'"
          type="button"
          class="btn me-3"
          style="background-color: #8c52ff; color: white"
        >
          Sign Up
        </button>
        <button
        onclick="window.location.href='../login/index.php'"
          type="button"
          class="btn"
          style="
            background-color: #141414;
            color: #8c52ff;
            border: 1px solid #8c52ff;
          "
        >
          Login
        </button>
      </div>
    </nav>

      
      
      `;
  }
  
}
customElements.define("my-header", MyHeader);
