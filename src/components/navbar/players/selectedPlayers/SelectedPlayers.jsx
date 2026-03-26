import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { toast, Flip } from "react-toastify";
const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {

    const handleDeletePlayer = (player)=>{
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        setSelectedPlayers(filteredPlayers)
        setCoin(coin+player.price)
        toast.success("Player Removed Successfully!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
    return (
        <div>
            <div className='space-y-5'>

            {
                selectedPlayers.length === 0 ?
                <div className='h-100 flex items-center justify-center flex-col gap-4'>
                    <h2 className='font-semibold text-xl'>No Players Selected Yet!</h2>
                    <p>Go to available tab to select players</p>
                </div>
                 : selectedPlayers.map((player, ind)=>{
                    return <div key={ind} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
                        <div className='flex items-center gap-6'>
                            <img src={player.playerImage} alt={player.playerName} className='h-18.75 w-auto rounded-md'/>
                            <div>
                                <h2 className='flex items-center gap-2 font-bold text-xl'><FaUser />{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                        </div>
                        <button className='btn text-red-500' onClick={()=> handleDeletePlayer(player)}>
                            <MdDelete></MdDelete>
                        </button>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;