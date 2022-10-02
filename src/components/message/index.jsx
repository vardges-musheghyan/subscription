import messagesService from '../../messagesService';
import {useEffect, useRef, useState} from "react";

function Message({ subscriberName } ){


    const esimincghRef = useRef(null);


    const [messages, setMessages] = useState([]);

    useEffect( () => {
                const { unSubscribe, postMessage } = messagesService.subscribe( { name: subscriberName }, (message) => {
                    setMessages((prevState) => {
                        return [...prevState, message]
                    });
                } );

                esimincghRef.current = postMessage;

        return () => {
            unSubscribe();
        }

    }, [subscriberName] );

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleButtonClick = () => {
        esimincghRef.current(inputValue);
        setInputValue('')
    }

    return (
        <div>
            <div>
                <input onChange={handleInputChange} value={inputValue} type="text"/>
                <button onClick={handleButtonClick} > Send it over </button>
            </div>
            { messages.map( (item, index) => {
                return (
                    <div key={index} >
                        sender: { item.sender }
                        <div>
                            message{item.message}
                        </div>
                    </div>
                )
            } ) }
        </div>
    )
}

export default Message;
