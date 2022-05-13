import logo from '../logo.svg';
import '../css/App.css';
import Counter from "./Counter";
import {useParams} from "react-router-dom";

function CounterHome() {
  const {id} = useParams();
  const init = initData(id);

  const countProps = {
    "init": init,
    "gap": 1
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter {...countProps}/>
      </header>
    </div>
  );
}

const initData = (id) => {
  if(id === undefined || isNaN(id)){
    return 100;
  }

  return Number(id);
}

export default CounterHome;
