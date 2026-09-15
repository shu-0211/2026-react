function FrontComp(props){
    return (<>
        <li>프론트엔트</li>
        <ul>
            <li> HTML5 </li>
            <li> CSS 3 </li>
            <li> Javascript </li>
            <li> jQuery </li>
        </ul>
    </>)
}
const BackComp = (props)=> {
    return (<>
        <li>백엔트</li>
        <ul>
            <li> JAVA </li>
            <li> Oracle </li>
            <li> JSP </li>
            <li> Spring Boot </li>
        </ul>
        </>)
}
const FromComp = function(props){
    return (<>
        <form>
            <select>
                <option value="fromt"> 프론트엔드 </option>
                <option value="back"> 백엔드 </option>
            </select>
            <input type="text" name="title"/>
            <input type="submit" value="추가"/>
        </form>
    </>);
}

export default function Component2(props){
    return (<>
        <div>
            <h2>React - Component</h2>
            <ol>
                <FrontComp></FrontComp>
                <BackComp/>
            </ol>
            <FromComp/>
        </div>
    </>)
}