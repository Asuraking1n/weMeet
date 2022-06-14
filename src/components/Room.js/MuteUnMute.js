import { useAVToggle } from "@100mslive/react-sdk";
import './room.css'

const MuteUnMute = () => {

    const {
        isLocalAudioEnabled,
        isLocalVideoEnabled,
        toggleAudio,
        toggleVideo
    } = useAVToggle();
    return (
        <>
            <div className="control-bar">
                <button className="mute-btn-control" onClick={toggleAudio}>
                    {isLocalAudioEnabled ? "Mute" : "Unmute"}
                </button>
                <button className="hide-btn-control" onClick={toggleVideo}>
                    {isLocalVideoEnabled ? "Hide" : "Unhide"}
                </button>
            </div>
        </>
    )
}

export default MuteUnMute