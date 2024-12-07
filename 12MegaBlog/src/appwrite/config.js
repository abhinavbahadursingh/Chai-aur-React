import conf from "../conf/conf";
import {Client ,  ID , Databases , Storage , Query}   from 'appwrite'


export class Service{
    client  = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases();
            this.bucket = new this.Storage();
    }

    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId,         
                }
            )
        } catch (error) {
            console.log(error);   
        }
    }

        async updatePost(slug , {title , content , featuredImage , status }){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title, 
                        content,
                        featuredImage,
                        status,       
                    }
                )      
            } catch (error) {
                console.log(error);   
            }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )      
            return true;
        } catch (error) {
            console.log(error);   
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPosts(query = [ Query.equal("status" , "active")]){ //querry sirf ek variable h
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                appwriteCollectionId,
                 query
            )
        } catch (error) {
            console.log(error)
        return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }


    getFilePreview(fileID){
        conf.appwriteBucketId,
        fileID
    }
}
const service = new Service()//new variable se banaya h to constructor lgega 
export default service//aaise object nikal ke issi liye export kiya taki jb use kre to direct dot krke use kr skte service ko