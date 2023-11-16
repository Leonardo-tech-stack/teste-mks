import React, { useEffect, useState } from 'react';
import { mainApiJson } from '../services/mainAPI/config';
import { Product } from '../types/product';
import { Header } from '../components/Header';
import ShoppingBag from '../../src/assets/images/shopping-bag.png';
import { Ul, P } from './styles';
import CartModal from '../components/Header/CartModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../components/Footer';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]); 
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await mainApiJson.get('/products', {
          params: {
            page: 1,
            rows: 8,
            sortBy: 'id',
            orderBy: 'ASC',
          },
        });

        if (response.data && response.data.products) {
          setProducts(response.data.products);
        } else {
          console.error('Resposta da API não possui a estrutura esperada:', response);
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setShowCartModal(true);
    
    toast.success(`${product.name} adicionado ao carrinho!`, {
      position: 'top-right',
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const isProductInCart = (productId: number) => cartItems.some(item => item.id === productId);

  return (
    <div>
      <Header cartItems={cartItems} />
      <Ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-card">
              <div className="image-container">
                <img src={product.photo} alt={product.name} />
              </div>

              <div className="info-container">
                <div className="info-container_1">
                  <h1>{product.name}</h1>
                  <p>R${Math.floor(product.price)}</p>
                </div>

                <P>Redesigned from scratch and completely revised</P>
              </div>
            </div>

            <div>
              <button
                onClick={() => addToCart(product)}
                disabled={isProductInCart(product.id)}
              >
                <img src={ShoppingBag} alt="Shopping Bag" />
                Comprar
              </button>
            </div>
          </li>
        ))}
      </Ul>

      <ToastContainer />

      {showCartModal && <CartModal cartItems={cartItems} onClose={() => setShowCartModal(false)} />}
      
      <Footer />
    </div>
  );
};

export default ProductList;
