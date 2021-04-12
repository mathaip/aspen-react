import "../App.css";
import img from "../images/punk9911.png";
import img1 from "../images/homepage-2x.png";
import img2 from "../images/punk-variety-2x.png";
import {NavLink} from 'react-router-dom'

function CryptoPunk() {
  return (
    <>
      <header className="header__two container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light col-12">
              <NavLink className="navbar-brand" to="/">
                Navbar
              </NavLink>
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
                    <NavLink className="nav-link" to="/project_list">
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Writing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">
                      <i className="fab fa-twitter" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="col-12 banner__two align-self-end">
              <div className="row justify-content-center">
                <div className="col-12">
                  <NavLink to="/about</NavLink" className="btn btn__rounded-small">
                    More About Us
                  </NavLink>
                  <h1 className="col-12 banner__header">Hello there</h1>
                  <p className="col-12 banner__text">
                    10,000 unique collectible characters with proof of ownership
                    stored on the Ethereum blockchain. The project that inspired
                    the modern CryptoArt movement. Featured in Mashable, The
                    Financial Times, The Paris Review, Salon, The Outline,
                    BreakerMag, Christie's of London, Art|Basel, The PBS
                    NewsHour and The New York Times. Currently showing at the
                    ZKM Center for Art and Media in Karlsruhe, Germany as part
                    of the Open Codes Exhibition. The first "Non-Fungible
                    Token," and inspiration for the Ethereum ERC-721 standard
                    that powers most digital art and collectibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-12 p-0">
            <img src={img2} alt className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <p className="col-12 section__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              tempora itaque pariatur omnis provident, placeat corrupti hic qui
              ipsam, quibusdam numquam, non eos praesentium soluta sunt. Dolores
              distinctio fuga deserunt!Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quos tempora itaque pariatur omnis provident,
              placeat corrupti hic qui ipsam, quibusdam numquam, non eos
              praesentium soluta sunt. Dolores distinctio fuga deserunt!Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Quos tempora
              itaque pariatur omnis provident, placeat corrupti hic qui ipsam,
              quibusdam numquam, non eos praesentium soluta sunt. Dolores
              distinctio fuga deserunt!Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quos tempora itaque pariatur omnis provident,
              placeat corrupti hic qui ipsam, quibusdam numquam, non eos
              praesentium soluta sunt. Dolores distinctio fuga deserunt!Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Quos tempora
              itaque pariatur omnis provident, placeat corrupti hic qui ipsam,
              quibusdam numquam, non eos praesentium soluta sunt. Dolores
              distinctio fuga deserunt!
            </p>
          </div>
        </div>
      </section>

      <section className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-12 p-0">
            <img src={img1} alt className="img-fluid" />
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <p className="col-12 section__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              tempora itaque pariatur omnis provident, placeat corrupti hic qui
              ipsam, quibusdam numquam, non eos praesentium soluta sunt. Dolores
              distinctio fuga deserunt!Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quos tempora itaque pariatur omnis provident,
              placeat corrupti hic qui ipsam, quibusdam numquam, non eos
              praesentium soluta sunt. Dolores distinctio fuga deserunt!Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Quos tempora
              itaque pariatur omnis provident, placeat corrupti hic qui ipsam,
              quibusdam numquam, non eos praesentium soluta sunt. Dolores
              distinctio fuga deserunt!Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quos tempora itaque pariatur omnis provident,
              placeat corrupti hic qui ipsam, quibusdam numquam, non eos
              praesentium soluta sunt. Dolores distinctio fuga deserunt!Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Quos tempora
              itaque pariatur omnis provident, placeat corrupti hic qui ipsam,
              quibusdam numquam, non eos praesentium soluta sunt. Dolores
              distinctio fuga deserunt!
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid d-none d-md-block d-lg-block mb-5">
        <div className="row justify-content-center">
          <div className="col-12 p-0">
            <img src={img1} alt className="img-fluid" />
          </div>
        </div>
      </section>
      <section className="container-fluid mb-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <h3 className="col-12">Overall Stats</h3>
            <div className="col-md-4 col-12 mt-md-5">
              Number of Sales (Last 12 Months)
              <br />
              <b>7,258</b>
            </div>
            <div className="col-md-4 col-12 mt-md-4">
              Average Sale Price (Last 12 Months)
              <br />
              <b>14.11Ξ ($25,220)</b>
            </div>
            <div className="col-md-4 col-12 mt-md-4">
              Total Value of All Sales (Lifetime)
              <br />
              <b>102.41KΞ ($183.04M)</b>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <h3 className="col-12 mb-0">Recent Transactions</h3>
            <p className="col-12">Updated 1 minute ago</p>
            <div className="card__avatar--container col-md-2 col-6">
              <NavLink
                to="/details"
                className="card__avatar--link"
              >
                <div className="card__avatar col-12">
                  <div className="card__avatar--img-container">
                    <img src={img} alt className="card__avatar--img" />
                  </div>
                  <h5 className="card__avatar--header col-12 mb-0">#9911</h5>
                  <p className="card__avatar--text col-12">
                    Offered for 99.11Ξ ($177,147)
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="card__avatar--container col-md-2 col-6">
              <NavLink
                to="/details"
                className="card__avatar--link"
              >
                <div className="card__avatar col-12">
                  <div className="card__avatar--img-container">
                    <img src={img} alt className="card__avatar--img" />
                  </div>
                  <h5 className="card__avatar--header col-12 mb-0">#9911</h5>
                  <p className="card__avatar--text col-12">
                    Offered for 99.11Ξ ($177,147)
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="card__avatar--container col-md-2 col-6">
              <NavLink
                to="/details"
                className="card__avatar--link"
              >
                <div className="card__avatar col-12">
                  <div className="card__avatar--img-container">
                    <img src={img} alt className="card__avatar--img" />
                  </div>
                  <h5 className="card__avatar--header col-12 mb-0">#9911</h5>
                  <p className="card__avatar--text col-12">
                    Offered for 99.11Ξ ($177,147)
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="card__avatar--container col-md-2 col-6">
              <NavLink
                to="/details"
                className="card__avatar--link"
              >
                <div className="card__avatar col-12">
                  <div className="card__avatar--img-container">
                    <img src={img} alt className="card__avatar--img" />
                  </div>
                  <h5 className="card__avatar--header col-12 mb-0">#9911</h5>
                  <p className="card__avatar--text col-12">
                    Offered for 99.11Ξ ($177,147)
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="card__avatar--container col-md-2 col-6">
              <NavLink
                to="/details"
                className="card__avatar--link"
              >
                <div className="card__avatar col-12">
                  <div className="card__avatar--img-container">
                    <img src={img} alt className="card__avatar--img" />
                  </div>
                  <h5 className="card__avatar--header col-12 mb-0">#9911</h5>
                  <p className="card__avatar--text col-12">
                    Offered for 99.11Ξ ($177,147)
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="card__avatar--container col-md-2 col-6">
              <NavLink
                to="/details"
                className="card__avatar--link"
              >
                <div className="card__avatar col-12">
                  <div className="card__avatar--img-container">
                    <img src={img} alt className="card__avatar--img" />
                  </div>
                  <h5 className="card__avatar--header col-12 mb-0">#9911</h5>
                  <p className="card__avatar--text col-12">
                    Offered for 99.11Ξ ($177,147)
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-12">
              <NavLink
                to="crypto-punks-topsales.html"
                className="col-12 btn btn-desc btn-sales"
              >
                Top Sales
              </NavLink>
            </div>
            <div className="col-md-6 col-12">
              <NavLink
                to="crypto-punks-leaderboard.html"
                className="col-12 btn btn-desc btn-owners"
              >
                Top Punk Owners
              </NavLink>
            </div>
            <div className="col-md-6 col-12">
              <NavLink
                to="crypto-punks-attributes.html"
                className="col-12 btn btn-desc btn-punk"
              >
                All Punk Types and Attributes
              </NavLink>
            </div>
          </div>
          <div className="row mb-5">
            <h3 className="col-12 mb-0">For Sale</h3>
            <div className="col-12">
              The lowest price punk currently for sale is{" "}
              <b>22 ETH ($39,589.44 USD)</b>.<br />
              Showing most recent offers,{" "}
              <b>
                <NavLink to="crypto-punks-forsale.html" className="text-link">
                  click here to see all 1,106
                </NavLink>
              </b>
              .
            </div>
            <div className="col-12">
              <NavLink to>
                <img src={img1} alt className="img-fluid" />
              </NavLink>
            </div>
          </div>
          <div className="row mb-5">
            <h3 className="col-12 mb-0">Bids</h3>
            <div className="col-12">
              The average bid over the last year was{" "}
              <b>17.45 ETH ($31,392.99 USD)</b>.<br />
              The average currently open bid is <b>3.91 ETH ($7,028.92 USD)</b>.
              <br />
              Total value of all current bids is{" "}
              <b>3,863.03 ETH ($6,951,602.59 USD).</b>.<br />
              Showing most recent bids,{" "}
              <b>
                <NavLink to="crypto-punks-bids.html" className="text-link">
                  click here to see all 1,106
                </NavLink>
              </b>
              .
            </div>
            <div className="col-12">
              <NavLink to>
                <img src={img1} alt className="img-fluid" />
              </NavLink>
            </div>
          </div>
          <div className="row mb-5">
            <h3 className="col-12 mb-0">Sales</h3>
            <div className="col-12">
              The average bid over the last year was{" "}
              <b>17.45 ETH ($31,392.99 USD)</b>.<br />
              The average currently open bid is <b>3.91 ETH ($7,028.92 USD)</b>.
              <br />
              Total value of all current bids is{" "}
              <b>3,863.03 ETH ($6,951,602.59 USD).</b>.<br />
              Showing most recent bids,{" "}
              <b>
                <NavLink to="crypto-punks-sales.html" className="text-link">
                  click here to see all 1,106
                </NavLink>
              </b>
              .
            </div>
            <div className="col-12">
              <NavLink to>
                <img src={img1} alt className="img-fluid" />
              </NavLink>
            </div>
          </div>
          <div className="row mb-5">
            <h3 className="col-12 mb-0">Wrapped</h3>
            <div className="col-12">
              The average bid over the last year was{" "}
              <b>17.45 ETH ($31,392.99 USD)</b>.<br />
              The average currently open bid is <b>3.91 ETH ($7,028.92 USD)</b>.
              <br />
              Total value of all current bids is{" "}
              <b>3,863.03 ETH ($6,951,602.59 USD).</b>.<br />
              326 punks are "wrapped" for sale on ERC-721 markets, see{" "}
              <b>
                <NavLink to className="text-link">
                  {" "}
                  wrappedpunks.com{" "}
                </NavLink>
              </b>
              for more details. Showing by punk number,{" "}
              <b>
                <NavLink to="crypto-punks-wrapped.html" className="text-link">
                  click here to see all wrapped punks
                </NavLink>
              </b>{" "}
              or{" "}
              <b>
                <NavLink to className="text-link">
                  {" "}
                  view them on OpenSea
                </NavLink>
              </b>
              .
            </div>
            <div className="col-12">
              <NavLink to>
                <img src={img1} alt className="img-fluid" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mb-5">
        <div className="container">
          <div className="row">
            <h3 className="col-12">What is a CryptoPunk?</h3>
            <div className="col-12">
              The CryptoPunks are 24x24 pixel art images, generated
              algorithmically. Most are punky-looking guys and girls, but there
              are a few rarer types mixed in: Apes, Zombies and even the odd
              Alien. Every punk has their own profile page that shows their
              attributes as well as their ownership/for-sale status (
              <b>
                <NavLink to="/details" className="text-link">
                  here's
                </NavLink>
              </b>{" "}
              an example).
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mb-5">
        <div className="container">
          <div className="row">
            <h3 className="col-12">What exactly is going on here?</h3>
            <div className="col-12">
              <b>
                <NavLink to className="text-link">
                  CryptoCoins
                </NavLink>
              </b>{" "}
              were made famous by{" "}
              <b>
                <NavLink to className="text-link">
                  Bitcoin
                </NavLink>
              </b>
              , but Bitcoin is designed just to transact and store ownership of
              Bitcoin itself. We are using a successor to Bitcoin called{" "}
              <b>
                <NavLink to className="text-link">
                  Ethereum
                </NavLink>
              </b>{" "}
              which allows for arbitrary computer code to be executed on the
              blockchain and the results of the execution to be stored forever.
              This is pretty cool! Normally code is run on a server somewhere
              and you basically need to trust the person running the server.
              Ethereum lets everyone execute the code, show each other what
              result they got, and agree that the code was executed properly and
              fairly.
              <br />
              We have written code that lives on the blockchain that anyone can
              use to buy and sell Punks with anyone else in the world. An
              interesting aspect of this system is that we no longer have any
              control over the code running CryptoPunks! Once we released it
              onto the blockchain it became permanently embedded there and can
              no longer be modified by anyone. This is scary for us as
              developers because we worry about bugs, but it is also a very
              powerful feature of the system. It allows a user verify that there
              are indeed only 10,000 punks, check that we can't steal them from
              you, and basically make sure that everything we told you about the
              code is true.
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mb-5">
        <div className="container">
          <h3 className="col-12">How do I get a Punk?</h3>
          <div className="row">
            <h5 className="col-12">The Easiest Option</h5>
            <div className="col-12">
              <ol className="col-12 pl-md-5 pr-md-5">
                <li>
                  Download and install a Chrome browser plugin called{" "}
                  <b>
                    <NavLink to className="text-link">
                      MetaMask
                    </NavLink>
                  </b>
                  . This will allow websites (that you authorize) access to your
                  Ethereum account.
                </li>
                <li>
                  If you made a new account, buy some Ether. The MetaMask plugin
                  has a button that will allow you to buy Ether from Coinbase.
                </li>
                <li>
                  Once you have the plugin installed, this website will
                  recognize it and add buttons that allow you to bid on, buy and
                  sell punks directly in the interface.
                </li>
                <li>
                  For example, you can buy{" "}
                  <b>
                    <NavLink to="/details" className="text-link">
                      Punk #3145
                    </NavLink>
                  </b>{" "}
                  for 22 ETH ($39,589.44 USD).{" "}
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <h5 className="col-12">The Harder Option</h5>
            <div className="col-12">
              You can also do the following if you prefer to run a wallet on
              your computer:
            </div>
            <div className="col-12">
              <ol className="col-12 pl-md-5 pr-md-5">
                <li>
                  Download and install{" "}
                  <b>
                    <NavLink to className="text-link">
                      Mist
                    </NavLink>
                  </b>{" "}
                  which is basically a web browser for Ethereum apps.
                </li>
                <li>
                  You will need to wait while the entire blockchain syncs to
                  your computer (probably 10-20GB).
                </li>
                <li>
                  You will also need to get some Ether, there should be a button
                  in Mist that lets you buy some directly from{" "}
                  <b>
                    <NavLink to className="text-link">
                      CoinBase
                    </NavLink>
                  </b>
                  .
                </li>
                <li>
                  Open Mist and load this website, press the authorize icon in
                  the top right to allow the website to see your Ethereum
                  account. Now you can buy and sell punks!{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <h3 className="col-12">Nerdy details</h3>
            <ul className="col-12 pl-md-5 pr-md-5">
              <li>
                The actual images of the punks are too large to store on the
                blockchain, so we took a hash of the{" "}
                <b>
                  <NavLink to className="text-link">
                    composite image
                  </NavLink>
                </b>{" "}
                of all the punks and{" "}
                <b>
                  <NavLink to className="text-link">
                    embeded it into the contract
                  </NavLink>
                </b>
                . You can verify that the punks being managed by the Ethereum
                contract are the True Official Genuine CryptoPunks™ by
                calculating an SHA256 hash on the cryptopunks image and
                comparing it to the hash stored in the contract.
              </li>
              <li>
                CryptoPunks are almost an{" "}
                <b>
                  <NavLink to className="text-link">
                    ERC20 token
                  </NavLink>
                </b>
                . We support the methods that provide your balance so you can
                watch CryptoPunks as a token in your wallet and see how many you
                own. None of the other methods are the same since you're not
                transferring a simple balance, but need to reference which
                specific Punk you want to work with.
              </li>
              <li>
                The contract source and more technical details are available{" "}
                <b>
                  <NavLink to className="text-link">
                    on Github
                  </NavLink>
                </b>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <h3 className="col-12">Search Punks</h3>
            <div className="col-12">
              <form className="form-inline form__search">
                <input
                  type="text"
                  className="form-control mb-2 col-md-11 col-8 form__search--input"
                  id="inlineFormInputName2"
                  placeholder="Try things like 'zombie' or 'zombie and beard'"
                />
                <button
                  type="submit"
                  className="btn btn-primary mb-2 form__search--btn"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CryptoPunk;
