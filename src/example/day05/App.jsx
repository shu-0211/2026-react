import Lifecycle from "./Lifecycle"
import TopNavi from "./TopNavi"
import { Routes , Route } from "react-router-dom"
export default function App(props){
    return (<>
        <TopNavi></TopNavi>
        <Routes>
            <Route path='/' element={<Lifecycle></Lifecycle>}></Route>
        </Routes>
    </>)
}