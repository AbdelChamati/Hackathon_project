import React  from "react";
// import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Slider from "./components/Main/Slider";
import Footer from "./components/Footer/Footer";
import image1 from "./assets/img/image1.png";
import image2 from "./assets/img/image2.png";
import image3 from "./assets/img/image3.png";



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Main imageSrc={image3}/>
      <Slider 
      imageSrc={image1} 
      title={"Web Dev"} 
      subtitle={"Our experts will provide you with the best solutions"}
      />
      <Slider 
      imageSrc={image2} 
      title={"Online Marketing"} 
      subtitle={"You don´t know how to reach your goal, don´t worry!"}
      flipped={true}
      />
      <Footer />
    </>
    
  );
}

export default App;
