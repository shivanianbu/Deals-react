import React,{useEffect,useState} from 'react'
import Header from './Header/Header';
import Banner from "./Banner/Banner";
import Women from './WomenCosmetics/Womencosmetics';
import Trendings from './Trendings/Trendings';
import Shopbox from './Shopbox/Shopbox';
import MenFashion from './Menfashion/Menfashion';
import Search from './Search/Search';
import Footer from './Footer/Footer';
import { useDispatch,} from "react-redux";
  import { setItem } from "../redux/Action/cartAction";
  import { PRODUCT_PATH } from '../utils/env';
  import axios from "axios";


const Home = () => {

  const bannerContent = {title: 'iPhone 6 Plus',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam consequat justo',button: 'Explore Now'};
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
    <Banner isDrop={isDrop} setIsDrop={setIsDrop} bannerContent={bannerContent} />
    <Women />
    <Trendings />
    <Shopbox /> 
    <MenFashion />
    <Search />
    <Footer />
        </>
    
    )
}

export default Home;

