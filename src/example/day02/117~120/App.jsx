import { useState } from "react";
import FrontComp from "./FrontComp";
import BackComp from "./BackComp";

function App(){
    const [mode , setMode] = useState('both');
    const handlesetMode = (mode) => {
        setMode(mode);
    };
    let contents = ' ';
    if(mode === 'front'){
        contents = <>
            <FrontComp onSetMode = {(mode) =>{
                setMode(mode);
            }}></FrontComp>
        </>
    } // if end

    else if(mode==='back'){
        contents = <>
            <BackComp setMode={setMode}/>
        </>
    } // else if end

    else {
        contents = <>
            <FrontComp onSetMode={(mode)=>{
                handlesetMode(mode);
            }}></FrontComp>
            <BackComp setMode={handlesetMode}/>
        </>
    } //  else end

    return (<>
        <h2><a href="/" onClick={(event)=>{
            event.preventDefault();
            setMode('both');
        }}>React-State</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}
export default App;