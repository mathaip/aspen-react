import "../App.css";
import {NavLink} from 'react-router-dom'

function About() {
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
                All Owners
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <h1 className="col-12 mb-0">All CryptoPunk Owners</h1>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Account</th>
                      <th scope="col">OpenSea / ENS</th>
                      <th scope="col">Number Owned</th>
                      <th scope="col">last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            0xc352b534e8b98
                          </NavLink>
                        </b>
                      </td>
                      <td />
                      <td>541</td>
                      <td>1 day ago</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            0xc352b534e8b98
                          </NavLink>
                        </b>
                      </td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            {" "}
                            WrappedCryptoPu
                          </NavLink>
                        </b>
                      </td>
                      <td>541</td>
                      <td>1 day ago</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            0xc352b534e8b98
                          </NavLink>
                        </b>
                      </td>
                      <td />
                      <td>541</td>
                      <td>1 day ago</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            0xc352b534e8b98
                          </NavLink>
                        </b>
                      </td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            {" "}
                            WrappedCryptoPu
                          </NavLink>
                        </b>
                      </td>
                      <td>541</td>
                      <td>1 day ago</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            0xc352b534e8b98
                          </NavLink>
                        </b>
                      </td>
                      <td />
                      <td>541</td>
                      <td>1 day ago</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            0xc352b534e8b98
                          </NavLink>
                        </b>
                      </td>
                      <td>
                        <b>
                          <NavLink to="#" className="text-link">
                            {" "}
                            WrappedCryptoPu
                          </NavLink>
                        </b>
                      </td>
                      <td>541</td>
                      <td>1 day ago</td>
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

export default About;
