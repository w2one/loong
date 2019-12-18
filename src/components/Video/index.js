/**
 * video
 */
import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Style from "./style";

export class VideoDemo extends Component {
  state = {
    currentTime: 0,
    paused: true,
    duration: 0
  };

  componentDidMount() {
    window.addEventListener("orientationchange", function() {
      if (window.orientation == 180 || window.orientation == 0) {
        // alert("竖屏");
      }
      if (window.orientation == 90 || window.orientation == -90) {
        // alert("横屏");
      }
    });
  }

  /**
   * play
   */
  fnPlay = () => {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
    this.setState({ paused: this.video.paused, duration: this.video.duration });
  };

  /**
   * update
   */
  fnUpdate = () => {
    // console.log("time", this.video.currentTime);
    const { currentTime } = this.state;
    if (this.video.currentTime - currentTime > 0.3) {
      this.video.currentTime = currentTime;
    } else {
      this.setState({ currentTime: this.video.currentTime });
    }
    this.setState({ duration: this.video.duration });
  };

  fnSliderChange = (value) => {
    const { duration } = this.state;
    const currentTime = (value / 100) * duration;
    this.video.currentTime = currentTime;
    this.setState({ currentTime });
  };

  /**
   * full screen
   */
  fnFullScreen = () => {
    console.log("fullscreen");
  };

  render() {
    const { paused, currentTime, duration } = this.state;
    const { data = [], controls = false } = this.props;
    return (
      <div>
        <div className="videoPlayer" id="videoContainer">
          <video
            id="video"
            width="100%"
            height="auto"
            controls={controls}
            preload
            webkitPlaysinline={"true"}
            playsinline={"true"}
            ref={(e) => (this.video = e)}
            onTimeUpdate={this.fnUpdate}
          >
            {data.map((item, index) => (
              <source key={index} src={item} />
            ))}
          </video>
          <div id="videoControls">
            <div style={{ padding: "0 .5rem", display: "flex" }}>
              <div>{formatSeconds(currentTime)}</div>
              <Slider
                value={(currentTime / duration) * 100 || 0}
                onChange={this.fnSliderChange}
                style={{ margin: "0 15px" }}
                // onAfterChange={this.onAfterChange}
              />
              <div>{formatSeconds(duration)}</div>
              {/* <button title="FullScreen Toggle" onClick={this.fnFullScreen}>
                全
              </button> */}
            </div>
            <div></div>
          </div>
        </div>
        {!controls && (
          <div className={Style.btnPlay} onClick={this.fnPlay}>
            {paused ? <div className={Style.playIcon}></div> : ""}
          </div>
        )}
      </div>
    );
  }
}

export default VideoDemo;

function formatSeconds(value) {
  var theTime = parseInt(value | 0); // 秒
  var theTime1 = 0; // minute
  var theTime2 = 0; // hour
  if (theTime >= 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    // alert(theTime1+"-"+theTime);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
    }
  }
  var result = parseInt(theTime);
  result = result >= 10 ? "" + parseInt(theTime) : "0" + parseInt(theTime);
  if (theTime1 > 0) {
    var m = parseInt(theTime1);
    m = m >= 10 ? "" + m : "0" + m;
    result = "" + m + ":" + result;
  } else {
    result = "00:" + result;
  }

  if (theTime2 > 0) {
    result = "" + parseInt(theTime2) + ":" + result;
  }

  return result;
}
