//Importing the child component to be used in this component
import React from "react";
import Home from "./Home";
import Music from "./Music";
import Video from "./Video";
import Settings from "./Settings";
import MyMusic from "./MyMusic";
import Artists from "./Artists";

//styles to be used in this comp
const styles = {
  screen: {
    height: "50%",
    width: "95%",
    borderRadius: "12px",
    backgroundColor: "white",
    border: "2px solid black",
    marginTop: "1rem"
  }
};
//Class Componennt Screen
class Screen extends React.Component {
  render() {
    return (
      // Render all menu otions on Screen
      <div style={styles.screen} id="screen-container">
        {this.props.activePage === "Home" ? (
          <Home activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Music" ? (
          <Music activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Video" ? <Video /> : null}
        {this.props.activePage === "Settings" ? <Settings /> : null}
        {this.props.activePage === "MyMusic" ? (
          <MyMusic audio={this.props.audio} />
        ) : null}
        {this.props.activePage === "Artists" ? <Artists /> : null}
      </div>
    );
  }
}

export default Screen;
