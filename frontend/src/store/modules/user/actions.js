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
        });
        console.log(response);
    },
}