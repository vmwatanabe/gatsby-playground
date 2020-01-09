import React from 'react';
import { BeatLoader } from 'react-spinners';
import './PageLoader.scss';

const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__loader">
      <BeatLoader />
    </div>
  </div>
);

export default PageLoader;
