import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$10,00');
console.log(`i would definitely pay ${courseValue} for this awesome course!`);
