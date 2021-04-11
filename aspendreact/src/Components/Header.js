import "../App.css";
import img from "../images/undraw_conversation_h12g.png";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <header className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <nav className="navbar navbar-expand-lg navbar-light col-12">
                <a className="navbar-brand" href="#">
                  dHistory
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Writing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="col-12 banner align-self-end">
                <div className="row justify-content-center">
                  <div className="col-md-4 col-12">
                    <h1 className="col-12 banner__header">
                      Hi! We're <br />
                      Matt and John
                    </h1>
                    <p className="col-12 banner__text">
                      We're creative technologists probably best known for our
                      crypto art projects the CryptoPunks and Autoglyphs.
                    </p>
                    <a href="#" className="btn btn__rounded">
                      More About Us
                    </a>
                  </div>
                  <div className="col-md-8 col-12">
                    <img src={img} alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
