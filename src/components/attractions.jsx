import React, { Component } from "react";
import AttractionBox from "./attractionbox";
import AddForm from "./addform";

class Attractions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      county: "Carlow",
      editCounty: "Carlow",
      attractions: this.props.attractions,
      showAddForm: false,
      editName: "",
      editTown: "",
      editUrl: "",
      editLongitude: "",
      editLatitude: "",
    };
  }

  handleAddFormClick = (e) => {
    this.toggleAddForm();
  };

  toggleAddForm() {
    this.setState({ showAddForm: !this.state.showAddForm });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttractionsAdd = (e) => {
    let newPlace = {
      name: this.state.name,
      url: this.state.url,
      address: {
        addressLocality: this.state.town,
        addressRegion: this.state.county,
      },
      geo: { latitude: this.state.latitude, longitude: this.state.longitude },
    };

    if (this.state.name.length > 0 && this.state.town.length > 0) {
      this.setState({ attractions: this.props.attractions.push(newPlace) });
    }
  };

  handleDelete = (e) => {
    const selected = e.currentTarget.dataset.id;
    const attractions = this.props.attractions.splice(selected, 1);
    this.setState({ attractions: attractions });
  };

  handleModify = (e) => {
    const selected = e.currentTarget.dataset.id;
    const selectedItem = this.props.attractions.find(
      (attraction) => attraction.name === selected
    );
    const selectedIndex = this.props.attractions.findIndex(
      (attraction) => attraction.name === selected
    );

    let updatedAttractions = this.props.attractions;

    if (this.state.editName.length > 0) {
      selectedItem.name = this.state.editName;
    }

    if (this.state.editTown.length > 0) {
      selectedItem.address.addressLocality = this.state.editTown;
    }

    selectedItem.address.addressRegion = this.state.editCounty;

    if (this.state.editUrl.length > 0) {
      selectedItem.address.addressLocality = this.state.editTown;
    }

    if (this.state.editLatitude.length > 0) {
      selectedItem.address.addressLocality = this.state.editTown;
    }

    if (this.state.editLongitude.length > 0) {
      selectedItem.address.addressLocality = this.state.editTown;
    }

    updatedAttractions[selectedIndex] = selectedItem;

    this.setState({ attractions: updatedAttractions });
  };

  handleSort = (e) => {
    if (e.target.value === "name") {
      this.setState({
        attractions: this.props.attractions.sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
        ),
      });
    }

    if (e.target.value === "town") {
      this.setState({
        attractions: this.props.attractions.sort((a, b) =>
          a.address.addressLocality.toUpperCase() <
          b.address.addressLocality.toUpperCase()
            ? -1
            : 1
        ),
      });
    }

    if (e.target.value === "county") {
      this.setState({
        attractions: this.props.attractions.sort((a, b) =>
          a.address.addressRegion.toUpperCase() <
          b.address.addressRegion.toUpperCase()
            ? -1
            : 1
        ),
      });
    }
  };

  render() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>Irish Tourist Attractions</h1>
            </div>
          </div>

          <div className="text-center">
            {this.props.county === "All Counties" ? (
              <div className="mb-20">
                <a
                  onClick={this.handleAddFormClick}
                  className="btn-get-started mb-20"
                >
                  Add Tourist Attraction
                </a>
                {this.state.showAddForm ? (
                  <AddForm
                    countiesList={this.props.countiesList}
                    onFormChange={this.handleChange}
                    onAddFormClick={this.handleAddFormClick.bind(this)}
                    onAdd={this.handleAttractionsAdd.bind(this)}
                  />
                ) : null}
              </div>
            ) : null}

            <div id="sortDiv">
              <i className="bi bi-sort-alpha-down"></i>
              <select className="w-20" onChange={this.handleSort}>
                <option value="">None</option>
                <option value="name">Sort by Name</option>
                <option value="town">Sort by Town</option>
                <option value="county">Sort by County</option>
              </select>
            </div>

            <h3 id="countyTitle" className="text-center">
              {this.props.county}
            </h3>

            <div className="row icon-boxes">
              {this.props.attractions.map((attraction, index) => (
                <AttractionBox
                  countiesList={this.props.countiesList}
                  key={index}
                  county={this.props.county}
                  keys={index}
                  attraction={attraction}
                  onDelete={this.handleDelete.bind(this)}
                  onEditChange={this.handleChange}
                  onEdit={this.handleModify.bind(this)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Attractions;
