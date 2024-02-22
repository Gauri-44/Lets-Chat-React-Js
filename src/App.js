import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '44b5787e-88fb-4ad1-91dd-d9e9f0738d88';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
             projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            //projectID="44b5787e-88fb-4ad1-91dd-d9e9f0738d88"
            //userName="GauriKorgaonkar"
            //userSecret="05022003"
            //renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
    );
};
export default App;