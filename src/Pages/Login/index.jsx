import React, { Component } from 'react'



class Login extends Component {

    state = {  }
    render() { 
        return ( 
            <form onSubmit={3}>
                <input type="text" value="نام کاربری " />
                <input type="password" value='رمز عبور' />
                <input type="submit" value="ورود" />
            </form>
         );
    }
}
 
export default Login;