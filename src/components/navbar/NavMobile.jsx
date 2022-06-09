import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Nav from "./Nav";
const NavMobile = ({ navOpen, setNavOpen }) => {
  const nodeRef = useRef(null);
  const nodeRefDark = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRefDark}
        in={navOpen}
        timeout={500}
        appear={true}
        classNames="transition-dark"
        unmountOnExit
      >
        <div
          ref={nodeRefDark}
          onClick={() => setNavOpen(false)}
          className="nav-mobile-dark"
        ></div>
      </CSSTransition>
      <CSSTransition
        nodeRef={nodeRef}
        in={navOpen}
        timeout={500}
        appear={true}
        classNames="transition-nav"
        unmountOnExit
      >
        <div ref={nodeRef} className="nav-mobile">
          <Nav />
        </div>
      </CSSTransition>
    </>
  );
};
export default NavMobile;
