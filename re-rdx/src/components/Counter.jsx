import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { incCount } from '../redux/action';

export const Counter =()=>{
    const count = useSelector((store)=>store.count)
    const dispatch = useDispatch();
    return  <div >
       count:{count}
       <button onClick={()=>{dispatch(incCount(1))}}>add</button>
      </div>
    
}
