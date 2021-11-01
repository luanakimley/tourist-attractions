import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <a>Irish Tourist Attractions</a>
            </h1>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <Link to="/">
                    <a className="nav-link scrollto active">Home</a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Counties</span> <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    {this.props.counties.map((item, index) => (
                      <li onClick={this.props.onFilter} key={index}>
                        <a>{item}</a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link to="/review">
                    <a className="nav-link scrollto">Review</a>
                  </Link>
                </li>
                <form
                  id="searchBar"
                  className="form-inline d-flex justify-content-center md-form form-sm mt-0 mr-0"
                >
                  <i className="bi bi-search" aria-hidden="true"></i>
                  <input
                    value={this.state.query}
                    onChange={this.props.onSearch}
                    className="form-control form-control-sm ml-3 w-100"
                    type="text"
                    placeholder="Search"
                  />
                </form>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(NavBar);
