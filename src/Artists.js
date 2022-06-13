//import need for functionalities
import React from "react";

//Styles object to use styles
const styles = {
  //Styling the artist content
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  //Arist image container styling
  imageContainer: {
    height: "85%",
    width: "85%",
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cVZm0hx3q60RfcYifSQo_c9G6IPMrITgMQ&usqp=CAU')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
    border: "3px solid black"
  },
  image: {
    width: "2rem",
    height: "2rem"
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  info2: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  subInfo: {
    alignSelf: "center"
  },
  //Title Bar styling
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
//Class component Artist to display data of Artist
class Artists extends React.Component {
  render() {
    return (
      //main container
      <div style={styles.artistsContainer}>
        {/* Title Bar  */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>WalkMan</p>
        </div>
        {/* Artist data */}
        <div style={{ fontSize: 35, alignSelf: "center" }}>Neha Kakkar</div>
        <div style={styles.info}>
          <div style={styles.imageContainer}></div>
        </div>
      </div>
    );
  }
}

export default Artists;
