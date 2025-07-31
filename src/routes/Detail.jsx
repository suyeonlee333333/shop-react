    import { useParams } from "react-router-dom"
    import { useEffect } from "react";
    import { useState } from 'react'



    function Detail (props) {
        let [alert,setAlert]=useState(true)

        useEffect(()=>{ //mount, update 시
            setTimeout( ()=> {setAlert(false)},2000);
            return ()=>{
                //clean up function (타이머제거, socket 연결요청제거, ajax요청중단)
            }
        },[])


        let {id} = useParams();
        const Id = parseInt(id);
        return (
            <>
            <div className="container">
                {
                    alert == true ? <div className="alert alert-warning">
                    2초 이내 구매시 할인</div> : null
                }
                
                <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[Id].title}</h4>
                <p>{props.shoes[Id].content}</p>
                <p>{props.shoes[Id].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
                </div>
            </div> 
            </>
        )
        }
    export default Detail;