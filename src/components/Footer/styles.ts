import styled from "styled-components";
import { colors } from "../../styles/themes";

export const Body = styled.div`
    background-color: ${colors.footer};
    padding: 3px 0;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-top: 25%;
    }
`