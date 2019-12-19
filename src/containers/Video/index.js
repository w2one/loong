import React, { Component } from "react";
import { Video } from "@components";

export class VideoDemo extends Component {
  render() {
    return (
      <div>
        <Video
          data={[
            "http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.ogg",
            "http://jay.shanghaim.net/Help,%20I%E2%80%99m%20stuck%20in%20an%20event-loop.mp4"
          ]}
          drag={true}
        />

        <Video
          data={[
            "http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.ogg",
            "http://jay.shanghaim.net/Help,%20I%E2%80%99m%20stuck%20in%20an%20event-loop.mp4"
          ]}
          drag={false}
        />
      </div>
    );
  }
}

export default VideoDemo;
