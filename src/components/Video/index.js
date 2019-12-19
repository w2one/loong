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
    duration: 0,
    controlsFlag: 0
  };

  // componentDidMount() {
  //   window.addEventListener("orientationchange", function() {
  //     if (window.orientation == 180 || window.orientation == 0) {
  //       // alert("竖屏");
  //     }
  //     if (window.orientation == 90 || window.orientation == -90) {
  //       // alert("横屏");
  //     }
  //   });
  // }

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
    this.fnResetControls();
  };

  /**
   * update
   */
  fnUpdate = () => {
    // console.log("time", this.video.currentTime);
    let { controlsFlag } = this.state;

    // if (this.video.currentTime - currentTime > 0.3) {
    //   this.video.currentTime = currentTime;
    // } else {
    this.setState({ currentTime: this.video.currentTime });
    // }
    this.setState({ duration: this.video.duration });

    if (controlsFlag >= 0) {
      let timeout = setTimeout(() => {
        let { controlsFlag } = this.state;
        controlsFlag--;
        this.setState({ controlsFlag });
        if (controlsFlag === 0) clearTimeout(timeout);
      }, 1000);
    }
  };

  fnSliderChange = (value) => {
    const { duration } = this.state;
    const currentTime = (value / 100) * duration;
    const { drag = true } = this.props;
    if (drag) {
      this.video.currentTime = currentTime;
    }
    this.fnResetControls();
  };

  fnResetControls = () => {
    this.setState({ controlsFlag: 5 });
  };

  /**
   * full screen
   */
  fnFullScreen = () => {
    console.log("fullscreen");
  };

  fnShow = () => {
    console.log("show");
  };

  render() {
    const { paused, currentTime, duration, controlsFlag } = this.state;
    const { data = [], controls = false } = this.props;
    return (
      <>
        <div className={Style.videoPlayer}>
          <video
            controls={controls}
            preload
            loop
            webkitPlaysinline={"true"}
            playsinline={"true"}
            ref={(e) => (this.video = e)}
            onTimeUpdate={this.fnUpdate}
          >
            {data.map((item, index) => (
              <source key={index} src={item} />
            ))}
          </video>

          {paused && (
            <div className={Style.mask} onClick={this.fnShow}>
              {paused && <div className={Style.playIcon} onClick={this.fnPlay}></div>}
            </div>
          )}

          {!paused && (
            <div
              style={{ width: "100%" }}
              className={Style.maskTime}
              onClick={() => this.setState({ controlsFlag: 5 })}
            >
              {controlsFlag > 0 && (
                <div className={Style.videoControls}>
                  <div style={{ padding: "0 0.1rem", display: "flex" }}>
                    <div className={Style.btn} onClick={this.fnPlay}>
                      {paused ? ">" : "||"}
                    </div>
                    <div>{formatSeconds(currentTime)}</div>
                    <Slider
                      value={(currentTime / duration) * 100 || 0}
                      onChange={this.fnSliderChange}
                      style={{ margin: "0 15px" }}
                    />
                    <div>{formatSeconds(duration)}</div>
                    <div className={Style.btn} onClick={this.fnFullScreen}>
                      f
                    </div>
                  </div>
                  <div></div>
                </div>
              )}
            </div>
          )}
        </div>
      </>
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
