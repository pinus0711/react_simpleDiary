import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  //비구조화할당으로 받아와야함
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state, //바꿀게 많을경우 유용!원래있던 스프레드를 먼저 펼쳐주고 변경하고자 하는 프로퍼티를 마지막에 둬야함
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus(); //현재 값에 포커스
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  /*비슷한 두 usestate는 묶을 수 있음
    const [author,setAuthor]=useState(""); //author는 setauthor를 통해서만 상태변화 가능
    const [content,setContent]=useState("");
    */
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput} //authorInput이라는 레퍼런스객체를 통해 input태그에 접근
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수</span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
