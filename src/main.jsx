// [필수] 1. 리엑트 라이브러리를  최초로 랜더링(그리기)하는 함수
import { createRoot } from "react-dom/client";   
// [필수] 2. index.html에서 root 마크업 가져오기 , #ID , .Class
const root = document.querySelector('#root');
// [필수] 3. 가져온 root 마크업을 createroot 함수에 전달한다. 
const create = createRoot(root); 
// +======================================================================+ // 
// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 실행
// 1. import 이용하여 컴포넌트 가져온다. 
// import App from './APP.jsx'
// // 2. 가져온 컴포넌트 랜더링하기
// create.render( <App> </App> )

// [day01] render 1번 가능하므로 예제 컴포넌트 변경
// import MyMarKup from "./example/day01/MyMarkKup.jsx";
// create.render(<MyMarKup> </MyMarKup>)

// import Component1 from "./example/day01/Component1";
// create.render ( <Component1> </Component1>)

// import Component2 from "./example/day01/Component2";
// create.render( <Component2/>)

// import Component3 from "./example/day01/Component3";
// create.render( <Component3/>)


// import Component4 from "./example/day01/Component4";
// create.render( <Component4/>)

// import Component5 from "./example/day01/Component5";
// create.render( <Component5/>)

// import Component6 from "./example/day01/Component6";
// create.render( <Component6/>)

// import Component7 from "./example/day01/Component7";
// create.render( <Component7/>)

// import Practice1 from "./example/practice/Practice1";
// create.render(<Practice1/>)

// import App from "./example/day02/component/Component1";
// create.render(<App></App>)

// import Component2 from "./example/day02/component/Component2";
// create.render(<Component2></Component2>)

// import App from "./example/day02/117~120/App";
// create.render(<App></App>)

// import ProductManager from "./example/day02/qwer/ProductManager";
// create.render(<ProductManager></ProductManager>)

// import Component1 from "./example/day03/Component1";
// create.render(<Component1></Component1>)

// import Component2 from "./example/day03/Component2";
// create.render(<Component2></Component2>)

// import Component3 from "./example/day03/Component3";
// create.render(<Component3></Component3>)

// import Practice2 from "./example/practice/Practice2";
// create.render(<Practice2/>)

// // [day04]
// import { BrowserRouter } from "react-router-dom";  // 라우터 라이브러리 가져오기 
// import App from "./example/day04/App";
// // 2. 최초 렌더링되는 컴포넌트 앞뒤로 라우터 컴포넌트 감싼다..
// create.render (<BrowserRouter> <App/> </BrowserRouter>)

// import { BrowserRouter } from "react-router-dom";  
// import RouterHooks from "./example/day04/RouterHooks";
// create.render (<BrowserRouter> <RouterHooks/> </BrowserRouter>)

// import Wook from "./example/practice/Practice3/Wook";
// create.render(<Wook></Wook>)

// import { BrowserRouter } from "react-router-dom";  
// import App from "./example/practice/Practice3/App";
// create.render (<BrowserRouter> <App/> </BrowserRouter>)

// import Aaa from "./example/day05/Aaa";
// import { BrowserRouter } from "react-router-dom";
// create.render (
//     <BrowserRouter>
//         <Aaa/>          
//     </BrowserRouter>
// )

import App from "./example/practice/pr3/App";
import { BrowserRouter } from "react-router-dom";
create.render ( <BrowserRouter> <App/> </BrowserRouter>)