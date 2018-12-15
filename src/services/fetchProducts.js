import axios from 'axios';

const fetchProducts = () => axios.get('https://api-public.sandbox.pro.coinbase.com/products');

export default fetchProducts;
