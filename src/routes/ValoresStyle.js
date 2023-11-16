import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 18px;
        }
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    span {
        font-weight: bold;
    }
    p {
        text-align: justify;
    }
    @media screen and (max-width: 768px) {
        p {
            font-size: 11.5px;
        }
    }
`