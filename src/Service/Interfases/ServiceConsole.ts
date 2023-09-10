import { QueryDto } from "../../Model/QueryDto";

export interface ServiceConsole {

    sendQuery(queryDto:QueryDto):Promise<String[]>;

}