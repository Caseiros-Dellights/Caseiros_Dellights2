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
            font-size: 20px;
        }
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
        font-weight: bold;
    }
    p {
        text-align: justify;
    }
    @media screen and (max-width: 768px) {
        p {
            font-size: 12px;
        }
    }
`