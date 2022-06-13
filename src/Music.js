//import to functionalities addition
import React from "react";
import { ListGroup } from "react-bootstrap";

//Styles for Music Screen, MenuList, images, Title Bar...
const styles = {
  //Srtyling of music screen
  musicScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row"
  },
  menuList: {
    //Styling the menu list
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1"
  },
  imageContainer: {
    //Styling the image
    height: "100%",
    width: "50%",
    backgroundImage:
      'url("https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0"
  },
  titleBar: {
    //Styling the title Bar
    height: "10%",
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

//Class component to Music realted functions
class Music extends React.Component {
  render() {
    return (
      <div style={styles.musicScreen} id="music-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>WalkMan</p>
          </div>
          <ListGroup style={{ borderRadius: "0" }}>
            {/* Display the activeItem obtained from the parent component */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "MyMusic" ? "active" : ""}
            >
              Favourites{" "}
              {this.props.activeItem === "MyMusic" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            {/* Display the activeItem obtained from the parent component */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Artists" ? "active" : ""}
            >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

export default Music;
