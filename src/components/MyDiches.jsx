import { ImageContainer } from "./MyDichesStyle"
import { Container } from "./TitleStyles"

const MyDiches = ({image, title, ingredients, price}) => {
  return (
    <Container>
        <ImageContainer>
            <img src={image} alt="Imagem Do Prato" />
            <h3>{title}</h3>
            <p>{ingredients}</p>
            <p id="priceDescription">{price}</p>
        </ImageContainer>
    </Container>
  )
}

export default MyDiches