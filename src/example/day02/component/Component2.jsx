// 구조분해 
// const { name , age } = { name : '유재석' , age : 40 }
// console.log(name , age);
// const [ name , setName ] = [ '유재석' , functionc setter ( ) { } ]
// console.log(name); setName( ) ;

import { useState } from "react";

let 전역변수 = 0;  // 함수 밖에 변수 
export default function Component2(props){
    let 지역변수 = 0;
    // 1. 전역변수 , 지역변수 , 증가함수 
    const 증가함수1 = ( ) => {전역변수++;  지역변수++; console.log(전역변수, 지역변수);}

    // 2. useState 함수 이용한 새로고침 재렌더링 ( 함수 재호출 --> 함수 return )4
    // const [ 상태변수명, set상태변수명 ] = useState(초기값) ;
    // setXXX(새로운값) : 자동으로 현재 함수/컴포넌트 재실행 -> 함수 return 
    // 상태변수는 상태/값 유지된다. 
    const [count , setCount] = useState(0);
    const 증가함수2  = () => {setCount(count+1);}

    // 3. 수박 요소 1개를 갖는 배열 초기값으로 상태변수 선언
    // *** useState 상태(값)의 주소값이 변경되어야만 새로고침이 된다. 
    // 주로 스프레드 연산자를 이용하여 배열 객체 복사 ...객체명,
    const [array,setArray] =useState(['수박']);
    const 증가함수3 = ( ) => {
        // array.push('사과'); setArray(array); console.log(array);
        array.push('사과'); setArray([...array])
    }


    return (<>
        <h3>상태관리</h3>
        <h4> 전역변수 : { 전역변수 } , 지역변수 : {지역변수} </h4>
        <button onClick={증가함수1}> 버튼1</button>
        <h4> 상태변수: {count} </h4>
        <button onClick={증가함수2}> 버튼2 </button>
        <h4> 상태변수 : {array} </h4>
        <button onClick={증가함수3}> 버튼3 </button>
    </>)
}