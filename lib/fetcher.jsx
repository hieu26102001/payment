import jsCookie from 'js-cookie';
import Router from 'next/router'
export default async function fetcher(url, method = 'POST', params = {}) {
    try {
        const token = jsCookie.get('access_token');
        
        var _header = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        if (token) {
            _header.set('Authorization', `Bearer ${token}`)
        }
        

        if(method == 'GET') {
            const response = await fetch(url, { 
                method: method,
                headers: _header
            })
            const data = await response.json()
            
            if (response.ok) {
                if(data.error == 4) {
                    await jsCookie.remove('active_token');
                    await jsCookie.remove('access_token');
                    Router.push('/auth/login');
                }
                return data
            }
            
            // const error = new Error(response.statusText)
            // error['response'] = response
            // error['data'] = data
            // throw error
        }
        else{
            const response = await fetch(url, {
                method: method,
                headers: _header,
                body: JSON.stringify(params)
            })
            const data = await response.json()
            
            if (response.ok) {
                if(data.error != 0) {
                    await jsCookie.remove('active_token');
                    await jsCookie.remove('access_token');
                    Router.push('/auth/login');
                }
                return data
            }
            // const error = new Error(response.statusText)
            // error['response'] = response
            // error['data'] = data
            // throw error
        }
        

        
    } catch (error) {
        if (!error.data) {
            error.data = { message: error.message }
        }
        throw error
    }
}
