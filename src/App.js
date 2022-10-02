import logo from './logo.svg';
import './App.css';

import Message from '../src/components/message';


function App() {

    // const [latestMEssage, setLatesetMessage] = useState( { firtTime: 'arajin angam' } );
    //
    // useEffect( () => {
    //     messagesService.subscribe({ name: 'Valod' }, (message) => {
    //         setLatesetMessage(message);
    //     });
    // }, [] )



  return (
    <div className="App">
        <Message  subscriberName="Valod"  />
        <Message  subscriberName="poghos"  />
    </div>
  );
}

export default App;
