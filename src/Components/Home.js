import React,{useEffect,useState} from 'react'
import Header from './Header/Header';
import Banner from "./Banner/Banner";
import Women from './WomenCosmetics/Womencosmetics';
import Trendings from './Trendings/Trendings';
import Shopbox from './Shopbox/Shopbox';
import MenFashion from './Menfashion/Menfashion';
import { connect,useDispatch,} from "react-redux";
  
  import { setItem } from "../redux/Action/cartAction";
  import { PRODUCT_PATH } from '../utils/env';
  import axios from "axios";

const Home = ({products }) => {

    const dispatch = useDispatch();
    const fetchProducts = async () => {
      const response = await axios
        .get(PRODUCT_PATH)
        .catch((err) => {
          console.log("err", err);
        });
      dispatch(setItem(response.data));
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const [isDrop, setIsDrop] = useState(false);

    return (
        <>
         <Header  isDrop={isDrop} setIsDrop={setIsDrop}/>
    <Banner isDrop={isDrop} setIsDrop={setIsDrop}/>
    <Women />
         <Trendings products={products}  />
    <Shopbox /> 
    <MenFashion />
        </>
    
    )
}
const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  
export default connect(mapStateToProps)(Home);

