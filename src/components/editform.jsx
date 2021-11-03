import React, { Component } from "react";
import PropTypes from "prop-types";

class EditForm extends Component {
  static propTypes = {
    keys: PropTypes.string,
    countiesList: PropTypes.array,
    onEditChange: PropTypes.func,
    onEdit: PropTypes.func,
    closeForm: PropTypes.func,
  };

  render() {
    return (
      <div id="editForm">
        <i onClick={this.props.closeForm} className="bi bi-x"></i>
        <h5>Modify Attraction</h5>
        <label htmlFor="text">Name of place</label>
        <br />
        <input type="text" name="editName" onChange={this.props.onEditChange} />
        <br />
        <label htmlFor="text">Town</label>
        <br />
        <input type="text" name="editTown" onChange={this.props.onEditChange} />
        <br />
        <label htmlFor="text">County</label>
        <select name="editCounty" onChange={this.props.onEditChange}>
          {this.props.countiesList.slice(1).map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
        <br />

        <label htmlFor="text">URL</label>
        <br />
        <input type="text" name="editUrl" onChange={this.props.onEditChange} />
        <br />

        <label htmlFor="text">Latitude</label>
        <br />
        <input
          type="text"
          name="editLatitude"
          onChange={this.props.onEditChange}
        />
        <br />

        <label htmlFor="text">Longitude</label>
        <br />
        <input
          type="text"
          name="editLongitude"
          onChange={this.props.onEditChange}
        />

        <button
          data-id={this.props.keys}
          onClick={this.props.onEdit}
          className="btn btn-outline-light"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default EditForm;
