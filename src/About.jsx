import React from "react";
import Common from "./Common";
import about_img from "../src/images/aboutb.avif"
const About=()=>{

    return(
        <>
           <Common 
           name="Hurry! Contact Us now to grow your business with" 
           imgsrc={about_img}
           visit="/contact"
           btnname="Contact Us 🤙"
            />
        </>
    );
}
export default About;