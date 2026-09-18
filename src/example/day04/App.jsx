import { Route,Routes } from "react-router-dom";
import Home from "./Home"
import NotFound from "./NotFound";
import { Component } from "react";
import LayoutIndex from "./LayoutIndex";
import TopNavi from "./TopNavi";
import CommonLayout from "./CommonLayout";
import RouterHooks from "./RouterHooks";

export default function App(props){
    return ( <>
    <TopNavi></TopNavi>
    <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/intro" element={<CommonLayout/>}>
            <Route index element ={<LayoutIndex/>}></Route>
            <Route path="router" element={ <RouterHooks/>}></Route>
        </Route>
        
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
     </>)
}