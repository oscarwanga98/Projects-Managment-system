import {gql} from '@apollo/client'

const GET_CLIENTS=gql`
query getClients{
    clients {
    name,
    email,
    phone,
    id
   }
}`


export{GET_CLIENTS}