import React, { Component } from "react";

export class MapContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    var geolocation = new qq.maps.Geolocation("J7HBZ-TKFW5-433IY-QATBZ-5P6SV-OMF3H", "myapp");

    document.getElementById("pos-area").style.height = document.body.clientHeight - 110 + "px";

    var options = { timeout: 9000 };
    var positionNum = 0;
    function showPosition(position) {
      console.log("position", position);
      positionNum++;
      document.getElementById("demo").innerHTML += "序号：" + positionNum;
      document
        .getElementById("demo")
        .appendChild(document.createElement("pre")).innerHTML = JSON.stringify(position, null, 4);
      document.getElementById("pos-area").scrollTop = document.getElementById(
        "pos-area"
      ).scrollHeight;
    }

    function showErr() {
      positionNum++;
      document.getElementById("demo").innerHTML += "序号：" + positionNum;
      document.getElementById("demo").appendChild(document.createElement("p")).innerHTML =
        "定位失败！";
      document.getElementById("pos-area").scrollTop = document.getElementById(
        "pos-area"
      ).scrollHeight;
    }
    console.log(geolocation);
    geolocation.getLocation(showPosition, showErr, options);
  }

  fnGet = () => {
    var geolocation = new qq.maps.Geolocation("J7HBZ-TKFW5-433IY-QATBZ-5P6SV-OMF3H", "myapp");
    geolocation.getLocation(
      (e) => console.log(e),
      (e) => console.log("xxx123123", e),
      { timeout: 9000 }
    );
  };
  render() {
    return (
      <div>
        qq map  <button onClick={this.fnGet}>获取</button>
        <div id="pos-area">
          <p id="demo">
            点击下面的按钮，获得对应信息：
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default MapContainer;
