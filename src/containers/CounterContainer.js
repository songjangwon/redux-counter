import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';
// store 앆의 state 값을 props 로 연결해 줍니다.
const mapStateToProps = (state) => ({ });
//액션 생성자를 사용하여 액션을 생성하고,
//해당 액션을 dispatch 하는 함수를 맂들어서 props로 연결해 줍니다.
const mapDispatchToProps = (dispatch) => ({ });
// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CounterListContainer = connect(CounterList)
export default CounterListContainer;
