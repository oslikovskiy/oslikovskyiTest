import React, { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  state = {
    resData: []
  };

  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:8080/tickets`);
      const json = await response.json();
      this.setState({ resData: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { resData } = this.state;
    console.log(resData);

    return (
      <div>
        <Main resData={resData} />
      </div>
    );
  }
}

export default App;
