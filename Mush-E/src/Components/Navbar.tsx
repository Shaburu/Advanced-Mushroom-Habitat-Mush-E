import { useState, useEffect, useRef, RefObject } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef: RefObject<HTMLUListElement> = useRef(null); // Specify the type of menuRef
  const menuRef2: RefObject<HTMLDivElement> = useRef(null); // Specify the type of menuRef2

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef2.current && menuRef.current) {
        if (
          !menuRef2.current.contains(e.target as Node) &&
          !menuRef.current.contains(e.target as Node)
        ) {
          setMenuOpen(false);
          console.log("!menuRef.current.contains(e.target)");
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      console.log("document.removeEventListener('mousedown',handler)");
    };
  }, []);

  return (
    <div >
      <nav>
        {/* <Link to="/" className="title">
          SUSBOT
        </Link>
        <div
          className={`menu ${menuOpen ? "open" : ""}`}
          ref={menuRef2}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""} ref={menuRef}>
          <li>
            <NavLink to="/blog">Mushroom</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Leafy Greens</NavLink>
          </li>
         
        </ul> */}

<Link to="/" className="title">
          SUSBOT
        </Link>
        <ul >
          <li>
            <NavLink to="/mushroom">Mushroom</NavLink>
          </li>
          <li>
            <NavLink to="/green">Leafy Greens</NavLink>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};
