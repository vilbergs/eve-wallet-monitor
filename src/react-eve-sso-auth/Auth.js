import axios from 'axios'

export default class Auth {
    constructor(
        redirectUri = 'http://localhost:3000/callback/',
        clientId = '4895b561f8754151b440c93487624060',
        scopes = 'esi-wallet.read_character_wallet.v1'
    ) {
        this.redirectUri = redirectUri
        this.clientId = clientId
        this.scopes = scopes
    }

    getSSOUrl() {
        return `https://login.eveonline.com/oauth/authorize?response_type=token&redirect_uri=${this.redirectUri}&client_id=${this.clientId}&scope=${this.scopes}`
    }

    authenticateToken() {
        var token = localStorage.getItem('access_token')
        console.log(token)
        if (token) {
            axios.get('https://esi.tech.ccp.is/verify/', {
            headers: {
                'X-User-Agent': 'Eve Wallet Monitor',
                'Authorization': `Bearer ${token}`
            }
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        } else {
            console.log('No valid token')
        }
    }

    setTokentoLocalStorage() {
        var parsedHash = this.parseHash((err, parsed) => {
            if (err) {
                console.log(err)
            } else {
                return parsed
            }
        })
        
        localStorage.setItem('access_token', parsedHash.access_token)
    }

    parseHash(callback) {
        var hashParams = {};
        var err;

        if (!/access_token|error/.test(window.location.hash)) {
            err = 'Hash is neither access token or hash'

            return callback(err, hashParams)
        } else {            
            var e,
                a = /\+/g,  // Regex for replacing addition symbol with a space
                r = /([^&;=]+)=?([^&;]*)/g,
                d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                q = window.location.hash.substring(1);

            while (e = r.exec(q))
            hashParams[d(e[1])] = d(e[2]);
        }
        
        return callback(err, hashParams);
    }
}