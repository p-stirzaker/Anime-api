


const GameRoom = ({players}) => {
    if(players) {

    const Display = ({ playerName }) => <li>{playerName}</li>
    return ( 
        <ul className="previousSearch">
            {players.map((playerName, i) => ( // would not wokr becuase not defined.
                <Display
                    playerName={playerName}
                    // Prevent duplicate keys by appending index:
                    key={i}
                />
            ))}
        </ul>
     );
}}

export default GameRoom;