export default class User {
    user= "";
    password="";
    firstName="";
    secondName="";
    id="";
    bday="";
    constructor(user: any, password: any, firstName: any,secondName: any,id: any, bday: any) {
        this.user = user;
        this.password = password;
        this.firstName = firstName;
        this.secondName = secondName;
        this.id = id;
        this.bday = bday;
    }
}