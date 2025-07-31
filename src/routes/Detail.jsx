    import { useParams } from "react-router-dom"
    import { useEffect } from "react";
    import { useState } from 'react';
    import { Nav } from 'react-bootstrap';



    function Detail (props) {
        let [alert,setAlert]=useState(true);
        let [tab,setTab]=useState(0);

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

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}}eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            {
                tab == 0 ?  <div>내용0</div> : null
            }
            {
                tab == 1 ? <div>내용1</div> : null
            }
            {
                tab == 2 ? <div>내용2</div> : null
            }

            </>
        )
        }
    export default Detail;