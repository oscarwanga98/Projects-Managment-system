import { gql } from "@apollo/client";

//Add Project

const ADD_PROJECT=gql `
mutation AddProject($name:String!,$description:String!,$status:ProjectStatus,$clientId:ID!){
    addProject(name:$name, description:$description,status:$status,clientId:$clientId){
        id
        name
        description
        status
        client{
            name 
            email
            phone
            id
        }
    }
}
`
//Deleteprojects

const DELETE_PROJECT=gql`
mutation DeleteProject($id:ID!){
    deleteProject(id:$id){
        id
    }
} `

//Update Project

const UPDATE_PROJECT=gql `
mutation updateProject($id:ID!,$name:String!,$description:String!,$status:ProjectStatusUpdate){
    updateProject(id:$id,name:$name, description:$description,status:$status,){
        id
        name
        description
        status
        client{
            name 
            email
            phone
            id
        }
    }
}
`
export{ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT}