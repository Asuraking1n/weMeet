import JoinForm from "./components/JoinForm/JoinForm";
import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from "@100mslive/react-sdk";
import Room from "./components/Room.js/Room";
import MuteUnMute from "./components/Room.js/MuteUnMute";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  return (
    <div className="App">
    {isConnected && (
        <button
          id="leave-btn"
          className="btn-danger"
          onClick={() => hmsActions.leave()}
        >
          Leave Room
        </button>
      )}
      {isConnected ?<><Room/><MuteUnMute/></> : <JoinForm />}

    </div>
  );
}

export default App;
