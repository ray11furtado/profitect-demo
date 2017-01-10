import React from 'react';

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
          <h3 className="">{props.company}</h3>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li>
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control margins" placeholder="Search Company" />
              <a className="">Account</a>
            </div>
            <button
              type="button" id="uploader"
              className="btn btn-default margins"
              aria-label="Left Align"
            >
              <span className="glyphicon glyphicon-download-alt margins" aria-hidden="true" />
            </button>
          </form>
        </li>
      </ul>
    </div>
  </nav>
);


export default Navbar;
