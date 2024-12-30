import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "../store/actions/counterAction"

const Counter = () => {
    const counterNumber = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    return (
        <>
            <div className="counter">
                <div className="counter-button" onClick={ () => dispatch(decrement(1))}>-</div>
                <div className="counter-text">{counterNumber}</div>
                <div className="counter-button" onClick={() => dispatch(increment(1))}>+</div>
            </div>
        </>
    );
}

export default Counter;