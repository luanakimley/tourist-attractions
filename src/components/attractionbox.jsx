import React, { Component } from "react";
import EditForm from "./editform";
import PropTypes from "prop-types";

class AttractionBox extends Component {
  static propTypes = {
    countiesList: PropTypes.array,
    county: PropTypes.string,
    keys: PropTypes.number,
    attraction: PropTypes.object,
    onDelete: PropTypes.func,
    onEditChange: PropTypes.func,
    onEdit: PropTypes.func,
  };

  state = {
    showEditForm: false,
  };

  handleEditButtonClick = (e) => {
    this.toggleEditButton();
  };

  toggleEditButton() {
    this.setState({ showEditForm: !this.state.showEditForm });
  }

  render() {
    let map = `https://maps.google.com/maps?q=${this.props.attraction.geo.latitude},${this.props.attraction.geo.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return (
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 position-relative">
        <div className="icon-box">
          <h4 spellCheck="false" className="title">
            <a
              href={this.props.attraction.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {this.props.attraction.name}
            </a>
          </h4>

          <i className="fa fa-map-pin"></i>
          <p className="description">
            {this.props.attraction.address.addressLocality}
          </p>
          <p className="description">
            {this.props.attraction.address.addressRegion}
          </p>
          {this.props.county === "All Counties" ? (
            <div>
              <i
                data-id={this.props.keys}
                id="trash"
                className="bi bi-trash"
                onClick={this.props.onDelete}
              ></i>
              <i
                id="pencil"
                className="bi bi-pencil"
                onClick={this.handleEditButtonClick}
              ></i>
            </div>
          ) : null}
          <iframe title="map" id="map" src={map}></iframe>
        </div>
        {this.state.showEditForm ? (
          <EditForm
            keys={this.props.attraction.name}
            countiesList={this.props.countiesList}
            onEditChange={this.props.onEditChange}
            onEdit={this.props.onEdit}
            closeForm={this.handleEditButtonClick}
          />
        ) : null}
      </div>
    );
  }
}

export default AttractionBox;
