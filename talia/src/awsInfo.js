import {CognitoUserPool} from "amazon-cognito-identity-js";

const userPool = {
    UserPoolId: "eu-central-1_oiFuDcEjV",
    ClientId: "1l40fu75r3tcpkpt1df69u7i8g"
}

export default new CognitoUserPool(userPool);