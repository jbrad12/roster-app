import Player from "./Player"

function PlayerList(props) {
    const allPlayers = props.players.map(player => {
        return (
            <Player 
            firstName={player.firstName}
            lastName={player.lastName}
            hobbies={player.hobbies}
        />
        )
    })
    console.log("pl", props.players)
    return (
        <div>
           {allPlayers}
        </div>
    )
}

export default PlayerList