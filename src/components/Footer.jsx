import { Left, Right } from '@icon-park/react'

function Footer() {
  return (
    <>
      <div className="swipe-nav">
        <div className="swipe-nav__item swipe-nav__item--left">
          <span>Swipe left to <span>dismiss</span></span>
          <Left theme="filled" size="20" fill="#000" />
        </div>
        <div className="o-line o-line--extended"></div>
        <div className="swipe-nav__item swipe-nav__item--right">
          <Right theme="filled" size="20" fill="#000" />
          <span>Swipe right to <span>like</span></span>
        </div>
      </div>
      <footer className="footer">
        <a href="https://www.hellothere.de" target="_blank">
          By <strong>HelloThere.</strong>
        </a>
      </footer>
    </>
  );
}

export default Footer;
