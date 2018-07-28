import React from 'react';
import BeerList from './BeerList';
import BeerListFilters from './BeerListFilters';

const BarDashboardPage = () => (
  <div>
    <BeerListFilters/>
    <BeerList />
  </div>
);

export default BarDashboardPage;
