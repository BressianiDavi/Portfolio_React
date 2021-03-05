import React, { Fragment } from "react";
import Body from "./components/Body";
class App extends React.Component {
  render() {
    const portfolioList = [
      {
        image: "https://fakeimg.pl/250x100/",
        description: "um trabalho aí",
        link: "https://mattfarley.ca/",
      },
      {
        image: "https://fakeimg.pl/250x100/",
        description: "outro trabalho aí",
        link: "https://mattfarley.ca/",
      },
    ];
    return (
      <>
        <Body portfolioList={portfolioList} />
      </>
    );
  }
}

export default App;
