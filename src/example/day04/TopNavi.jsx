import {  Link ,NavLink } from "react-router-dom";
export default function TopNavi(porps){
    return (<>
        <div>
            <a href="/"> Home</a>&nbsp;
            <NavLink to="/"> Home2 </NavLink>&nbsp;
            <NavLink to="/intro"> 인트로 </NavLink>&nbsp;
            <NavLink to="/intro/router"> 라우터관련훅 </NavLink>&nbsp;
            <Link to="/xyz"> 잘못된주소 </Link>
        </div>
    </>)
}
//  <a href="이동할경로"> 텍스트 </a>           : 페이지
// <NavLink to="이동할경로"> 텍스트 </NavLink>  : 페이지
// <Link to="이동할경로"> 텍스트 </Link>        : 페이지