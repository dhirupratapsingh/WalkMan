//import required for functionalities and view of the model
import React from "react";
import Player from "./Player";

//Main Page background image
const back = {
  img: {
    backgroundImage: `url('https://cdn.dribbble.com/users/1400295/screenshots/3390089/dancingnotes.gif')`
  }
};
//Functional Component to display the IPOD
function App() {
  return (
    <div className="App" style={back.img}>
      <h1 style={{ fontWeight: "bold", alignSelf: "center", marginLeft: 350 }}>
        ENJOY USING MY WALKMAN{" "}
      </h1>
      <Player />
    </div>
  );
}

export default App;
