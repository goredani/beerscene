import beers from "../tests/fixtures/beers";

export default (beers) => {
    if (beers.length === 0) {
        return 0;
    } else {
        return beers
            .map((beers) => beers.price)
            .reduce((sum, value) => sum + value, 0)
    }
};

console.log(beers);