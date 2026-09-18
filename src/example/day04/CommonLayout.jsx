import { Outlet } from "react-router-dom"
export default function CommomLayout(props){
    return (<>
    <div> 컴포넌트 헤더 </div>
    <div>
        <Outlet/>
    </div>
    <div> 컴포넌트 푸터 </div>
    </>)
}