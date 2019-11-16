import React, { Component } from "react";
import "./footer-style.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footerContainer">
        <nav className="footer-nav">
          <section>
            <div>
              <img src="https://paloimages.prothom-alo.com/contents/themes/public/style/images/foot-logo.png" />
              <div>
                <ul className="footer-menu">
                  <li>
                    <a href="/sports">দূর পরবাস</a>
                  </li>
                  <li>
                    <a href="/entertainment">উত্তর আমেরিকা</a>
                  </li>
                  <li>
                    <a href="/opinion">ট্রাস্ট</a>
                  </li>
                  <li>
                    <a href="/entertainment">প্রতিচিন্তা</a>
                  </li>
                  <li>
                    <a href="/entertainment">কিশোর আলো</a>
                  </li>
                  <li>
                    <a href="/bangladesh">বন্ধুসভা</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ul className="footer-menu">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div>
              <span className="newslatter">প্রথম আলো নিউজ লেটার</span>
              <div>
                <input
                  className="input-email"
                  type="text"
                  name="email"
                  placeholder="আপনার ইমেইল আইডি দিন"
                />
                <button className="btn-subscribe" type="button">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
            <div className="margine-both-r">
              <span className="newslatter">মোবাইল অ্যাপস ডাউনলোড করুন</span>
              <ul className="apps-store">
                <li className="google-store">
                  <a href="#"></a>
                </li>
                <li className="apple-store">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <hr className="outer" />
        <div className="last-footer">
          <div className="copy-right">© স্বত্ব প্রথম আলো ২০১৯</div>
          <nav>
            <ul className="footer-menu eng">
              <li>
                <a href="/sports">Terms and Condition</a>
              </li>
              <li>
                <a href="/entertainment">Privacy Policy</a>
              </li>
              <li>
                <a href="/opinion">About</a>
              </li>
              <li>
                <a href="/entertainment">Advertise</a>
              </li>
              <li>
                <a href="/entertainment">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div>
            <span className="editor">সম্পাদক ও প্রকাশক: মতিউর রহমান</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
