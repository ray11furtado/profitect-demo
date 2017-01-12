import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = { company: this.props.currentCompany };
  }

  handleSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ company: event.target.value });
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
              <h3 className="company">{this.props.currentCompany}</h3>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control margins"
                    placeholder="Search Company"
                    onChange={this.handleSearch}
                    onSubmit={this.handleSearch}
                  />
                <button
                  type="submit"
                  className="margins btn btn-default"
                  onClick={() => this.props.changeCompany(this.state.company)}
                >
                Submit
              </button>
                  <a className="">Account</a>
                </div>
                <button
                  type="button"
                  className="btn btn-default margins no-background-btn"
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
  }
}
function mapStateToProps(state) {
  return { currentCompany: state.currentCompany.name };
}

export default connect(mapStateToProps, actions)(Navbar);
