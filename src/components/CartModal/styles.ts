import styled from 'styled-components';
import { colors, fonts } from '../../styles/themes';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 440px; 
  background-color: ${colors.primary};
  transition: width 0.3s, opacity 0.3s;
  overflow-y: auto; 
  z-index: 1000; 

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 85%;
  }
`;

export const ModalContent = styled.div`

  ul {
    padding-left: 0;
    margin-top: 12%;
  }

  li {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .total {
    display: flex;
    justify-content: space-between;
    width: 87%;
    margin: 5% 0;
    margin-left: 6%;
    margin-bottom: 20px; 

    p {
      font-size: 1.75rem;
      font-weight: 700;
      line-height: ${fonts.md};
      color: ${colors.secondary};
    }
  }

  .checkout {
    
    button {
      width: 100%;
      height: 80px;
      font-size: 1.75rem;
      font-weight: 700;
      line-height: ${fonts.md};
      background-color: #000000;
      color: ${colors.secondary};
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #2d2d2d;
        transition: 0.3s;
      }
    }
  }

`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;

  h2 {
    width: 40%;
    color: ${colors.secondary};
    text-align: left;
    font-size: 1.688rem;
    font-weight: 700;
    line-height: 2.057rem;
    margin: 0;
  }


  @media only screen and (min-width: 320px) and (max-width: 480px) {

    h2 {
      width: 60%;
    }
  }
`;


export const CloseButton = styled.div`

  button {
    background-color: #000000;
    font-size: ${fonts.bg};
    color: ${colors.secondary};
    border: none;
    border-radius: 50px;
    padding: 6px 10px;
    cursor: pointer;

    &:hover {
      background-color: #a9a9a9;
      transition: 0.3s;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {

    button {
      color: ${colors.primary};
    }
  }
`;

export const ProductInfo = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.secondary};
  width: 360px;
  height: 80px;
  border-radius: 5px;
  margin-top: 5%;

  img {
    width: 55px;
    height: 55px;
    margin-right: 12px;
  }

  div {
    h1 {
      font-size: 0.813rem;
      font-weight: 400;
      line-height: 1.063rem;
      text-align: left;
      color: ${colors.info};
      width: 80px;
      margin: 0;
    }

    .price {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.063rem;
      margin-left: 35%;
      white-space: nowrap;
    }
  }

  .remove {
    position: absolute; 
    top: -10px; 
    right: -10px; 
    background-color: #000000;
    color: ${colors.secondary};
    border: none;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    cursor: pointer;

    &:hover {
      background-color: #a9a9a9;
      transition: 0.3s;
    }
  }


  @media only screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
    width: 80%;
    height: auto;

    img {
      width: 120px;
      height: 120px;
      margin-right: 0;
      margin: 8% 0;
    }

    div {

      h1 {
        text-align: center;
        font-size: 1rem;
        line-height: 1.188rem;
        width: 100vw;
        margin-bottom: 2%;
      }

      .price {
        background-color: ${colors.price};
        color: ${colors.secondary};
        border-radius: 5px;
        font-size: ${fonts.md};
        line-height: ${fonts.md};
        margin-left: 65%;
        margin-top: -53%;
        width: 85px;
        padding: 10px 0;
      }
    }

    .remove {
      position: absolute; 
      top: 10px; 
      right: 30px; 
      font-size: 2.625rem;
      background-color: ${colors.secondary};
      color: #000000;
    }
  }

`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3%;


  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 3%;
  }

`;

export const QuantityControls = styled.div`

  p {
    font-size: 0.313rem;
    font-weight: 400;
    line-height: 0.381rem;
    text-align: left;
    margin: 0;
    margin-top: -5px;
    margin-bottom: 5px;
    margin-left: 0;
  }

  .quantity {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-bottom: 10%;
    border: 1px solid ${colors.border};
    border-radius: 10px;
    padding: 2px 0;

    button {
      background-color: ${colors.secondary};
      border: none;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;

      &:hover {
        background-color: #a9a9a9;
        transition: 0.3s;
      }
    }

    span {
      border-left: 1px solid ${colors.border};
      border-right: 1px solid ${colors.border};
      padding: 0 10px;
      margin: 0 2px;
    }
  }


  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-right: 35%;
    margin-top: 2%;
    
    p {
      display: none;
    }

    .quantity {
      padding: 6px 0;
      border-radius: 5px;
    }
  }

`;