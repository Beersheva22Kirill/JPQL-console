import { type } from "os"
import { CSSProperties, HTMLAttributes, StyleHTMLAttributes } from "react";
import { text } from "stream/consumers";


type Props = {
    text:String[];
}

const ConsoleArea: React.FC<Props>  = (props) =>{

    const styleArea:CSSProperties = {
        display:"flex",
        paddingLeft:"5vw", 
        flexDirection:"column", 
        alignItems:"flex-start",
        justifyContent:"left",
        width:"35vw", 
        height:"80vh",
        overflowY:"auto",
        borderStyle:"double"}

    return <div style={styleArea}>
                           
        {props.text.map((str) => <p>{str}</p>)}
    </div>
}

export default ConsoleArea