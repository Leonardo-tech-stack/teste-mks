import { Product } from "./product";

export interface CartModalProps {
    cartItems: Product[];
    onClose: () => void;
  }
  