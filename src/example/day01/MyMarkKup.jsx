// function 컴포넌트명 (props){ return ~ }
// 오늘 수업에서 가장 중요함. 
// jsx란/ html과 유사한 확장 문법
// 주의할점 : 리액트가 만든 가상의 HTML(DOM)
// 차이점 : class -> className , onclick -> onClick
// 실제 DOM ( 개수한계 , 상태없고 )
// 가짜 DOM ( 새로운DOM , 상태(props)있고 )
export default function MyMarKup(props) {
    return <div> 내가 만든 마크업/컴포넌트 </div>
}