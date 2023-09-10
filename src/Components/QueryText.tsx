import { CSSProperties, useRef, useState } from "react";

type Props = {
    callback:(text:String) => void
}

const QueryText:React.FC<Props> = (props) => {

    const styleQueryText:CSSProperties = {
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"1vh"
    }

    const btnStyle:CSSProperties = {
        margin: "1vw"
    }

    const [textAreaValue, setTextAreaValue] = useState<String>(""); 

    const sendText = () => {
        props.callback(textAreaValue);
    }


  

    return <div style={styleQueryText}>
        <textarea onChange={(e) => setTextAreaValue(e.target.value)} style={{marginRight:2, width:"40vw",height:"15vh"}}></textarea>
        <button style={btnStyle} onClick={sendText}>Send</button>
    </div>
}

export default QueryText;