import React, { useState } from 'react';
import { HeaderProps } from '../../types/headerProps';
import Cart from '../../assets/images/Vector.png';
import { Body } from "./styles";
import CartModal from '../CartModal';

export const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <Body>
      <div className="logo">
        <h1>MKS</h1>
        <h3>Sistemas</h3>
      </div>

      <div className="cart">
        <button onClick={() => setShowCartModal(true)}>
          <img src={Cart} alt="Carrinho"></img>
          <span className='cart-count'>{cartItems.length}</span>
        </button>
      </div>

      {showCartModal && <CartModal cartItems={cartItems} onClose={() => setShowCartModal(false)} />}
    </Body>
  );
}
