import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {
      links.map(function(link, index){
        return (
          <a href={"#"+ link} key={index}>
            {link}
          </a>
        );
      })
}
</nav>;
}

export default NavBar;
