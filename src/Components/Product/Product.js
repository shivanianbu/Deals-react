import React,{useEffect} from 'react'
import { connect,useDispatch,} from "react-redux";
const Product = (props) => {
  
    const {products} = props;
    const category  = props.match.params.category;
    products.filter(product => product.category === category).map((product) => console.log(product))
    // console.log(products)
    return (
        <div>
         sas
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
     
    };
  };
  export default connect(mapStateToProps)(Product);

