export default (beers, { text, sortBy, startDate, endDate }) => {
    return beers.filter((beer) => {
      const startDateMatch = typeof startDate !== 'number' || beer.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || beer.createdAt <= endDate;
      const textMatch = beer.beername.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'rating') {
            return a.rating > b.rating ? 1 : -1;
        } 
        else if (sortBy === 'beername') {
            return a.beername > b.beername ? 1 : -1;
        } 
        else if (sortBy === 'beertype') {
            return a.beertype > b.beertype ? 1 : -1;
        } 
        else if (sortBy === 'brewery') {
            return a.brewery > b.brewery ? 1 : -1;
        } 
        else if (sortBy === 'ABV') {
            return a.ABV > b.ABV ? 1 : -1;
        } 
        else if (sortBy === 'IBU') {
            return a.IBU > b.IBU ? 1 : -1;
        }
        else if (sortBy === 'price') {
            return a.price > b.price ? 1 : -1;
        }
    });
  };