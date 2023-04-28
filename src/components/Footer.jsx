import React from "react";
import "../styles.css";

const date = new Date();
const today = date.getFullYear();


function Footer () {
    return <footer className="footer"><p>Copyright©{today}</p></footer>;
}

export default Footer;