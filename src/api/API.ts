import User from "../objects/User";

export default class API{
    url ="http://localhost/shibavet_back/";
    async createUser(data: User, userType: number) {
        const path = `${this.url}createUser.php`;
        const body = new URLSearchParams();
        body.append("username", data.user)
        body.append("password", data.password)
        body.append("firstName",data.firstName)
        body.append("lastName", data.secondName)
        body.append("userType", userType+"")
        body.append("id", data.id)
        body.append("bday", data.bday)
        const options = {
            headers: {
              Accept: 'application/json'
            },
            body: body,
            method: 'post'
        };
        const response = await fetch(path,options)
        return response.json();
    }
    async checkUser(user: any, password: any) {
        const path = `${this.url}checkUser.php`;
        const body = new URLSearchParams();
        body.append("username", user)
        body.append("password", password)
        const options = {
            headers: {
              Accept: 'application/json'
            },
            body: body,
            method: 'post'
        };
        const response = await fetch(path,options)
        return response.json();
    }
}