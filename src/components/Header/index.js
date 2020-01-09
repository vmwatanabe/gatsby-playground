import React from 'react';
import './Header.scss';

const Header = props => (
  <div className="header">
    <div className="info-container">
      <span className="info-container__main-title">
        Aplicação Gatsby Sem Nenhum Propósito
      </span>
      <span className="info-container__sub-title">por Victor M. Watanabe</span>
    </div>
  </div>
);

export default Header;
