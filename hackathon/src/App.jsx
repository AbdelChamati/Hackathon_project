import React  from "react";
// import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Slider from "./components/Main/Slider";
import Footer from "./components/Footer/Footer";
import image1 from "./assets/img/image1.png";
//import main from "./assets/img/main.gif";
// import image3 from "./assets/img/image3.png";
// import image5 from "./assets/img/image5.jpeg";
// import Subscribe from "./components/users/Subscribe";
import Contact from "./components/contact/Contact";
// import Job from "./components/Work/Job";
import world from "./assets/img/world.png";
import water from "./assets/img/water.jpeg";



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Main imageSrc={water}/>
      <Slider
      imageSrc={image1}
      title={"Web Dev"}
      subtitle={"Our experts will provide you with the best solutions"}
      />
      <Slider
      imageSrc={world}
      title={"Online Marketing"}
      subtitle={"You don´t know how to reach your goal, don´t worry!"}
      flipped={true}
      />
      <br />
      <br />
      <br />
      {/* <Job /> */}
      <br />
      <br />
      <br />
      <Contact />
      {/* <Subscribe /> */}
      <Footer />
    </>

  );
}

export default App;
