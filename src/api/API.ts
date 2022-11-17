import Pet from "../objects/Pet";
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
    async createPet(user: User, pet: Pet) {
        const path = `${this.url}createPet.php`;
        const body = new URLSearchParams();
        body.append("name", pet.name)
        body.append("race", pet.race)
        body.append("age", pet.age)
        body.append("sex", pet.race)
        body.append("ownerID",user.id)
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
    async getPetsByOwner(ownerID:any){
        const path = `${this.url}getPetsByOwner.php`;
        const body = new URLSearchParams();
        body.append("ownerID",ownerID)
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