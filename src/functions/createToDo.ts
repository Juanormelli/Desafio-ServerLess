
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {document} from "../utils/dynamoClient"
import {v4 as uuidV4} from "uuid"

interface ICreateTodo{
  
	
	title: string,
	
	deadline: string




}

export const handle:APIGatewayProxyHandlerV2 = async (event)=>{

    const { title, deadline } = JSON.parse(event.body) as ICreateTodo;
    const id = uuidV4();
    const {user_id} = event.pathParameters;
    console.log(deadline.toString())
    
    await document.put({
        TableName:"users_todo",
        Item:{
            user_id,
            id,
            title,
            done: false,
            deadline: new Date(deadline).toLocaleDateString(),
        }
    }).promise()

    return {
        statusCode:201,
        body: JSON.stringify({
            message: "Todo Criado com sucesso"
        }),
        headers: {
            "Content-Type":"application/json"
        }
    }

}