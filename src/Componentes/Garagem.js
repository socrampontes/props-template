import Carro from "./Carro";

function Garagem(props) {
  console.log(props)
  return (
    <div>
      <h1>Garagem do {props.nome} </h1>

      <button onClick={()=>props.aprensentaGaragem(props.nome)}>Botão Boas Vindas</button>
      <Carro carro={props.carro1}/>
      <Carro carro={props.carro2}/>
      <Carro carro={props.carro3}/>
      <Carro carro={props.carro4}/> 
      
    </div>
  );
}

export default Garagem;
