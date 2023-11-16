import { ButtonContainer } from './MyButtonStyle'
import { useNavigate } from 'react-router-dom'

const MyButton = ({name}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/preparo");
    }
  return (
    <ButtonContainer>
        <button onClick={handleSubmit}>{name}</button>
    </ButtonContainer>
  )
}

export default MyButton