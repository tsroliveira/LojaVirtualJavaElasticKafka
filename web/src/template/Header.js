import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [openedDrawer, setOpenedDrawer] = useState(false);

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav() {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={changeNav}>
            <FontAwesomeIcon icon={"car"} className="ms-2" size="lg" />
            <span className="ms-2 h5">Home</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/products" className="nav-link" replace onClick={changeNav}>
                  Explorar
                </Link>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-dark me-3 d-none d-lg-inline">
              <FontAwesomeIcon icon={["fas", "car"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {user ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link dropdown-toggle"
                      id="userDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={["fas", "user-alt"]} />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="userDropdown"
                    >
                      <li className="nav-item">
                        <span className="nav-link">{user?.name}</span>
                      </li>
                      <li className="nav-item">
                        <button className="btn btn-link nav-link" onClick={handleLogout}>
                          Logoff
                        </button>
                      </li>
                    </ul>
                  </li>

                </>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    href="#!"
                    className="nav-link dropdown-toggle"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={["fas", "user-alt"]} />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <Link to="/login" className="dropdown-item" onClick={changeNav}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/cadastro" className="dropdown-item" onClick={changeNav}>
                        Cadastrar
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
