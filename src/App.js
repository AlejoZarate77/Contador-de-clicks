import './App.css';
import Button from './componets/Bbutton.js'
import contador from './Img/contador.png'

function App() {

  const handleClick = () => {
    console.log("click");
  }

  const restarConteiner = () => {
    console.log("restar");
  }

  return (
    <div className="App">
      <div className="logo-conteiner">
        <img
          className="logo"
          src={contador}
          alt="Final logo"
        />
      </div>
      <div className="main-conteiner">
        <Button 
          text="click"
          isClickButton={true}
          handleClick={handleClick}/>
        <Button 
          text="restar"
          isClickButton={false}
          handleClick={restarConteiner}/>
      </div>
    </div>
  );
}

export default App;
