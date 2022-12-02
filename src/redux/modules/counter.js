// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  //   console.log(payload);
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};

// export default reducer
export default counter;

/* 2
// src/modules/counter.js

// 추가된 코드 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

// 추가된 코드 - Action Creator를 만들어 줍니다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
*/

/* 1
// src/modules/counter.js

// 초기 상태값
const initialState = {
  number: 0,
};

// const initialState = [0]
// const initialState = {
//   number: 0,
//   name: 'chan'
// };

// 리듀서 (변화를 일으키는 함수, 리듀서는 함수다)
const counter = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "PLUS_ONE":
      return { number: state.number + 1 };
    case "MINUS_ONE":
      return { number: state.number - 1 };
    default:
      return state;
  }
  //   const onClickHandler = () => {
  //     setNumber(number + 1)
  //   } State 변경시
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
*/
