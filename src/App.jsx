import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Nav,Row,Col } from 'react-bootstrap'
import bg from './bg-1.png';
import data from './data.jsx';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.jsx';
import axios from 'axios';



function App() {
  let [shoes,setShoes]=useState(data);
  let navigate=useNavigate();

  return (
      <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
          <Container> 
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/event')}}>Event</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>

        <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{backgroundImage:`url(${bg})`}}></div>
        <div>
          <Row>
          {/* <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col> */}
          
          {/* <Item data1= {data}></Item> */}
          <Item data1={shoes}></Item>
          
          <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{
            let copy = [...shoes, ...결과.data];
            setShoes(copy);
          })
          .catch(()=>{ console.log('실패') })
          }}>더보기</button>
        </Row>
        </div>

          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} ></Detail>} />
        <Route path="/about" element={<About></About>} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<About></About>} />
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>

        </Route>

      </Routes>


        
      </div>
  )

}

function Item ({data1}) {
  return (
    <>
    {data1.map ((k, i) => (
      <Col sm key={i}>
        <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%"></img>
        <h4>{k.title}</h4>
        <p>{k.price}</p>
      </Col>
    ))}
  
  </>
  )
}

function About () {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
      </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}




export default App
