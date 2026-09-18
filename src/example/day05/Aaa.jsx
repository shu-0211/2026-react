import axios from "axios";
import { useState , useEffect } from "react";
function RandomUser(props){
    const [myJSON , setMyJSON] =useState({results:[]});  // 객체안에 빈배열 속성으로 초기화
    // API 응답 결과 저장하는 상태 / 변수

    useEffect(async function(){
        // fetch("https://api.randomuser.me?results=10")
        //     .then((result)=>{
        //         return result.json();
        //     })
        //     .then((json)=>{
        //         console.log(json);
        //         setMyJSON(json);
        //     });

        const response = await axios.get( "https://api.randomuser.me?results=10"); 
        const data = response.data;
        setMyJSON( data ); // 통신 응답결과 상태변수에 대입 --> 렌더링 
    }, [] );

    // 현재 상태변수에 존재하는 리스트들을 tr구성하여 하나씩 html만들기
    let trTag = myJSON.results.map((data) => {
        return (
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail} alt={data.username}/></td>
                <td><a href="/" onClick={(e)=>{
                    e.preventDefault();
                    props.onProfile(data);
                }}>{data.login.username}</a></td>
                <td>{data.name.title} {data.name.first} {data.name.last}</td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });

    // 간단한 표 이용하여 위에서 정의한 tr 대입
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>사진</th> <th>로그인</th> <th>이름</th>
                        <th>국가</th> <th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
} // end
function ExternalApiFetcher(){
    return (<>
        <h2>외부 서버 통신</h2>
        <RandomUser onProfile={(sData) =>{
            console.log(sData);
            let info = `전화번호:${sData.cell}
            성별:${sData.gender}
            username:${sData.login.username}
            password:${sData.login.password}`;
            alert(info);
        }}></RandomUser>
    </>);
}

export default ExternalApiFetcher;