function FrontComp(props){
    const liRows = []; 
    for(let  i = 0 ; i<props.propData1.length; i++){
        liRows.push(
            <li key={i}> {props.propData1[i]} </li>
        );
    }
    return (<>
    <li>{props.frTitle}</li>
    <ul>
        {liRows}
    </ul>
    </>)
}


// 원래 props 객체인데 구조분해 하여 propData2 변수와 baTitle 변수로 각각
const BackComp = ({propData2 , baTitle}) => {
    const liRows = [];
    let keyCnt=0;
    for(let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        );
    }
    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
function Component4(){
    const frontData = [ 'HTML5', 'CSS3' , 'Javascript', 'jQuery', "React" ];
    const backData = [ 'Java' , 'Oracle' , 'JSP' , 'Spring Boot'  ];
    return (<>
    <div>
        <h2>React-Props</h2>
        <ol>
            <FrontComp propData1={frontData} frTitle="프론트엔드"></FrontComp>
            <BackComp propData2={backData} baTitle="벡엔트"/>
        </ol>
    </div>
    </>)
}
export default Component4