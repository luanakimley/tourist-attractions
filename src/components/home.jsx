import React, { Component } from "react";
import Attractions from "./attractions";
import AttractionSuggestionChatBot from "./chatbot";
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    attractions: PropTypes.array,
    counties: PropTypes.array,
    selectedCounty: PropTypes.string,
    selectedAttractions: PropTypes.array,
  };

  state = {
    attractions: this.props.attractions,
    counties: this.props.counties,
    selectedCounty: this.props.selectedCounty,
    selectedAttractions: this.props.selectedAttractions,
    chat: false,
  };

  handleChatClick = (e) => {
    this.toggleChat();
  };

  toggleChat() {
    this.setState({ chat: !this.state.chat });
  }

  render() {
    return (
      <div>
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
          <AttractionSuggestionChatBot
            attractions={this.state.attractions}
            closeChat={this.handleChatClick}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
