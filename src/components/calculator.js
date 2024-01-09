import React,{useState} from "react";

function Calculator () {

    const [result,setResult]=useState("");

    const Eval=()=> {
        return(
            setResult(eval(result))
    
        );
    }
    
    const Clear=()=> {
        return(
            setResult(" ")
        );
    }
    
    const Display=(event)=>{
        return(
         
                setResult(result.concat(event.target.value))
           
        );
    }

    return(
        <div style={{  width:"408px",margin:"100px auto", border:"2px solid black"}}>
            <input type="text" id="dis" value={result}/>

            <input type="button" value="1" id="button" onClick={Display} />
            <input type="button" value="2" id="button" onClick={Display} />
            <input type="button" value="3" id="button" onClick={Display} />
            <input type="button" value="4" id="button" onClick={Display} />
            <input type="button" value="5" id="button" onClick={Display} />
            <input type="button" value="6" id="button" onClick={Display} />
            <input type="button" value="7" id="button" onClick={Display} />
            <input type="button" value="8" id="button" onClick={Display} />
            <input type="button" value="9" id="button" onClick={Display} />
            <input type="button" value="0" id="button" onClick={Display} />
            <input type="button" value="+" id="button" onClick={Display} />
            <input type="button" value="-" id="button" onClick={Display} />
            <input type="button" value="*" id="button" onClick={Display} />
            <input type="button" value="/" id="button" onClick={Display} />
            <input type="button" value="." id="button" onClick={Display} />
            <input type="button" value="=" id="button" onClick={Eval}/>
            <input type="button" value="Clear" id="clr" onClick={Clear}/>
                
        </div>

    );
};

export default Calculator;