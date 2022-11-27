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
    async changeUserData(username: any, firstName: any, lastName: any, id:any) {
        const path = `${this.url}editUserData.php`;
        const body = new URLSearchParams();
        body.append("username", username)
        body.append("firstName", firstName)
        body.append("lastName", lastName)
        body.append("id", id)
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
    async changePassword(username: any, password: any, id: any) {
        const path = `${this.url}changeUserPassword.php`;
        const body = new URLSearchParams();
        body.append("username", username)
        body.append("password", password)
        body.append("id", id)
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
    async createPet(pet: Pet) {
        const path = `${this.url}createPet.php`;
        const body = new URLSearchParams();
        body.append("name", pet.name)
        body.append("race", pet.race)
        body.append("age", pet.age)
        body.append("sex", pet.race)
        body.append("ownerID",pet.ownerID)
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
    async editPet(pet: Pet) {
        const path = `${this.url}editPet.php`;
        const body = new URLSearchParams();
        body.append("name", pet.name)
        body.append("race", pet.race)
        body.append("age", pet.age)
        body.append("sex", pet.sex)
        body.append("ID",pet.id)
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
    async deletePet(id:any) {
        const path = `${this.url}deletePet.php`;
        const body = new URLSearchParams();
        body.append("ID",id)
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
    async getPetByID(ID:any) {
        const path = `${this.url}getPetByID.php`;
        const body = new URLSearchParams();
        body.append("ID",ID)
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
    async getAllPets(userType: any) {
        const path = `${this.url}getAllPets.php`;
        const body = new URLSearchParams();
        body.append("userType",userType)
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
    async getRecordsPet(userType:any, petID: any){
        const path = `${this.url}getRecordsPet.php`;
        const body = new URLSearchParams();
        body.append("userType",userType)
        body.append("petID", petID)
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
    async createRecord(date: any, petID:any, ownerID: any, sickness: any, details: any) {
        const path = `${this.url}createRecord.php`;
        const body = new URLSearchParams();
        body.append("ownerID",ownerID)
        body.append("petID", petID)
        body.append("date", date)
        body.append("sickness",sickness)
        body.append('details', details)
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
    async createService(date:any, serviceType: any, ownerID:any, petID: any) {
        const path = `${this.url}createService.php`;
        const body = new URLSearchParams();
        body.append("ownerID",ownerID)
        body.append("date", date)
        body.append("serviceType", serviceType)
        body.append('petID', petID)
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