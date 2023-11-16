import styled from "styled-components";
import { colors, fonts } from "../styles/themes";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 8% 0;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin: 8px;
    width: calc(25% - 20px);

    .product-card {
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 213px;
      margin: 10px;
      margin-bottom: 0;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px 8px 0 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .image-container {
    }

    img {
      max-width: 50%;
      max-height: auto;
    }

    .info-container {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .info-container_1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h1 {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        font-size: ${fonts.bg};
        font-weight: 400;
        line-height: 1.188rem;
      }

      p {
        background-color: ${colors.price};
        color: ${colors.secondary};
        border-radius: 5px;
        white-space: nowrap;
        padding: 7px;
        font-size: ${fonts.md};
        font-weight: 700;
        line-height: ${fonts.md};
        margin-left: 5%;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 232px;
      background-color: ${colors.primary};
      color: ${colors.secondary};
      border: none;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.125rem;
      padding: 10px 0;
      border-radius: 0 0 8px 8px;
      cursor: pointer;
      transition: background-color 0.3s;

      img {
        margin-right: 5%;
      }
    }

    button:hover {
      background-color: #2980b9;
    }
  }
`;

export const P = styled.p`
  font-size: ${fonts.sm};
  font-weight: 300;
  line-height: 0.75rem;
  color: ${colors.info};
  text-align: left;
`;
