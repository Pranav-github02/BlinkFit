import React from "react";
import "./contact.css"
import ContactMain from "./ContactMain";

const Contact = () => {
  return (
    <div className="contact">
      <div className="banner page-title">
        <div className="container">
          <div className="title-heading">
            <h1>CONTACT</h1>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751375174485!2d76.65490688083703!3d30.5160864094281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1688976027145!5m2!1sen!2sin" width={1510} height={400} style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <ContactMain />
    </div>
  );
};

export default Contact;
