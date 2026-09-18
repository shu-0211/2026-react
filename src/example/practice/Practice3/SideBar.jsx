import { Link, NavLink } from "react-router-dom"

export default function SideBar(){
    return(<>

    <div style={{display : flex ,}}>
        <div>5팀 프로젝트</div>
        <div>
            <NavLink to="/"></NavLink>
        </div>
        <div>
            <NavLink to="/">home</NavLink>&nbsp;
            <h4>팀원소개</h4>&nbsp;
            <Link to="/Wook">서현욱</Link>&nbsp;
            <NavLink to="/Yoon">최윤성</NavLink>&nbsp;
            <NavLink to="/Kimdoodoo">김두현</NavLink>&nbsp;
            <NavLink to="/Joon">안현준</NavLink>&nbsp;
        </div>
    </div>
    
    </>)
}