import React  from "react";
// import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Slider from "./components/Main/Slider";
import Footer from "./components/Footer/Footer";
import image1 from "./assets/img/image1.png";
//import main from "./assets/img/main.gif";
import image3 from "./assets/img/image3.png";
import image5 from "./assets/img/image5.jpeg";
// import Subscribe from "./components/users/Subscribe";
import Contact from "./components/contact/Contact"



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Main imageSrc={image5}/>
      <Slider
      imageSrc={image1}
      title={"Web Dev"}
      subtitle={"Our experts will provide you with the best solutions"}
      />
      <Slider
      imageSrc={image3}
      title={"Online Marketing"}
      subtitle={"You don´t know how to reach your goal, don´t worry!"}
      flipped={true}
      />
      <Contact />
      {/* <Subscribe /> */}
      <Footer />
    </>

  );
}

export default App;
