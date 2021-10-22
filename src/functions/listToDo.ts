
import {document} from "../utils/dynamoClient"



export const handle = async (event)=>{

    
    const {user_id} = event.pathParameters;

    const response= await document.query({
        TableName:"users_todo",
        KeyConditionExpression: "user_id =:user_id",
        ExpressionAttributeValues:{
            ":user_id":user_id,
        }
    }).promise()
    
    const result = response.Items[0]

   console.log(result)

    return {
        statusCode:201,
        body: JSON.stringify(response.Items),
        headers: {
            "Content-Type":"application/json"
        }
    }

}