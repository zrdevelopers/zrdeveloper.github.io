const Index = () => {
  return (
    <nav className="navbar onepage-navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand page-scroll" href="#top">
          <h3>ZRDevelopers</h3>
          {/* <!-- <img src="http://placehold.it/204x57" alt="Brand Logo" className="img-fluid"> --> */}
          {/* <!-- images/brand-logo.png --> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="custom-toggler-icon bar1"></span>
          <span className="custom-toggler-icon bar2"></span>
          <span className="custom-toggler-icon bar3"></span>
        </button>
        {/* <!-- End of .navbar-toggler --> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-md-auto typo-color-c align-items-center">
            <li className="nav-item active">
              <a className="nav-link page-scroll" href="#services">
                Services
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#about-us">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#projects">
                Portfolio
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link page-scroll" href="#case-studies">
                Case Studies
              </a>
            </li> */}
            {/* <!-- <li className="nav-item">
                  <a className="nav-link page-scroll" href="#team">Team</a>
              </li> --> */}
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-btn btn-mid grad-style-cd page-scroll" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
          {/* <!-- End of .navbar-nav --> */}
        </div>
        {/* <!-- End of .navbar-collapse --> */}
      </div>
      {/* <!-- End of .container --> */}
    </nav>
  );
};

export default Index;
