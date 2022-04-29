import React from 'react';
import {useAppContext, appActionTypes} from "../../context/providers/app.provider";

const ItemComponent = ({id, price, title, src}) => {
  const [, dispatch] = useAppContext();

  const onClickHandler = (ev) => {
    ev.preventDefault();
    dispatch({type: appActionTypes.ADD_TO_CART, payload: { id, title, price, quantity: 1, src }});
  }

  return(
    <div>
      <p className="price" style={{background: "#ccc"}}>
        {price}₼</p>
      <h4 className="title">
        {title}</h4>
      <img width="100%" height="100%" src={src} alt=""/>
      <i className="fas fa-cart-plus" onClick={onClickHandler}/>
    </div>
  );
}

export default ItemComponent;
