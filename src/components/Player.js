

function Player(props) {
    const hobbies = props.hobbies.map(element => {
        return ( 
            <li>{element}</li>  
        )
    })
    
    return (
        <div>
            <h3>{props.firstName} {props.lastName}</h3>
            <ol>{hobbies}</ol>
        </div>
    )
}

export default Player