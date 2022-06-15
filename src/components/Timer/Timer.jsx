import { selectIsConnectedToRoom, useHMSStore } from "@100mslive/react-sdk";
import ReactStopwatch from 'react-stopwatch';
const Timer = () =>  {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    return (
        <>
            {isConnected &&
                <div className='timer'>   
                    <ReactStopwatch
                        seconds={0}
                        minutes={0}
                        hours={0}
                        limit="60:00:00"
                        onCallback={() => console.log('Finish')}
                        render={({ formatted}) => {
                            return (
                                <div>
                                    <p>
                                    {formatted}
                                    </p>
                                    
                                </div>
                            );
                        }}
                    />
                </div>
            }

        </>
    )
}

export default Timer