import axios from 'axios';

const fetchProductStats = (idProduct) => axios.get(
  `https://api-public.sandbox.pro.coinbase.com/products/${idProduct}/stats`
);

export default fetchProductStats;
