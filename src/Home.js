//imports for functionality
import React from "react";
import { ListGroup } from "react-bootstrap";
const styles = {
  //Styling the homescreen
  homeScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row"
  },
  //Menu list styling
  menuList: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1"
  },
  //Image container styling
  imageContainer: {
    height: "100%",
    width: "50%",
    backgroundImage:
      'url("https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0"
  },
  //Adding styles for title bar
  titleBar: {
    height: "15%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between"
  }
};
//Class component Home to display the data of homescreen
class Home extends React.Component {
  render() {
    return (
      //HomeScreen container div containg menu optionsMusic and Recently played music
      <div style={styles.homeScreen} id="home-screen">
        <div style={styles.menuList} id="menu-list">
          {/* Title bar  */}
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold", fontSize: 25 }}>
              <marquee>WalkMan</marquee>
            </p>
          </div>
          {/* List to Display options on Home Screen */}
          <ListGroup style={{ borderRadius: "0" }}>
            {/* The activeItem is changed according to selected menu option currently Music in List Group */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
                <span style={{ float: "right", fontWeight: "bold" }}></span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            {/* The activeItem is changed according to selected menu option currently Now Playing in List Group */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "NowPlaying" ? "active" : ""}
            >
              Recent Play{" "}
              {this.props.activeItem === "NowPlaying" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>
                  <marquee style={{ display: "flex" }}>
                    I'm sorry but Don't wanna talk, I need a moment 'fore I go
                    It's nothing personal I draw the blinds
                  </marquee>
                </span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            {/* The activeItem is changed according to selected menu option currently Now Playing in List Group */}

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Settings" ? "active" : ""}
            >
              Settings{" "}
              {this.props.activeItem === "Settings" ? (
                <span style={{ float: "right", fontWeight: "bold" }}></span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            {/* The activeItem is changed according to selected menu option currently Now Playing in List Group */}

            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Video" ? "active" : ""}
            >
              Video{" "}
              {this.props.activeItem === "Video" ? (
                <span style={{ float: "right", fontWeight: "bold" }}></span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* Image related  Container */}
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

export default Home;
