import React, { useRef, useEffect, useState } from 'react';
import { CartModalProps } from '../../types/cartModalProps';
import {
  ModalContainer,
  ModalContent,
  Div,
  CloseButton,
  ProductInfo,
  DivFlex,
  QuantityControls,
} from './styles';

const CartModal: React.FC<CartModalProps> = ({ cartItems, onClose }) => {
  const [cart, setCart] = useState(
    cartItems.map((item) => ({ ...item, quantity: 1 }))
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setCartTotal(total);
  }, [cart]);

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeProduct = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <ModalContainer ref={modalRef}>
      <ModalContent>
        <Div>
          <h2>Carrinho de compras</h2>
          <CloseButton>
            <button onClick={onClose}>X</button>
          </CloseButton>
        </Div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <ProductInfo>
                <div>
                  <button className="remove" title='Remover do carrinho' onClick={() => removeProduct(item.id)}>X</button>
                </div>
                
                <DivFlex>
                  <div>
                    <img src={item.photo} alt={item.name} />
                  </div>
                  
                  <div>
                    <h1>{item.name}</h1>
                  </div>

                  <QuantityControls>
                    <p>Qtd:</p>

                    <div className="quantity">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </QuantityControls>

                  <div>
                    <p className='price'>R${Math.floor(item.quantity * item.price).toLocaleString('pt-BR')}</p>
                  </div>
                </DivFlex>
              </ProductInfo>
            </li>
          ))}
        </ul>

        <div className='total'>
          <p>Total:</p>
          <p>R${cartTotal.toLocaleString('pt-BR')}</p>
        </div>

        <div className='checkout'>
          <button>Finalizar compra</button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default CartModal;