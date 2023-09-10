import { log } from "console"
import QueryText from "./QueryText"
import ConsoleArea from "./ConsoleArea";
import { CSSProperties, useEffect, useState } from "react";
import { ResponseConsole } from "../Model/ResponseConsole";
import { serviceConsole } from "../Configure/ServiceConf";
import { QueryDto } from "../Model/QueryDto";


const StringConsole:React.FC = () => {

    const [response, setResponse] = useState<String[]>(['']);

    const styleApp:CSSProperties = {
        marginTop:"2vw",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        height:"80vh"
    }

    useEffect(() => {

    },response)

    const send = async (str:String) => {
        console.log(str);
        const query:QueryDto = {
            query:str
        }
        const res:String[] = await serviceConsole.sendQuery(query)
        setResponse(res);
        console.log(res); 
    }

return <div style={styleApp}>
        <QueryText callback={send}></QueryText>
        <ConsoleArea text={response}></ConsoleArea>
    </div>
}

export default StringConsole;