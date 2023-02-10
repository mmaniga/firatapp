import Hello from "./Hello"

function Greeting() {
    return <div>
        <h1>Welcome Mearca!!!</h1>
        <MessageInside />
    </div>
}

const MessageInside = () => {

    return (
    <p>
        I am the message body... 
        This is so cool and simple....
    </p>
    )
}

export default Greeting