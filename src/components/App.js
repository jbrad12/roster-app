// import logo from './logo.svg';
import '../App.css';
import Welcome from "./Welcome.js"
import {playerData} from "../data/playerData"
import PlayerList from "./PlayerList"



function App() {
  return (
    <div className="container">
      <Welcome />
      <PlayerList players={playerData} />
    </div>
  );
}

export default App;
