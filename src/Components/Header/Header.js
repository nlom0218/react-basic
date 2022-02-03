import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (<div>
    <Link to="/">홈</Link>
    <Link to="/page1">페이지1</Link>
    <Link to="/page2">페이지2</Link>
  </div>);
}

export default Header;