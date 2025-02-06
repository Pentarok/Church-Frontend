import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdCall } from "react-icons/md";
import { FaMapMarkerAlt } from 'react-icons/fa'; // FontAwesome
import ContactMini from "./ContactMini";
import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    {name:"Home",path:"/home"},
    { name: "About", path: "/about" },
    { name: "Groups", path: "/groups" },
    { name: "Give", path: "/give" },
    {name:"Get in Touch",path:"/contact"}
  ];
  
  return (
    <footer style={{ textAlign: "center", padding: "20px", color: "#fff" }} className="bg-gradient-to-b from-slate-900 to-slate-700">

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }} className="mb-2">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4267B2", fontSize: "24px" }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FF0000", fontSize: "24px" }}
        >
          <FaYoutube />
        </a>
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", fontSize: "24px" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "24px" }}
        >
          <FaXTwitter />
        </a>
      </div>
      <div className="flex flex-col   md:grid md:grid-cols-2">
            <div className="text-white flex sm:w-full  ">
             <ContactMini/>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-2xl text-justify pt-1">Qick Links</h1>
              {Links.map((link,i)=><Link to={link.path} className="text-justify hover:text-indigo-400 py-1 ">{link.name}</Link>)}
            </div>
            </div>
      <p style={{ marginTop: "10px" }}>© 2025 GloryVine. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
