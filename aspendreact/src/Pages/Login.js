import "../App.css";

import {NavLink} from 'react-router-dom'


function Login() {
  return (
<section className="container-fluid mt-5 mb-5">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-lg-6 col-md-12 col-12">
        <h4 className="col-12 mb-0">Login(<NavLink to="/signup" className="text-link">Signup</NavLink> or <NavLink to="reset_password" className="text-link">Forgot Password</NavLink>)</h4>
        <div className="col-12 mt-4">
          <form className="form-inline form__search">
            <input type="email" className="form-control mb-2 col-12 form__search--input" id="email" placeholder="email" />
            <input type="password" className="form-control mb-2 col-12 form__search--input" id="password" placeholder="password" />
            <button type="submit" className="btn btn-small btn-primary mb-2 col-12 text-left form__search--btn"><b>Search</b></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Login;
