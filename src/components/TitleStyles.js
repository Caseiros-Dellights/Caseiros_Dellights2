import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100%;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
        button {
    background-color: #FFE4C4;
    color: 	#000;
    border-style: outset;
    border-color: #FFE4C4;
    border-radius: 20px;
    height: 50px;
    width: 90px;
    text-shadow: none;
    outline: none;
    cursor: pointer;
    border: 1.7px solid #FFE4C4;
    }
    button:hover {
    background: #1c1c1c;
    color: #FFE4C4;
    border: 1px solid #eee;
    text-shadow: none;
    }
    @media screen and (max-width: 768px) {
        button {
            height: 35px;
            font-size: 7.5px;
        }
    }
`

export const TextContainer = styled.h1`
        h1 {
        color: #E9967A;
        font-size: 45px;
        text-transform: uppercase;
        letter-spacing: 0.6rem;
        word-spacing: 0.3rem;
        border-bottom: 1px solid #000;
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 15px;
        }
}
`