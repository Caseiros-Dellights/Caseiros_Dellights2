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

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
        text-align: justify;
        span {
            font-weight: bold;
        }
    }
    @media screen and (max-width: 768px) {
        p {
            font-size: 12px;
        }
    }
`