import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Logo, PlaceholderUser } from "../../Assets";
import "./Navbar.css";

const Navbar = () => {
  const isLogin = localStorage.getItem("user");
  const user = JSON.parse(isLogin);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg p-2 nav-header">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              alt="Logo"
              width="50px"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            {isLogin === null ? (
              <>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item h5 m-0">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link nav-text fw-normal"
                          : "nav-link nav-text fw-normal"
                      }
                    >
                      Beranda
                    </NavLink>
                  </li>
                  <li className="nav-item h5 m-0">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link nav-text fw-normal"
                          : "nav-link nav-text fw-normal"
                      }
                    >
                      Tentang
                    </NavLink>
                  </li>
                  <li className="nav-item h5 m-0">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link nav-text fw-normal"
                          : "nav-link nav-text fw-normal"
                      }
                    >
                      Kontak
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item h5 me-3">
                    <NavLink
                      to="/sign-in"
                      className="nav-link sign-in fw-normal"
                    >
                      Masuk
                    </NavLink>
                  </li>
                  <li className="nav-item h5">
                    <NavLink
                      to="/sign-up"
                      className="nav-link sign-up fw-normal"
                    >
                      Daftar
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item h5 m-0">
                    <NavLink to="/" className="nav-link nav-text fw-normal">
                      Beranda
                    </NavLink>
                  </li>
                  <li className="nav-item h5 m-0">
                    <NavLink
                      to="/modul"
                      className="nav-link nav-text fw-normal"
                    >
                      Modul
                    </NavLink>
                  </li>
                  <li className="nav-item h5 m-0">
                    <NavLink
                      to="/event"
                      className="nav-link nav-text fw-normal"
                    >
                      Event
                    </NavLink>
                  </li>
                  <li className="nav-item h5 m-0">
                    <NavLink
                      to="/dashboard"
                      className="nav-link nav-text fw-normal"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <div className="dropdown">
                    <Link
                      to=""
                      className="d-block link-dark text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={PlaceholderUser}
                        alt="mdo"
                        width="32"
                        height="32"
                        className="rounded-circle"
                      />
                      <p className="d-inline-block ms-2 m-0 text-light">
                        {user.nama_depan + " " + user.nama_belakang}
                      </p>
                    </Link>
                    <ul
                      className="dropdown-menu text-small"
                      style={{ backgroundColor: "#C7A488" }}
                    >
                      <li>
                        <Link to="/profil" className="dropdown-item">
                          <CgProfile className="fs-3" />
                          <span className="ps-2">Lihat Profil</span>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          <RiLogoutBoxRLine className="fs-3" />
                          <span className="ps-2">Keluar</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
