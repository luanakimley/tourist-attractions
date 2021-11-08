import React, { Component } from "react";
import StarRating from "./rating";

class Review extends Component {
  render() {
    function log(value) {
      console.log(value);
    }
    return (
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
            <h2>Review</h2>
            <div className="card">
              <div className="row justify-content-left d-flex">
                <div className="col-md-4 d-flex flex-column">
                  <div className="rating-box">
                    <h1 className="pt-4">4.0</h1>
                    <p className="">out of 5</p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="rating-bar0 justify-content-center">
                    <table className="text-left mx-auto">
                      <tr>
                        <td className="rating-label">Excellent</td>
                        <td className="rating-bar">
                          <div className="bar-container">
                            <div className="bar-5"></div>
                          </div>
                        </td>
                        <td className="text-right">123</td>
                      </tr>
                      <tr>
                        <td className="rating-label">Good</td>
                        <td className="rating-bar">
                          <div className="bar-container">
                            <div className="bar-4"></div>
                          </div>
                        </td>
                        <td className="text-right">23</td>
                      </tr>
                      <tr>
                        <td className="rating-label">Average</td>
                        <td className="rating-bar">
                          <div className="bar-container">
                            <div className="bar-3"></div>
                          </div>
                        </td>
                        <td className="text-right">10</td>
                      </tr>
                      <tr>
                        <td className="rating-label">Poor</td>
                        <td className="rating-bar">
                          <div className="bar-container">
                            <div className="bar-2"></div>
                          </div>
                        </td>
                        <td className="text-right">3</td>
                      </tr>
                      <tr>
                        <td className="rating-label">Terrible</td>
                        <td className="rating-bar">
                          <div className="bar-container">
                            <div className="bar-1"></div>
                          </div>
                        </td>
                        <td className="text-right">0</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <StarRating className="star" onChange={log} />
            <div className="card">
              <div className="row d-flex">
                <div className="">
                  <img
                    className="profile-pic"
                    src="https://i.imgur.com/V3ICjlm.jpg"
                  ></img>
                </div>

                <div className="d-flex flex-column">
                  <h3 className="mt-2 mb-0">Mukesh Kumar</h3>
                </div>
                <div className="ml-auto">
                  <p className="text-muted pt-5 pt-sm-3">10 Sept</p>
                </div>
              </div>
              <div className="row text-left">
                <h4 className="blue-text mt-3">
                  "An awesome activity to experience"
                </h4>
                <p className="content">
                  If you really enjoy spending your vacation 'on water' or would
                  like to try something new and exciting for the first time.
                </p>
              </div>
            </div>
            <div className="row text-left">
              <div className="mountains">
                <img className="pic" src="https://i.imgur.com/kjcZcfv.jpg" />
                <img className="pic" src="https://i.imgur.com/SjBwAgs.jpg" />
                <img className="pic" src="https://i.imgur.com/IgHpsBh.jpg" />
              </div>
            </div>
            <div className="row text-left mt-4">
              <div className="like mr-3 vote">
                <img src="https://i.imgur.com/mHSQOaX.png" />
                <span className="blue-text pl-2">20</span>
              </div>
              <div className="unlike vote">
                <img src="https://i.imgur.com/bFBO3J7.png" />
                <span className="text-muted pl-2">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
