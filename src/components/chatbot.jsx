import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#198524",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#198524",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

class AttractionSuggestion extends Component {
  render() {
    const { steps, attractions } = this.props;
    const location = steps.location.value;
    const type = steps.type.value;

    const filteredByLocation =
      location !== "All Counties"
        ? attractions.filter((a) => a.address.addressRegion === location)
        : attractions;

    const filteredByType =
      type !== "Anything"
        ? filteredByLocation.filter((a) => a["@type"].includes(type))
        : filteredByLocation;

    const randomAttraction =
      filteredByType.length > 0
        ? filteredByType[Math.floor(Math.random() * filteredByType.length)].name
        : "No results found. Try another option!";

    return <div id="randomAttraction">{randomAttraction}</div>;
  }
}

class AttractionSuggestionChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: this.props.attractions,
    };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id="chatBot">
          <i className="bi bi-x" onClick={this.props.closeChat}></i>
          <ChatBot
            steps={[
              {
                id: "1",
                message: "Hi, can't decide on where to go?",
                trigger: "2",
              },
              {
                id: "2",
                options: [{ value: 1, label: "Yes", trigger: 3 }],
              },
              {
                id: "3",
                message: "Don't worry, I can help you!",
                trigger: "4",
              },
              {
                id: "4",
                message:
                  "I will give you an attraction suggestion based on your preferences :)",
                trigger: "5",
              },
              {
                id: "5",
                message: "First of all, where are you going?",
                trigger: "location",
              },
              {
                id: "location",
                options: [
                  { value: "All Counties", label: "Anywhere", trigger: "6" },
                  { value: "Carlow", label: "Carlow", trigger: "6" },
                  { value: "Clare", label: "Clare", trigger: "6" },
                  { value: "Cork", label: "Cork", trigger: "6" },
                  { value: "Donegal", label: "Donegal", trigger: "6" },
                  { value: "Dublin", label: "Dublin", trigger: "6" },
                  { value: "Galway", label: "Galway", trigger: "6" },
                  { value: "Kerry", label: "Kerry", trigger: "6" },
                  { value: "Kilkenny", label: "Kilkenny", trigger: "6" },
                  { value: "Leitrim", label: "Leitrim", trigger: "6" },
                  { value: "Limerick", label: "Limerick", trigger: "6" },
                  { value: "Mayo", label: "Mayo", trigger: "6" },
                  { value: "Sligo", label: "Sligo", trigger: "6" },
                  { value: "Waterford", label: "Waterford", trigger: "6" },
                  { value: "Wexford", label: "Wexford", trigger: "6" },
                  { value: "Wicklow", label: "Wicklow", trigger: "6" },
                ],
              },
              {
                id: "6",
                message: "What type of attractions are you interested in?",
                trigger: "type",
              },
              {
                id: "type",
                options: [
                  { value: "Anything", label: "Anything", trigger: "7" },
                  {
                    value: "LandmarksOrHistoricalBuildings",
                    label: "Landmark / Historical Building",
                    trigger: "7",
                  },
                  { value: "Landform", label: "Landform", trigger: "7" },
                  { value: "Museum", label: "Museum", trigger: "7" },
                  {
                    value: "CafeOrCoffeeShop",
                    label: "Cafe / Coffee Shop",
                    trigger: "7",
                  },
                  { value: "Beach", label: "Beach", trigger: "7" },
                  { value: "Sculpture", label: "Sculpture", trigger: "7" },
                  { value: "ArtGallery", label: "Art Gallery", trigger: "7" },
                  {
                    value: "ShoppingCenter",
                    label: "Shopping Center",
                    trigger: "7",
                  },
                  {
                    value: "SportsActivityLocation",
                    label: "Sports Activity",
                    trigger: "7",
                  },
                  {
                    value: "FoodEstablishment",
                    label: "Food Establishment",
                    trigger: "7",
                  },
                ],
              },
              {
                id: "7",
                message: "Thanks! Here is my suggestion: ",
                trigger: "8",
              },
              {
                id: "8",
                component: (
                  <AttractionSuggestion attractions={this.state.attractions} />
                ),
                end: true,
              },
            ]}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default AttractionSuggestionChatBot;
