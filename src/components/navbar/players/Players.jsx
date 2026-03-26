import  { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  const [selectedType, setSelectedType] = useState("available")
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between gap-4 items-center mb-5">
        {selectedType==="available"?<h2 className="font-bold text-3xl">Available Players</h2> : <h2 className="font-bold text-3xl">Selected Players({selectedPlayers.length}/{players.length})</h2>}

        <div>
          <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#3ee095]" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
          <button onClick={()=> setSelectedType("selected")} className={`btn ${selectedType === "selected" ? "bg-[#3ee095]" : ""}  rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length})</button>
        </div>
      </div>
      {selectedType==="available"? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}></SelectedPlayers>}
    </div>
  );
};

export default Players;
