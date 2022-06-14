import React from "react";
import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";
const Room = () => {
    const peers = useHMSStore(selectPeers);
    return (
        <div className="conference-section">
            <h2>Conference</h2>
            <div className="peers-container">
                {peers.map((peer) => (
                    <Peer key={peer.id} peer={peer} />
                ))}
            </div>
        </div>
    );
};

export default Room;
