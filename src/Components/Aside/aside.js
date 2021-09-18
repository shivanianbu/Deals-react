import React from 'react'

const Aside = (props) => {
    const {isDrop, setIsDrop} = props;
    return (
        // <div className="sub-menus">
        <div className={isDrop ? "sub-menus toggle" : "sub-menus"}>
            <a className="sub-menus-menu" href="#" >Computer<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Electronics<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Flower and Gifts<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Furnitures<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">groceries<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Health and Beauty<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Home Improvement<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Indoor Living<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Industrial Supply<i className="icon-dropleft"></i></a>
            <a className="sub-menus-menu" href="#">Jewelery & Watches<i className="icon-dropleft"></i></a>
        </div>
    )
}

export default Aside
