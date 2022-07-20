import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBarLinks = links.map((link => <a key={link[0]} href={link}>{link}</a>))
  return <nav>{navBarLinks}</nav>;
}

export default NavBar;
