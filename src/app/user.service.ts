import { User } from './list/user';
import {Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
    
@Injectable()
export class UserService{
    
    private url = "http://http://localhost:4200/users";
    constructor(private http: HttpClient){
     }
   
    createUser(user: User){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post(this.url, JSON.stringify(user), {headers: myHeaders}); 
    }
    updateUser(user: User) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put(this.url, JSON.stringify(user), {headers:myHeaders});
    }
    deleteUser(id: number){
        return this.http.delete(this.http + '/' + id);
    }
}