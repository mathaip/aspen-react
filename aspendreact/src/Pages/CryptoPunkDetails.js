import "../App.css";
import img from "../images/punk9911.png";
import {NavLink} from 'react-router-dom'

function CryptoPunkDetails() {
  return (
    <>
          <div className="container">


      <div className="col-12 mt-5">
        <nav aria-label="breadcrumb col-12 m-0">
          <ol className="breadcrumb w-100 m-0">
            <li className="breadcrumb-item">
              <NavLink to="/crypto_punk">Cryptopunks</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              9911
            </li>
          </ol>
        </nav>
        <div className="col-12">
          <div className="row">
            <div
              className="col-12 bg-blue p-0 text-center"
              style={{ height: 312 }}
            >
              <img src={img} alt height={300} className="pixelated" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container">
        <section className="container mb-5">
          <div className="container pl-md-5 pr-md-5">
            <div className="row justify-content-center">
              <h1 className="col-12">CryptoPunk 9911</h1>
              <div className="col-12">
                <b>
                  One of 6039{" "}
                  <NavLink to="#" className="text-link">
                    Male
                  </NavLink>{" "}
                  punks.
                </b>
              </div>
            </div>
          </div>
        </section>
        <section className="container mb-5">
          <div className="container pl-md-5 pr-md-5">
            <div className="row">
              <h3 className="col-12">Accessories</h3>
              <div className="col-md-4 col-12">
                <b>
                  <NavLink to="#" className="text-link">
                    Eye Mask
                  </NavLink>
                </b>
                <br />
                <b>293</b> punks have this.
              </div>
              <div className="col-md-4 col-12">
                <b>
                  <NavLink to="#" className="text-link">
                    Mohawk Thin
                  </NavLink>
                </b>
                <br />
                <b>441</b> punks have this.
              </div>
            </div>
          </div>
        </section>
        <section className="container mb-5">
          <div className="container pl-md-5 pr-md-5">
            <div className="row">
              <h3 className="col-12">Current Market Status</h3>
              <div className="col-12">
                This punk is currently owned by address{" "}
                <b>
                  <NavLink to="#" className="text-link">
                    ddaavvee
                  </NavLink>
                </b>
                .
              </div>
              <div className="col-12">
                This punk is currently for sale by owner for 99.11Ξ ($178,201).
              </div>
              <div className="col-12">
                There are currently no bids on this punk.
              </div>
            </div>
          </div>
        </section>
        <section className="container mb-5">
          <div className="container pl-md-5 pr-md-5">
            <div className="row">
              <h3 className="col-12">Transaction History</h3>
              <div className="col-md-11 col-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Txn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-danger">
                        <td>Offered</td>
                        <td />
                        <td />
                        <td>99.11Ξ ($177,147)</td>
                        <td>
                          <b>
                            <NavLink to="#" className="text-link">
                              Mar 15, 2021
                            </NavLink>
                          </b>
                        </td>
                      </tr>
                      <tr className="bg-danger">
                        <td>Offer Withdrawn</td>
                        <td />
                        <td />
                        <td />
                        <td>
                          <b>
                            <NavLink to="#" className="text-link">
                              Mar 15, 2021
                            </NavLink>
                          </b>
                        </td>
                      </tr>
                      <tr className="bg-danger">
                        <td>Offered</td>
                        <td />
                        <td />
                        <td>99.11Ξ ($177,147)</td>
                        <td>
                          <b>
                            <NavLink to="#" className="text-link">
                              Mar 15, 2021
                            </NavLink>
                          </b>
                        </td>
                      </tr>
                      <tr className="bg-success">
                        <td>Claimed</td>
                        <td />
                        <td>
                          <b>
                            <NavLink to="#" className="text-link">
                              ddaavvee
                            </NavLink>
                          </b>
                        </td>
                        <td />
                        <td>
                          <b>
                            <NavLink to="#" className="text-link">
                              Mar 15, 2021
                            </NavLink>
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-5 mb-5">
          <div className="container pl-md-5 pr-md-5">
            <div className="row">
              <h3 className="col-12">Search Punks</h3>
              <div className="col-12">
                <form className="form-inline form__search">
                  <input
                    type="text"
                    className="form-control mb-2 col-lg-10 col-md-10 col-8 form__search--input"
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
      </div>
    </>
  );
}

export default CryptoPunkDetails;
