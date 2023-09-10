import { QueryDto } from "../Model/QueryDto";
import { ServiceConsole } from "./Interfases/ServiceConsole";


export class ServiceConsoleImpl implements ServiceConsole{
    
    constructor(private mainUrl:string){
        
    }
    
    async sendQuery(queryDto: QueryDto): Promise<string[]> {
        let res;
        try {
            const response = await fetch(this.mainUrl,{
                method:"POST",
                headers: {
                    "content-type":"application/json"
                },
                body:JSON.stringify(queryDto)
            })
            res = await this.getResponce(response) 
        } catch (error) {
            res = ['Server is anavaliable']
        }
        return res;
    }

    private async getResponce(response: Response){
        let res;
        if (!response.ok) {
            res = ['Wrong query']
        } else {
            res = response.json()
        }
        return res;
    }

   


}