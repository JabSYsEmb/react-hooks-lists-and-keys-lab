import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map(url => <a key={url} href={`#${url}`}>{url}</a>)}
    </nav>;
}

export default NavBar;
