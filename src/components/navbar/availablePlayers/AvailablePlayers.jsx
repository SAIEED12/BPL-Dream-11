import React from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import Card from "../ui/Card";
const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
  console.log(players);
  return (
    <div>
      <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 justify-items-center">
        {players.map((player, ind) => {
          return (
            <Card key={ind} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
