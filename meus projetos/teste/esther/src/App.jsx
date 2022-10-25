
import { Container, Upside, Container1, AllImages, Container2, Container3, Button, Divsion, Divsion1, IconsColor, Star, Arrow, Search, IconsPosition, Wifi} from './styles'
import MyImage from '../img/Profile.jpg'
import MyImage1 from '../img/Profile (1).jpg'
import MyImage2 from '../img/Profile (2).jpg'
import MyImage3 from '../img/Profile (3).jpg'
import { AiOutlineStar, AiOutlineArrowLeft, AiOutlineSearch, AiOutlineWifi } from "react-icons/ai";
import { FaBatteryEmpty, FaSignal } from "react-icons/fa";

function App() {


  return (
    <Container>
      <IconsPosition>
          <FaSignal/>
          <Wifi/>
          <FaBatteryEmpty/>
        </IconsPosition>
      <Upside>
        <Arrow/>
        Tec Enfermagem
        <Search/>
        </Upside>
      <Container1>
        <AllImages>
          <img src={MyImage} alt="3x4img" />
        </AllImages>
        <Container2>
          <p>14 profissionais</p>
          <h2>Richard Ramos</h2>
          <Container3>
            <p>R$ 70,00</p>
            <h4>Plantão</h4>
          </Container3>
          <h5>Coren: 00/00000 | São Paulo - SP</h5>
          <IconsColor>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <h6>(8)</h6>
          </IconsColor>
        </Container2>
      </Container1>
      <Button>Ver perfil</Button>

      <Container1>
        <AllImages>
          <img src={MyImage1} alt="3x4img" />
        </AllImages>
        <Divsion>
          <h2>Carolina Magalhães</h2>
          <Divsion1>
            <p>R$ 80,00</p>
            <h4>Plantão</h4>
          </Divsion1>
          <h5>São Paulo - SP</h5>
          <IconsColor>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <h6>(8)</h6>
          </IconsColor>
        </Divsion>
      </Container1>
      <Button>Ver perfil</Button>

      <Container1>
        <AllImages>
          <img src={MyImage2} alt="3x4img" />
        </AllImages>
        <Container2>
          <h2>Odete Rocha</h2>
          <Container3>
            <p>R$ 70,00</p>
            <h4>Plantão</h4>
          </Container3>
          <h5>Coren: 00/00000 | São Paulo - SP</h5>
          <IconsColor>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <h6>(8)</h6>
          </IconsColor>
        </Container2>
      </Container1>
      <Button>Ver perfil</Button>

      <Container1>
        <AllImages>
          <img src={MyImage3} alt="3x4img" />
        </AllImages>
        <Container2>
          <h2>Camila Couto</h2>
          <Container3>
            <p>R$ 90,00</p>
            <h4>Plantão</h4>
          </Container3>
          <h5>Coren: 00/00000 | São Paulo - SP</h5>
          <IconsColor>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <h6>(8)</h6>
          </IconsColor>
        </Container2>
      </Container1>
      <Button>Ver perfil</Button>
    </Container>
  )
}

export default App
