import { useState } from "react"

export default function Practice2(props){   // HTML --> css -> js
    const [name , setName] = useState( '' );   // 일반변수가 아닌 상태변수 사용
    const [age, setAge] =useState( 0 );
    const [phone , setPhone ] = useState( '' );
    const [members , setMembers ] = useState( [ ] );  // 빈배열 선언
    // --- 등록함수 
    const 등록함수 = () => {
        const obj = {name,phone,age} // 입력받은 값 3개를 객체로 만듬
        members.push(obj); // 배열에 만든 객체 저장
        setMembers([...members])// 랜더링을 위한 members setter에 스프레드연산자로 배열복사
    }

    //삭제함수 
    const 삭제함수 = (index) =>{
        members.splice(index , 1);  // js에서 특정 인덱스에서 1개 삭제
        setMembers([...members]) // 렌더링을 위한 코드
    }
    return (<>
        <h2>전화번호부</h2>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="성명"/>
        <input value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="연락처 (예: 010-1234-5678)"/>
        <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="성명"/>
        <button onClick={등록함수}> 등록 </button>
        <br />
        {
            members.map((m , index)=>{
                return (<>
                    <div>
                        <span> 성명 : {m.name} </span>
                        <span> 연락처 : {m.phone} </span>
                        <span> 나이 : {m.age} </span>
                        {index}
                        <button onClick={ () => 삭제함수(index)}>삭제</button>
                    </div>
                </> );
            })
        }
        <div> 총인원 : {members.length}</div>
        <div>
            <span> 성명 : 유재석 </span>
            <span> 연락처 : 010-1234-5678 </span>
            <span> 나이 : 50 </span>
        </div>
    </>)
}
