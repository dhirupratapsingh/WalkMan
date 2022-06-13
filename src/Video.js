// Imports to add functionalities
import React from "react";

//Styles to add in component
const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  //Image styling
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  //Title Bar
  titleBar: {
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
//Class component Video
class Video extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>WalkMan</p>
        </div>
        <div style={{ width: "100%", height: "90%" }}>
          {/* Display the video on selecting the video option */}
          <img
            style={styles.image}
            src="https://media3.giphy.com/media/3o6wrrI7piafCoRlwk/giphy.gif"
          />
        </div>
      </div>
    );
  }
}

export default Video;
