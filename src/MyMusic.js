//importin the react from the React Library
import React from "react";
//Styles for this component
const styles = {
  //Styling the music Container
  myMusicContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  //Styling the image Container
  image: {
    height: "75%",
    width: "45%",
    alignSelf: "center"
  },
  //Styling theinfo Container
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  //Styling the Status of Music Container
  statusBar: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  subInfo: {
    alignSelf: "center"
  },
  //The progress music bar
  seekBar: {
    width: "70%",
    height: "20%",
    border: "1px solid grey",
    cursor: "pointer",
    alignSelf: "center",
    display: "flex",
    border: "2px solid black"
  },
  fill: {
    height: "100%",
    backgroundColor: "royalblue"
  },
  currTime: {
    margin: "0",
    alignSelf: "center"
  },
  dur: {
    margin: "0",
    alignSelf: "center"
  },
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
//Class component of MyMusic
class MyMusic extends React.Component {
  constructor() {
    //Calling the parent class constructor
    super();
    //State to store component property
    this.state = {
      isMounted: true
    };
  }

  //componentDidMount lifecycle component
  componentDidMount() {
    let self = this;
    self.props.audio.play();

    //Calculating the audio palyed duration versus total duration
    self.props.audio.addEventListener("timeupdate", function () {
      if (self.state.isMounted) {
        var pos = self.props.audio.currentTime / self.props.audio.duration;
        self.updateTime();
        let fill = document.getElementById("fill");
        console.log(fill);
        if (fill !== null) {
          fill.style.width = pos * 100 + "%";
        }
      }
    });
  }

  updateTime = () => {
    this.setState({
      audio: this.props.audio
    });
  };

  componentWillUnmount() {
    this.state.isMounted = false;
  }

  render() {
    //Props related to Audio to be played
    let audio = this.props.audio;
    return (
      <div style={styles.myMusicContainer}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>WalkMan</p>
        </div>

        <div style={styles.info}>
          <img
            style={styles.image}
            src="https://images.hungama.com/c/1/1aa/a80/33004519/33004519_300x300.jpg"
          ></img>
          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}></h4>
            <p style={{ marginBottom: "0", fontWeight: "bold", padding: "10" }}>
              Ve Maahi
            </p>
            <p style={{ fontStyle: "italic" }}>ARJIT SINGH / NEHA KAKKAR</p>
          </div>
        </div>
        <marquee>
          Tu jee sakdi nai You can’t live without me. Main jee sakda nai Neither
          I can live without you. Koi doosri main shartan vi rakhda nai I don’t
          put any more conditions. Kya tere baajon mera What do I have without
          you? Sachiyan mohabbatan ve I could have no other true love, apart
          from you. Ho maahi kithe hor nahio milna Can’t be found anywhere else,
          sweetheart. Hor nahio milna Can’t be found anywhere else. Jithe vi tu
          chaleya haan Maahi main tere piche piche chalna I’ll follow you
          hand-in-hand, To wherever you go. Pichhe pichhe chaleya I will follow
          you. O maahi ve, O maahi ve. My dearest, my sweetheart Dil vich tere
          yaara mainu rehn de If you’d keep me in your heart Aankhon se yeh
          aankhon wali gal kehn de We’d talk through our eyes. Dhadkan dil di ae
          tainu pehchaane My heartbeat feels your presence. Tu mera hai main
          hoon teri rab bhi ye jaane You are mine and I, yours, even the
          almighty cannot deny Tu reh sakdi nai, main reh sakda nai We’re two
          incomplete halves. Tere bin yaara aur kitte takkda nai To be with you
          is all I want. Kya tere baajon mera Before or after you. Rang tera
          chadheya ve Ke hun koi rang nahio chadhna I could have no other true
          love, apart from you. Rang nahio chadheya could have no other true
          love Jithe vi tu chaleya haan Maahi main tere pichhe pichhe chalna
          I’ll follow you hand-in-hand, To wherever you go. Pichhe pichhe
          chaleya I want to follow you. Maahi mainu chhaddeyo naa Promise you
          won’t ever leave me. Ke tere bin dil nahiyo lagna I can’t think
          straight without you. Jithe vi tu chaleya haan Maahi main tere pichhe
          pichhe chalna I’ll follow you hand-in-hand, To wherever you go. Pichhe
          pichhe chaleya I want to follow you. FACEBOOK Latest Hindi Songs Jaane
          Kaise — Anamika Mamgain | Sanam M … Hum Hi Hum The — Bandish Vaz Mainu
          Das Tu — Imran Mahmudul Akhiyaan Na Akhiyaan — Asees Kaur | Gol … Tenu
          Aunda Nahi — Janhit Mein Jaari | P … Gulabi — Ittu Si Baat | Shreya
          Ghoshal … D N Me — Dino James Wapas Aa Jao — Arjun Kanungo Naughty
          Balam — Rahul Vaidya | Nikhita … Itna Pyaar Karunga — Babbu Maan |
          Shipr … Latest Translations Rithuragam Translation — Vaashi | Kesha …
          Chaiyaan Mein Saiyan Ki Translation — K … Ishq Paudiyan Translation —
          Mohammed Ir … Rangi Saari Translation — Jugjugg Jeeyo … Dil Todiye
          Translation — Ankit Tiwari Sun Bhi Le Translation — Ittu Si Baat | …
          295 Translation — Sidhu Moose Wala | Ni … Baarishan Mohabbat Wali
          Translation — M … Raah Dikha De Translation — Mohit Chauh … Teri
          Mohabbat Translation — Antara Mitr … Languages Punjabi Hindi Telugu
          Haryanvi Tamil Kannada Malayalam Urdu Marathi About LyricsRaag.com is
          your one-stop for lyrics in Punjabi, Hindi, Tamil, Telugu, Malayalam,
          and Kannada. We’re committed to providing you with the best English
          translations possible, with a focus on clear meanings and regular
          updates. We’re attempting to turn our love for Indian music into a
          successful online lyrics website. We hope you enjoy reading the
          LyricsRaag lyrics as much as we enjoy providing them. Translations
          Punjabi to English Hindi to English Tamil to English Telugu to English
          Malayalam to English Kannada to English Request a Translation Overview
          About Contact Disclaimer Legal Statement Terms of use Privacy policy
          Cookie policy RSS Sitemap LyricsRaag.Com Copyright © 2022. It is a
          daily updated website that contains lyrics to newly released Punjabi
          songs and Hindi music. You can also find lyrics and meanings for Tamil
          songs, Telugu lyrics, Malayalam lyrics, and Kannada lyrics.
        </marquee>
        <div style={styles.statusBar}>
          <p style={styles.currTime}>
            {audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}
          </p>
          <div style={styles.seekBar}>
            <div style={styles.fill} id="fill"></div>
          </div>
          <p style={styles.dur}>
            {audio != null ? Math.floor(audio.duration) : "0 / 0"}
          </p>
        </div>
      </div>
    );
  }
}

export default MyMusic;
