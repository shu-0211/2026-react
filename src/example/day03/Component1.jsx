import './index.css'
import logo from '../../assets/logo.png';
export default function Component1(props){
    const myStyle = {
        color : 'white',backgroundColor:"DodgerBlue",
        padding : "10px",fontFamily: "Verdana"
    }
    const iWudth = {maxWidth : '300px'}
    return (<>
        <h2>리액트 스타일</h2>
        <ol>
            <li>프론트엔드</li>
            <ul>
                <li> <img src='/dog.png' style={iWudth}/> </li>
                <li> <img src={logo} style={iWudth}/> </li>
                <li> <img src='http://nakja.co.kr/images/reactjs.png' style={iWudth}/> </li>
            </ul>
            <li> 벡엔드 </li>
            <ul>
                {/* 전통방식의 css적용 */}
                <li id="backEndsub">java</li>
                <li className="warnings">oracle</li>
                <li>jsp</li>
            </ul>
        </ol>
        
    </>)
}