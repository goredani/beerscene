import React from 'react';
import BeerList from './BeerList';
import BeerListFilters from './BeerListFilters';
import BeersSummary from './BeersSummary';

const BarDashboardPage = () => (
  <div>
    <BeersSummary />
    <BeerListFilters/>
    <BeerList />
  </div>
);

export default BarDashboardPage;
