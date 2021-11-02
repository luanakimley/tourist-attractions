import React from "react";
import Home from "./components/home";
import Review from "./components/review";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
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

  render() {
    return this.state.loading ? (
      <div id="loading">
        <h3>Loading...</h3>
      </div>
    ) : (
      <div>
        <Router>
          <NavBar
            selectedAttractions={this.state.selectedAttractions}
            attractions={this.state.attractions}
            counties={this.state.counties}
            onFilter={this.handleCountiesFilter}
            onSearch={this.handleSearchQuery}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  attractions={this.state.attractions}
                  counties={this.state.counties}
                  selectedCounty={this.state.selectedCounty}
                  selectedAttractions={this.state.selectedAttractions}
                  chat={this.state.chat}
                />
              )}
            />
            <Route path="/review" exact component={() => <Review />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
