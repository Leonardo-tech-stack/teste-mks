import React, { useEffect, useState } from 'react';
import { mainApiJson } from '../services/mainAPI/config';
import { Product } from '../types/product';
import { Header } from '../components/Header';
import ShoppingBag from '../../src/assets/images/shopping-bag.png';
import { Ul, P } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';
import { Footer } from '../components/Footer';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);

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

  const isProductInCart = (productId: number) =>
    cartItems.some((item) => item.id === productId);

  return (
    <div>
      <Header cartItems={cartItems} />
      <Ul>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <li key={index}>
              <div className="product-card">
                <Skeleton height={200} width={200} />
                <div className="info-container">
                  <div className="info-container_1">
                    <Skeleton height={20} width={150} />
                    <Skeleton height={15} width={80} />
                  </div>
                  <Skeleton count={3} height={15} width={200} />
                </div>
              </div>
              <div>
                <button disabled>
                  <img src={ShoppingBag} alt="Shopping Bag" />
                  Carregando...
                </button>
              </div>
            </li>
          ))
        ) : (
          products.map((product) => (
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
                <button onClick={() => addToCart(product)} disabled={isProductInCart(product.id)}>
                  <img src={ShoppingBag} alt="Shopping Bag" />
                  Comprar
                </button>
              </div>
            </li>
          ))
        )}
      </Ul>

      <ToastContainer />

      <Footer />
    </div>
  );
};

export default ProductList;
