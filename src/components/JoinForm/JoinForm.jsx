import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import './joinform.css'
const JoinForm = () => {
    const hmsActions = useHMSActions();
    const [inputValues, setInputValues] = useState({
        name: "",
        token: ""
    });
    const guestToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjJhODQ1OGNiODczNzg3YWEyNzBiMDQyIiwicm9vbV9pZCI6IjYyYTg0YWZlYjg3Mzc4N2FhMjcwYjA5NiIsInVzZXJfaWQiOiJ0cmtyamlybyIsInJvbGUiOiJndWVzdCIsImp0aSI6IjEwYTUwZDMzLTJmMTQtNGMxMy04NTk5LTYyYWVkNzJjMzAxYiIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NTUzNDM4OTZ9.fbXowYGpYoYw5ryVz-QPVZTwmT3wsVJQTlS3Ibi0RfQ"
    const handleInputChange = (e) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        hmsActions.join({
            userName: inputValues.name,
            authToken: inputValues.token
        });
    };
    const handelAddDummyToken=()=>{
        setInputValues({...inputValues,name:'Jhon',token:guestToken })
    }
    return (
        <>
            <div className="Join-page-container">
            <form onSubmit={handleSubmit}>
                <h2>Join Room</h2>
                <div>
                    <input
                        required
                        value={inputValues.name}
                        onChange={handleInputChange}
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                    />
                </div>
                <div className="input-container">
                    <input
                        required
                        value={inputValues.token}
                        onChange={handleInputChange}
                        id="token"
                        type="text"
                        name="token"
                        placeholder="Auth token"
                    />
                </div>
                <div className="form-btn">
                <button >Join</button>
                <button onClick={handelAddDummyToken}>Add Token</button>
                </div>
                
            </form>
            </div>
        </>
    )
}

export default JoinForm