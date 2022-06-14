import JoinForm from "./components/JoinForm/JoinForm";
import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from "@100mslive/react-sdk";
import Room from "./components/Room.js/Room";
import MuteUnMute from "./components/Room.js/MuteUnMute";
import './App.css'
function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  return (
    <div className="App">
    {isConnected && (
        <div className="btn-cont">
        <button
          className="leave-meet-btn"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </button>
        </div>
      )}
      {isConnected ?<><Room/> <MuteUnMute/></> : <JoinForm />}

    </div>
  );
}

export default App;
