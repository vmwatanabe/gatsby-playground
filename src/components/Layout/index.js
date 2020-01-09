import React from 'react';
import Header from '../Header';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className="main">
    <Header />
    <div className="main-content">{children}</div>
  </div>
);

export default Layout;
