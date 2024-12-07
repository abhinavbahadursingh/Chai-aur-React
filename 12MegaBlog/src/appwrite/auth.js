import conf from "../conf/conf";
import {Client , Account , ID} from 'appwrite'

export class AuthService {
    client = new Client()
    account; //account banne me error na aaye issi liye if ye nahi kiya to phir dikkat ho skti h like aage account phle se exist kiya and you did not checked the it will be fucked uppp

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new this.Account(this.client);
    }

    async createAccount({email ,password , name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , password , name)
            if (userAccount) {
                //call another meathod
                 return this.login({email , password})
            }else{
                return userAccount; 
            }
        } catch (error) {
            throw error;
        }
    }
    
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }

    async logout(){
        try {
            return await this.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}


const authService = new AuthService();

export default authService






// import { Client, Account} from 'appwrite';

// export const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<PROJECT_ID>');

// export const account = new Account(client);
// export { ID } from 'appwrite';
