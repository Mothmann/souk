export default {
    async Register(context,payload) {
            
        const user = {
            username: payload.username,
            password: payload.password,
        };
        console.log(JSON.stringify(user));
        const response = await fetch('http://localhost:3000/user/sign-up',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user),
        }).then(response => {
           if (response.status === 409) {
                alert('username already exists choose another one');
            }
            else {
                alert('registration successful');
            }
        })
        console.log(response);
    },
    async Login(context,payload){
        const user = {
            username: payload.username,
            password: payload.password,
            token: payload.token,
        };
        console.log(JSON.stringify(user));
        const response = await fetch('http://localhost:3000/user/login',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user),
        })
        if (response.ok) {
            localStorage.setItem('user', user.username);
            window.location.replace("http://localhost:8080");
        }
        else {
            alert('incorrect username or password');
        }
    },  
    async logout(){
        localStorage.removeItem('user');
        window.location.replace("http://localhost:8080");
        }

}
  