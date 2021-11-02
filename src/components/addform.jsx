import React from "react";

class AddForm extends Component {
  render() {
    return (
      <div id="addForm" className="container d-flex flex-column w-25">
        <i onClick={this.props.onAddFormClick} className="bi bi-x"></i>
        <label htmlFor="text">Name of place</label>
        <input type="text" name="name" onChange={this.props.onFormChange} />
        <label htmlFor="text">Town</label>
        <input type="text" name="town" onChange={this.props.onFormChange} />
        <label htmlFor="text">County</label>
        <select name="county" onChange={this.props.onFormChange}>
          {this.props.countiesList.slice(1).map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
        <label htmlFor="text">
          URL <em>(optional)</em>
        </label>
        <input type="text" name="url" onChange={this.props.onFormChange} />
        <label htmlFor="text">
          Latitude <em>(optional)</em>
        </label>
        <input type="text" name="latitude" onChange={this.props.onFormChange} />
        <label htmlFor="text">
          Longitude <em>(optional)</em>
        </label>
        <input
          type="text"
          name="longitude"
          onChange={this.props.onFormChange}
        />

        <button
          onClick={this.props.onAdd}
          className="btn btn-outline-secondary"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddForm;
