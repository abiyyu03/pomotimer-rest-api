const secretKey = 'd2532e8fa99200dd2acd183435fb47b4b897d541d0b3b9dfcc20537a5fd25f2e';
const baseURL = 'http://localhost:5000';
const clientID = 'D4Gt8C2DCgAcUWLe0zw8Y87KNdlivzj8';
const issuerBaseURL = 'https://dev-h89ft50z.us.auth0.com';

const config = {
    authRequired:false,
    auth0Logout:true,
    secret:secretKey,
    baseURL:baseURL,
    clientID:clientID,
    issuerBaseURL:issuerBaseURL,
}

module.exports = config;