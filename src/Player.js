//Imports for th functionalities addition and use other child
import React from "react";
import ZingTouch from "zingtouch";
import Screen from "./Screen";

//Styles used for the component
const styles = {
  //Ipod styling
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(white,yellow)",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px",
    border: "4px solid black"
  },
  //Wheel used for navigating through menu
  wheel: {
    width: "75%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "#ffb592",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    border: "2px solid black"
  },
  //Central button styling to select the options
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  //Menu button styling
  menuButton: {
    alignSelf: "center"
  },
  //Play Button styling
  playButton: {
    alignSelf: "center"
  },
  //Main Button styling
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  //Image styling
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white",
    height: 35,
    width: 35
  }
};
//Class component Player
class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying",
      activePage: "Home",
      enter: 0,
      play: true
    };
  }

  rotateWheel = () => {
    //using zing touch to handle clockwise and anti clockwise gestures
    var containerElement = document.getElementById("inner-container");
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;
    // Changing the options on rotate
    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {
        var newAngle = event.detail.distanceFromLast;
        //New angle to detect the selected option
        if (newAngle < 0) {
          change++;
          //Changing the state according the current active page value
          if (change === 15) {
            change = 0;
            //Clockwise movent menu toggle
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music"
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Video"
                });
              } else if (self.state.activeItem === "Video") {
                self.setState({
                  activeItem: "Settings"
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "NowPlaying"
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists"
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic"
                });
              }
            }
          }
        } else {
          // AntiClockwise movent menu toggle
          console.log(change);
          change++;
          if (change === 15) {
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Settings"
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying"
                });
              } else if (self.state.activeItem === "Video") {
                self.setState({
                  activeItem: "Music"
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Video"
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists"
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic"
                });
              }
            }
          }
        }
      });
    } else {
    }
  };
  // Function to change the page according to activeItem value
  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying",
        activePage: "MyMusic"
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem
      });
    }
  };
  //Function to toggle to Home Screen
  changePageToHomeScreen = () => {
    if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artists"
    ) {
      this.setState({
        activeItem: "Music",
        activePage: "Home"
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "Home"
      });
    }
  };

  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true
        });
      }
      console.log("toggled");
    }
  };
  //Lifecycle component
  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio);
    this.setState({
      audio: audio
    });
    console.log(this.state);
  }

  render() {
    return (
      <div style={styles.ipodContainer}>
        {/* Screen Comp to display the current data/img related to selected item       */}
        <Screen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
        />
        {/* Container to play pause fast forward , back and Fast BackWard */}
        {/* Back To Main menu Option */}
        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel}
        >
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <img
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
              />
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              {/* Fast Backward */}
              <img
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/rewind-512.png"
              />
              {/* Selecy option button */}
              <div
                onClick={this.changePage}
                style={{
                  backgroundColor: "black",
                  width: "4rem",
                  height: "4rem"
                }}
              ></div>
              {/* Fast Forward */}
              <img
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Forward_font_awesome.svg/1200px-Forward_font_awesome.svg.png"
              />
            </div>
          </div>
          {/* Play Pause Option */}
          <div style={styles.buttonContainer}>
            <div onClick={this.toggle} style={styles.playButton}>
              <img
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                src="https://cdn3.iconfinder.com/data/icons/multimedia-and-media-player-solid/48/Artboard_14-512.png"
              />
            </div>
          </div>
        </div>
        <audio className="audio-element">
          <source src={{}}></source>
        </audio>
      </div>
    );
  }
}

export default Player;
