import React,{useEffect,useState} from 'react'
import Header from './Header/Header';
import Banner from "./Banner/Banner";
import Women from './WomenCosmetics/Womencosmetics';
import Trendings from './Trendings/Trendings';
import Shopbox from './Shopbox/Shopbox';
import Fashion from './Fashion/Fashion';
import Search from './Search/Search';
import Footer from './Footer/Footer';




const Home = () => {

  const bannerContent = {
    title: 'iPhone 6 Plus',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam consequat justo',
    button: 'Explore Now'
  };
  const menFashion =
  {
    title:"Men's Fashion",
    link: ["United Colors", "Levi's", "Celio", "Mufti", "Lee"],
   title1: "All FORMAL MEN'S WEAR ONLY ON ",
   price: "$ 399",
  offer: "UPTO 50% OFF",
  offeron: "40%-70% OFF ON",
  item: "Suits and Blazers",
  img1: "images/mencoat.jpeg",
  img2: "images/leviss.jpg",
  img3: "images/digjam.jpg",
  img4: "images/men-half.jpg",
  };

  const womenFashion =
  {
    title: "Women's Fashion",
    link: ["Levi's", "Karma Loop", "Guess", "Avenue", "Paige"],
   title1: "All WOMEN CLOTHING WEAR ONLY ON ",
   price: "$ 399",
  offer: "UPTO 50% OFF",
  offeron: "40%-70% OFF ON",
  item: "WOMEN TOP WEARS",
  img1: "images/women1.jpeg",
  img2: "images/women_with.jpg",
  img3: "images/Leee.jpg",
  img4: "images/women2.jpeg",
  };
  
  
  
    const [isDrop, setIsDrop] = useState(false);

    return (
        <>
         <Header  isDrop={isDrop} setIsDrop={setIsDrop}/>
    <Banner isDrop={isDrop} setIsDrop={setIsDrop} bannerContent={bannerContent} />
    <Women />
    <Trendings />
    <Shopbox /> 
    <Fashion fashion={menFashion}/>
    <Fashion fashion={womenFashion}/>
    <Search />
    <Footer />
        </>
    )
}

export default Home;