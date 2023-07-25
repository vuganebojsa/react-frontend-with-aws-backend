
function Login(){
    return (
    <div className="login talia-border">
        <div className="row text-center mx-2">
            <div className="col-12">
            <h3 className="main-text-color p-3">Ulogujte se</h3>

            </div>
        </div>
        <form>
            <div className="row text-center">
                <div className="col-12">
                    <div class="form-group form-field">
                        <label for="email">Email adresa</label>
                        <input type="email" className="form-control text-center talia-input" name="email"  placeholder="mara@primer.com"/>
                    </div>
                </div>
                <div className="col-12">
                    <div class="form-group form-field">
                        <label for="password">Lozinka</label>
                        <input type="password" className="form-control text-center talia-input" placeholder="******" name="password"/>
            
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