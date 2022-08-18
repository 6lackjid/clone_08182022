import React from "react";
import  backgroundImage from '../images/backgroundImage.jpg';
export const Header = () => {


  return (
    <>
     <header className="main-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{backgroundImage: `url(${backgroundImage})`}}></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <h1 className="title-text">Yoshifumi Matsumoto</h1>
            <h3 className="title-text">Web Developer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/* TODO */}
              </li>
              <li className="icon-link">
                {/* TODO */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
