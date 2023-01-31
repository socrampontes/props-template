import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome = "Marcos"


  const fixacao = "fixição"

  const aprensentaGaragem = (nomeDaGaragem ) =>{
  alert (`Boas vindas a garagem do ${nomeDaGaragem}`)
  }

  const carro1 = {
  nome:'Civic',
  cor: 'Pretão',
  ano: 1993,
  flex: false
  }
  const carro2 = {
  nome:'uno',
  cor: 'roxo',
  ano: 1999,
  flex: false
  }
  const carro3 = {
  nome:'Gol',
  cor: 'branco',
  ano: 2020,
  flex: true
  }
  const carro4 = {
  nome:'celta',
  cor: 'Preta',
  ano: 2003,
  flex: false
  }
  const carro5= {
  nome:'onix',
  cor: 'vermelho',
  ano: 2010,
  flex: true
  }
  const carro6 = {
  nome:'corolla',
  cor: 'laranja',
  ano: 2008,
  flex: true
  }
  const carro7 = {
  nome:'c3',
  cor: 'cinza',
  ano: 2009,
  flex: true
  }
  const carro8 = {
  nome:'camaro',
  cor: 'amarelo',
  ano: 2019,
  flex: true
  }


  return (
    <div className="App" >
      <Garagem nome={nome} aprensentaGaragem={aprensentaGaragem} carro1={carro1} carro2={carro2} carro3={carro3} carro4={carro4}/>

      <Garagem nome={fixacao} aprensentaGaragem={aprensentaGaragem} carro1={carro5} carro2={carro6} carro3={carro7} carro4={carro8}/>
      
    </div>
  );
}
