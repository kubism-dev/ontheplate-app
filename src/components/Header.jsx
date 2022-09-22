import { Cooking } from '@icon-park/react';

function Header() {
  return (
    <>
      <header className="header">
        <Cooking size={'1.75em'} theme="filled" />
        <span className="header__overline">Mum, tell me…</span>
        <h1 className="header__title">What's on the Plate</h1>
      </header>
      <div className="o-line"></div>
    </>
  );
}

export default Header;
