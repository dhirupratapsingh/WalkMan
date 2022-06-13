// Imports to add functionalities
import React from "react";

//Styles related to this component
const styles = {
  //Settings styling
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
  //Title bars
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    alignSelf: "center"
  }
};
//Class component Settingss
class Settings extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        {/* Title Bar styling */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>WalkMan</p>
        </div>
        {/* Display options in settings as image */}
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <img style={styles.image} src="https://i.stack.imgur.com/NMzGI.png" />
        </div>
      </div>
    );
  }
}

export default Settings;
