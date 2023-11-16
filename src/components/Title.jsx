import React from 'react'
import { Container, TextContainer, ButtonsContainer } from './TitleStyles'
import { useNavigate } from 'react-router-dom'

const Title = () => {
  const navigate = useNavigate();
  const submitPreparation = (e) => {
    e.preventDefault();

    navigate("/preparo")
  };
  const submitMoreinfo = (e) => {
    e.preventDefault();

    navigate("/sobrenos");
  };
  const submitDelivery = (e) => {
    e.preventDefault();

    navigate("entregas")
  };
  const submitValues = (e) => {
    e.preventDefault();

    navigate("/valores")
  };
  const submitMenu = (e) => {
    e.preventDefault();

    navigate("/");
  };
  const submitMarmitas = (e) => {
    e.preventDefault();

    navigate("/marmitas");
  };
  return (
    <Container>
        <ButtonsContainer>
          <button onClick={submitMenu}>Cardápio</button>
          <button onClick={submitPreparation}>Modo de Preparo</button>
          <button onClick={submitMoreinfo}>Sobre Nós</button>
          <button onClick={submitDelivery}>Entregas</button>
          <button onClick={submitValues}>Valores / Tamanhos</button>
          <button onClick={submitMarmitas}>Marmitas</button>
        </ButtonsContainer>
        <TextContainer>
            <h1>Caseiros Dellights</h1>
          </TextContainer>
    </Container>
  )
}

export default Title