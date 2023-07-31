import { useState } from "react";
import userPool from "./awsInfo";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import { useNavigate } from 'react-router-dom';

function login(email, password, setInfoValid, setErrorMessage, navigate){
    const user = new CognitoUser({
        Username: email,
        Pool: userPool
    });
    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });

    user.authenticateUser(authDetails, {
        onSuccess : (data) =>{
            localStorage.setItem('accessToken', data.accessToken.jwtToken);
            localStorage.setItem('idToken', data.idToken.jwtToken);
            localStorage.setItem('refreshToken', data.refreshToken.token);
            navigate('/');
        },
        onFailure: (err) =>{
            console.error("failure ", err);
            setInfoValid(false);
            setErrorMessage("Korisnicko ime ili lozinka nisu ispravni. Pokusajte ponovo.");
        },
        newPasswordRequired : (data) =>{
            user.completeNewPasswordChallenge(password, {}, {
                onSuccess: (data) => {
                    console.log("password change success", data);
                },
                onFailure: (err) => {
                    console.error("password change failure", err);
                },
            });
        }
    });


}

function Login(){
    const navigate = useNavigate();
    const [infoValid, setInfoValid] = useState(true);
    const [passwordLength, setPasswordLength] = useState(6);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        if(email.trim() === '' || password.trim() === ''){
            setInfoValid(false);
            setErrorMessage("Molimo vas popunite oba polja.");
        }else if(password.trim().length < passwordLength){
            setInfoValid(false);
            setErrorMessage("Lozinka mora imati barem 6 slova.");
        }
        else{
            setInfoValid(true);
            login(email, password, setInfoValid, setErrorMessage, navigate);
        }

    }
    return (
        <div className="text-center m-5">

    <div className="login talia-border">
        <div className="row text-center m-2">
        </div>
        <div className="row text-center mx-2">
            <div className="col-12">
            <h3 className="main-text-color p-3">Ulogujte se</h3>

            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="row text-center">
               {!infoValid && <div className="col-12">
                    <p className="error-message">{errorMessage}</p>
                </div>
                }
                <div className="col-12">
                    <div className="form-group form-field">
                        <label htmlFor="email">Korisnicko ime</label>
                        <input type="text" id="email" className="form-control text-center talia-input" name="email"  placeholder="taliasalon"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group form-field">
                        <label htmlFor="password">Lozinka</label>
                        <input type="password" id="password" className="form-control text-center talia-input" placeholder="******" name="password"/>
            
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="talia-button my-3 talia-border">Potvrdite</button>


                </div>
            </div>
        </form>
    </div>
    </div>);
}

export default Login;