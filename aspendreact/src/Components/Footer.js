import "../App.css";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <footer className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12 d-none d-md-block d-lg-block" />
              <div className="col-lg-6 col-md-7 col-12 p-0">
                <ul className="footer__list-group">
                  <li className="footer__list-group-item">
                    <a href="#" className="footer__list-group-link">
                      Projects
                    </a>
                  </li>
                  <li className="footer__list-group-item">
                    <a href="#" className="footer__list-group-link">
                      Writing
                    </a>
                  </li>
                  <li className="footer__list-group-item">
                    <a href="#" className="footer__list-group-link">
                      About
                    </a>
                  </li>
                  <li className="footer__list-group-item">
                    <a href="#" className="footer__list-group-link">
                      Login
                    </a>
                  </li>
                  <li className="footer__list-group-item">
                    <a href="#" className="footer__list-group-link">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
