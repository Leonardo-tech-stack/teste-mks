import styled from "styled-components";
import { colors } from "../../styles/themes";

export const Body = styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.primary};
    padding: 8px 0;

    .logo {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-left: 5%;

        h1 {
            color: ${colors.secondary};
            font-size: 2.5rem;
            font-weight: 600;
            line-height: 1.188rem;
        }

        h3 {
            color: ${colors.secondary};
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.188rem;
            margin-left: 5%;
        }
    }

    .cart {
        margin-left: 65%;

        button {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 70px;
            height: 40px;
            border: none;
            border-radius: 5px;
        }

        span {
            font-size: 1.063rem;
            font-weight: 700;
            line-height: 1.371rem;
            margin-left: 5%;
        }
    }

`