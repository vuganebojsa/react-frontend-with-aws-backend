import { useState } from "react";

function Login(){
    const [infoValid, setInfoValid] = useState(true);
    const [passwordLength, setPasswordLength] = useState(5);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        if(email.trim() == '' || password.trim() == ''){
            setInfoValid(false);
            setErrorMessage("Molimo vas popunite oba polja.");
        }else{
            setInfoValid(true);
        }
    }
    return (
    <div className="login talia-border">
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
                    <div class="form-group form-field">
                        <label for="email">Email adresa</label>
                        <input type="email" id="email" className="form-control text-center talia-input" name="email"  placeholder="mara@primer.com"/>
                    </div>
                </div>
                <div className="col-12">
                    <div class="form-group form-field">
                        <label for="password">Lozinka</label>
                        <input type="password" id="password" className="form-control text-center talia-input" placeholder="******" name="password" minLength={passwordLength}/>
            
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" class="talia-button my-3 talia-border">Ulogujte se</button>


                </div>
            </div>
        </form>
    </div>
    );
}

export default Login;