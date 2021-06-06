// - 10K page views / $8 per month
// - 50K page views / $12 per month
// - 100K page views / $16 per month
// - 500k page views / $24 per month
// - 1M page views / $36 per month

const range = document.getElementById('range');
const discount = document.getElementById('billing');

const rangePricing = {
    1: {
        views: '10K',
        price: 8
    },
    2: {
        views: '50K',
        price: 12
    },
    3: {
        views: '100K',
        price: 16
    },
    4: {
        views: '500K',
        price: 24
    },
    5: {
        views: '1M',
        price: 36
    }
}

showCurrentPrice(range.value)  //converts into number

function showCurrentPrice(value) {
    const currentPrice = rangePricing[value];
    const price = discount.checked ? currentPrice.price - (currentPrice.price * 0.25) : currentPrice.price;

    document.querySelector('.stats__views span').innerHTML = currentPrice.views;
    document.querySelector('.stats__price span').innerHTML = price;

}

range.addEventListener('change', e => {
    showCurrentPrice(e.target.value);
})

discount.addEventListener('change', () => {
    showCurrentPrice(range.value);
})