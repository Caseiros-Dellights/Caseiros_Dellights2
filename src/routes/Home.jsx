import MyDiches from "../components/MyDiches"

import './Home.css'

// imgs
import AlmondegasBovinas from '../assets/almondegasBovinas.jpeg'
import LasanhaFrango from '../assets/lasanhaFrango.jpeg'
import lasanhadecarne from '../assets/lasanhadecarne.jpeg'
import mandiocacarnefrango from '../assets/mandiocadecarnefrango.jpeg'
import cabotiacomcostela from '../assets/cabotiacomcostela.jpeg'
import cremedemilho from '../assets/cremedemilho.jpeg'
import escondidinho350 from '../assets/escondidinho350g.jpeg'
import carnecombacon from '../assets/carnecombacon.jpeg'
import carnesembacon from '../assets/carnesembacon.jpeg'
import almondegaspernil from '../assets/almondegaspernil.jpeg'

const Home = () => {
  return (
    <>
    <h2>Nosso cardápio - Congelados</h2>
     <div className="dichesContainer">
     <MyDiches image={mandiocacarnefrango} title=" 🍠 Lasanha de Mandioca com Frango / Carne 🍠" ingredients="🌿 A base desta lasanha é composta por finas camadas de mandioca, cozidas até atingir a textura macia e saborosa que caracteriza esse ingrediente único. O frango, delicadamente desfiado, revela sua textura suculenta em cada mordida. Camadas de carne, preparadas com cuidado e temperadas para a perfeição, desfiam-se em pedaços suculentos 🌿"/>
     <MyDiches image={LasanhaFrango} title=" 🍗 Lasanha De Frango 🍗 " ingredients="🌿 O frango, preparado com carinho, desfia-se em pedaços suculentos, proporcionando uma textura macia e saborosa. Entre as camadas, uma mistura de queijos derretidos adiciona uma camada cremosa e reconfortante. O contraste entre a suculência do frango e a cremosidade dos queijos cria uma experiência que derrete na boca 🌿"/>
     <MyDiches image={lasanhadecarne} title=" 🍖Lasanha de carne moída 🍖" ingredients="🌿 Camadas generosas de carne moída, temperadas com uma combinação única de especiarias, garantem uma explosão de sabores a cada mordida. Queijos derretidos entre as camadas adicionam uma cremosidade irresistível, equilibrando a intensidade da carne. Além da combinação do tomate e massa para lasanha 🌿"/>
     </div>
     <div className="dichesContainer">
     <MyDiches image={cabotiacomcostela} title=" 🥩 Lasanha de Abóbora Cabotiá com Costela 🥩 " ingredients="🌿 A base macia e aveludada da lasanha é cuidadosamente construída com camadas de abóbora cabotiá. A costela, lentamente cozida até a perfeição, desfia-se em pedaços suculentos, oferecendo uma explosão de sabor a cada camada da lasanha 🌿"/>
     <MyDiches image={cremedemilho} title="🌽  Lasanha de creme de milho 🌽 " ingredients="🌿 A lasanha é cuidadosamente preparada com camadas de um creme de milho sedoso, que proporciona uma textura suave e um sabor doce e reconfortante. Cada garfada é uma celebração da suavidade do milho. Um molho de tomate leve e fresco, delicadamente incorporado, realça os sabores e adiciona uma nota agridoce à lasanha 🌿"/>
     <MyDiches image={escondidinho350} title="🥔 Escondidinho de Carne / Frango 🥔" ingredients="🌿 O purê de batatas cremoso oferece uma textura aveludada que contrasta perfeitamente com a intensidade da carne / frango. Entre as camadas do purê de batatas temos: Camadas generosas de carne, lentamente cozidas e temperadas com especiarias selecionadas. E camadas de frango desfiado, preparado com carinho e temperado de forma única 🌿"/>
     </div>
     <div className="dichesContainer">
     <MyDiches image={carnecombacon} title="🍖 Almôndegas de Carne com Bacon 🥓" ingredients="🌿As almôndegas são feitas com carne suculenta, delicadamente temperada para ressaltar os sabores naturais. O bacon, cuidadosamente envolto ao redor de cada almôndega, adiciona um toque defumado e uma crocância irresistível. Cada almôndega é grelhada até a perfeição, garantindo um exterior dourado e crocante que preserva a suculência interna 🌿"/>
     <MyDiches image={carnesembacon} title="🍖 Almôndegas de Carne 🍖 " ingredients="🌿 As almôndegas são confeccionadas com carne de alta qualidade, delicadamente temperada para realçar os sabores naturais. Sem a presença do bacon, destacando a pureza e a intensidade dos sabores da carne. Uma seleção especial de ervas e especiarias é incorporada à mistura, proporcionando uma camada sutil de aromas que complementa a carne 🌿"/>
     <MyDiches image={almondegaspernil} title="🍖 Almôndegas de Pernil 🍖 " ingredients="🌿Feitas com pernil de alta qualidade, as almôndegas preservam a suculência característica da carne de porco. Cada mordida revela a riqueza e o sabor autêntico do pernil, tornando essa opção uma escolha irresistível para os amantes de carne suína. Uma seleção de temperos tradicionais é habilmente incorporada à mistura, realçando os sabores naturais do pernil. Essa combinação respeita a tradição culinária 🌿"/>
     </div>
    </>
  )
}

export default Home