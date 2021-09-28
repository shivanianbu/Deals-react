
import React,{useEffect} from 'react'
import { connect,useDispatch,} from "react-redux";
import "./aside.scss";
import { Link } from 'react-router-dom';


const Aside = (props ) => {
    const {isDrop, setIsDrop, products} = props;
    const getUnique = (arr, comp) =>{
        const unique =  arr.map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
     .filter((e) => arr[e]).map(e => arr[e]);

return unique;
};
   const category =  getUnique(products, 'category');
   const types =  getUnique(products, 'type');
   

   
    return (
        <div className={isDrop ? "sub-menus toggle" : "sub-menus"}>
           { category.map((product) =>
            // <Link className="sub-menus-menu" to={`/${product.category}`} >{product.category}<i className="icon-dropleft"></i></Link>
           <Link className="sub-menus-menu" to="#">{product.category}<i className="icon-dropleft">

             <ul  className="sub-menus" >
             { types.filter(type => type.category === product.category).map((product_type) =>
               <li><Link to={`/${product_type.type}`}  className="sub-menus-menu">{product_type.type}</Link> </li>
              // console.log(pro)
             )}
             </ul>
             </i>
             </Link>

) }
    
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
     
    };
  };
  export default connect(mapStateToProps)(Aside);
