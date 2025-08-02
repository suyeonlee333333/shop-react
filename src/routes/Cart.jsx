import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import {changeName} from "./../store.jsx"

function Cart () {

    let a = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    return (
        <div>

            {a.user}의 장바구니
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {a.cart.map((item,index)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>
                            <button onClick={()=>{
                                dispatch(changeName())
                            }}>+</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart