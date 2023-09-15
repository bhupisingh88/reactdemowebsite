import React from "react";
import Card from "./Card";
import car1 from "../src/images/car1.jpg";
import car2 from "../src/images/car2.jpg";
import car3 from "../src/images/car3.jpg";
import car4 from "../src/images/car4.jpg";
import CardData from "./CardData";
const Service = () => {
  return (
    <>
      <h1 className="text-center">Our Services</h1>
      <div className="row gy-4">
        <Card imgsrc={car1} title="Lamborgini on Rent" text="Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary" /> 
        <Card imgsrc={car2} title="Lamborgini on Rent" text="Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary" /> 
         {
            CardData.map((val,index)=>{
                return <Card imgsrc={val.imgsrc} title={val.title} text={val.text} />
            })
         }
      </div>
    </>
  );
};
export default Service;
