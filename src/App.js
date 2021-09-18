import React,{useState, useEffect} from 'react';
import './Styles/style.scss';
import Header from './Components/header';
import Banner from './Components/banner';
import Women from './Components/womencosmetics';
import Trendings from './Components/trendings';
import Shopbox from './Components/shopbox';


export default function App() {


  const [data,setData]=useState([]);
  const [cart, setCart] = useState([]);
  const [isDrop, setIsDrop] = useState(false);
  

  const getData = () => 
{
 fetch(`products.json`)
 .then(function(response){
  return response.json();
})
.then(function(data) {
    const trends =  data.products.filter(product => product.category === "trend")
   setData(trends)
});

}

const onAdd = (product) => {
  const exist = cart.find((item) => item.id === product.id);
  if (exist) {
    setCart(
      cart.map((item) =>
  
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item

      )
    );
  } else {
    setCart([...cart, { ...product, qty: 1 }]);
    window.alert('Product Added Successfully');
  }
 
};

const onRemove = (product) => {
  const exist = cart.find((item) => item.id === product.id);
  if (exist.qty === 1) {
    setCart(cart.filter((item) => item.id !== product.id));
  } else {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      )
    );
  }
};
const remove = (product) => {

    setCart(cart.filter((item) => item.id !== product.id));
    window.alert('Do you want to remove item ?');
};
  useEffect(() => {  
    getData();
   },[])

 
  return (
    <div>
    <Header cart={cart} onAdd={onAdd} onRemove={onRemove} remove={remove} isDrop={isDrop} setIsDrop={setIsDrop}/>
    <Banner isDrop={isDrop} setIsDrop={setIsDrop}/>
    <Women />
    <Trendings data={data} onAdd={onAdd}/>
    <Shopbox /> 
    </div>
  );

}