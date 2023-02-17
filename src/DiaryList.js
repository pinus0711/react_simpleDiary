import DiaryItem from "./DiaryItem";
import { useContext } from "react";

import { DiaryStateContext } from "./App";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h3>일기 리스트</h3>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(
          (
            it //it은 diary리스트 하나의 객체 //고유한 아이디 없으면 인덱스 활용가능
          ) => (
            <DiaryItem key={it.id} {...it} />
          )
        )}
      </div>
    </div>
  );
};

export default DiaryList;
