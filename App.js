import React from "react";
import { TopHeader } from "./TopHeader";
import { FeedRows } from "./FeedRows";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TopHeader />{" "}
        </div>
        <div>
          <FeedRows />{" "}
        </div>
        <div className="footerBar"></div>
      </div>
    );
  }
}
export default App;
