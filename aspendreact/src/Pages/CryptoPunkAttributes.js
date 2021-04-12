import "../App.css";
import img from "../images/punk9911.png";
import {NavLink} from 'react-router-dom'

function CryptoPunkAttributes() {
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
              Types and Attributes
            </li>
          </ol>
        </nav>
      </div>
      </div>

      <section className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row mb-5">
            <h1 className="col-12 mb-0">Types and Attributes</h1>
          </div>
          <div className="row mt-4">
            <h3 className="col-12">Punk Types</h3>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Attributes</th>
                      <th scope="col">#</th>
                      <th scope="col">Avail</th>
                      <th scope="col">
                        Avg Sale
                        <small style={{ verticalAlign: "top" }}>
                          <span
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Average sale price over past 90 days with this attribute"
                            role="tooltip"
                          ></span>
                        </small>
                      </th>
                      <th scope="col">
                        Cheapest
                        <small style={{ verticalAlign: "top" }}>
                          <span
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Cheapest punk currently for sale with this attribute"
                            role="tooltip"
                          ></span>
                        </small>
                      </th>
                      <th scope="col">More Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            Alien
                          </NavLink>
                        </b>
                      </td>
                      <td>9</td>
                      <td>0</td>
                      <td>3KΞ</td>
                      <td />
                      <td className="d-flex">
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            Alien
                          </NavLink>
                        </b>
                      </td>
                      <td>9</td>
                      <td>0</td>
                      <td>3KΞ</td>
                      <td>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                      <td className="d-flex">
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <h3 className="col-12">Attributes</h3>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Attributes</th>
                      <th scope="col">#</th>
                      <th scope="col">Avail</th>
                      <th scope="col">
                        Avg Sale
                        <small style={{ verticalAlign: "top" }}>
                          <span
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Average sale price over past 90 days with this attribute"
                            role="tooltip"
                          ></span>
                        </small>
                      </th>
                      <th scope="col">
                        Cheapest
                        <small style={{ verticalAlign: "top" }}>
                          <span
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Cheapest punk currently for sale with this attribute"
                            role="tooltip"
                          ></span>
                        </small>
                      </th>
                      <th scope="col">More Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            Alien
                          </NavLink>
                        </b>
                      </td>
                      <td>9</td>
                      <td>0</td>
                      <td>3KΞ</td>
                      <td />
                      <td className="d-flex">
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            Alien
                          </NavLink>
                        </b>
                      </td>
                      <td>9</td>
                      <td>0</td>
                      <td>3KΞ</td>
                      <td>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                      <td className="d-flex">
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <h3 className="col-12">Attribute Counts</h3>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Attributes</th>
                      <th scope="col">#</th>
                      <th scope="col">Avail</th>
                      <th scope="col">
                        Avg Sale
                        <small style={{ verticalAlign: "top" }}>
                          <span
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Average sale price over past 90 days with this attribute"
                            role="tooltip"
                          ></span>
                        </small>
                      </th>
                      <th scope="col">
                        Cheapest
                        <small style={{ verticalAlign: "top" }}>
                          <span
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Cheapest punk currently for sale with this attribute"
                            role="tooltip"
                          ></span>
                        </small>
                      </th>
                      <th scope="col">More Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            Alien
                          </NavLink>
                        </b>
                      </td>
                      <td>9</td>
                      <td>0</td>
                      <td>3KΞ</td>
                      <td />
                      <td className="d-flex">
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            Alien
                          </NavLink>
                        </b>
                      </td>
                      <td>9</td>
                      <td>0</td>
                      <td>3KΞ</td>
                      <td>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                      <td className="d-flex">
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                        <NavLink to="#">
                          <img
                            src={img}
                            height={48}
                            width={48}
                            className="pixelated bg-blue"
                            alt
                          />
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CryptoPunkAttributes;
