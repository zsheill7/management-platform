import React, { Component } from "react";
import Card from "../uielements/card";

class TwitterResult extends Component {
  componentDidMount() {}
  render() {
    const Twitter = () => (
      <div>
        <a
          class="twitter-grid"
          href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw"
        >
          National Park Tweets
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
      </div>
    );
    return (
      <Card>
        <div>Hello this is the Twitter result page</div>
        <Twitter />
      </Card>
    );
  }
}

export default TwitterResult;
