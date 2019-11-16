import React, { Component } from "react";
import "./header-style.css";
import logo from "../resources/images/Prothom-Alo.png";
//import month "./monthyear.js";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="headerContainer">
        <div className="top-header">
          <div className="leftItems">
            <div className="padding-b">
              <i className="fas fa-bars padding-r"></i>
              <i className="fas fa-search mobile-view"></i>
            </div>
            <div className="date-time-weather">
              মঙ্গলবার ১৮ জুন ২০১৯, ঢাকা
              <i className="fas fa-cloud"></i>
            </div>
          </div>
          <div className="centerLogo">
            <img src={logo} />
          </div>
          <div className="rightItems mobile-view">
            <div className="padding-b">
              <i className="far fa-bell padding-r"></i>
              <button className="btn-login">
                লগইন
                <i className="login-arrow fas fa-chevron-down"></i>
              </button>
            </div>
            <div>
              সংস্করণ: <b>বাংলা</b>
              <i className="login-arrow fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <hr className="inner" />
        <ul className="header-menu">
          <li>
            <a href="/bangladesh">বাংলাদেশ</a>
          </li>
          <li>
            <a href="/international">আন্তর্জাতিক</a>
          </li>
          <li>
            <a href="/bangladesh">অর্থনীতি</a>
          </li>
          <li>
            <a href="/sports">খেলা</a>
          </li>
          <li>
            <a href="/entertainment">বিনোদন</a>
          </li>
          <li>
            <a href="/opinion">মতামত</a>
          </li>
          <li>
            <a href="/entertainment">জীবনযাপন</a>
          </li>
          <li>
            <a href="/entertainment">বিনোদন</a>
          </li>
        </ul>
        <hr />
      </nav>
    );
  }
}

export default Header;
