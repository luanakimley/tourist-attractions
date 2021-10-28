import React, { Component } from "react";
import Attractions from "./attractions";
import NavBar from "./navbar";
import AttractionSuggestionChatBot from "./chatbot";

class Home extends React.Component {
  state = {
    loading: true,
    attractions: null,
    counties: [],
    selectedCounty: "All Counties",
    selectedAttractions: null,
    chat: false,
  };

  async componentDidMount() {
    const url =
      "https://failteireland.azure-api.net/opendata-api/v1/attractions";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      selectedAttractions: data.results,
      attractions: data.results,
      loading: false,
    });

    const counties = this.state.attractions.map(
      (item) => item.address.addressRegion
    );
    const uniqueCounties = [...new Set(counties)].sort();
    uniqueCounties.unshift("All Counties");
    this.setState({ counties: uniqueCounties });
  }

  handleCountiesFilter = (e) => {
    let selected = e.target.textContent;

    this.setState({ selectedCounty: e.target.textContent });

    if (selected === "All Counties") {
      this.setState({ selectedAttractions: this.state.attractions });
    } else {
      this.setState({
        selectedAttractions: this.state.attractions.filter(
          (item) => item.address.addressRegion === selected
        ),
      });
    }
  };

  handleSearchQuery = (e) => {
    const query = e.target.value;

    let searchResults = this.state.selectedAttractions.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ selectedAttractions: searchResults });

    if (query === "") {
      if (this.state.selectedCounty === "All Counties") {
        this.setState({ selectedAttractions: this.state.attractions });
      } else {
        this.setState({
          selectedAttractions: this.state.attractions.filter(
            (item) => item.address.addressRegion === this.state.selectedCounty
          ),
        });
      }
    }
  };

  handleChatClick = (e) => {
    this.toggleChat();
  };

  toggleChat() {
    this.setState({ chat: !this.state.chat });
  }

  render() {
    return this.state.loading ? (
      <div className="d-flex align-items-center justify-content-center">
        <h3>Loading...</h3>
      </div>
    ) : (
      <div>
        <NavBar
          selectedAttractions={this.state.selectedAttractions}
          attractions={this.state.attractions}
          counties={this.state.counties}
          onFilter={this.handleCountiesFilter}
          onSearch={this.handleSearchQuery}
        />
        <Attractions
          attractions={this.state.selectedAttractions}
          county={this.state.selectedCounty}
          countiesList={this.state.counties}
        />
        {this.state.selectedAttractions.length === 0 ? (
          <div id="noResults" className="text-center">
            <p>No results found.</p>
            <i className="bi bi-x-circle-fill"></i>
          </div>
        ) : null}
        <button
          onClick={this.handleChatClick}
          className="btn btn-light"
          id="chatButton"
        >
          <i className="bi bi-chat-text-fill"></i>
        </button>
        {this.state.chat ? (
          <AttractionSuggestionChatBot attractions={this.state.attractions} />
        ) : null}
      </div>
    );
  }
}

export default Home;
