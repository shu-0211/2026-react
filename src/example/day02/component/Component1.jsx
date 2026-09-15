import FrontComp from "./FrontComp.jsx";
import BackComp from "./BackComp.jsx";
function App (){
    return (<>
        <h2>React-Modules</h2>
        <ol>
            <FrontComp onMyEvent = {()=>{
                alert('프론트엔드 클릭됨(부모전달');
            }}></FrontComp>
            <BackComp onMyEvent2={(msg) =>{
                alert(msg);
            }}></BackComp>
        </ol>
    </>)
}
export default App;