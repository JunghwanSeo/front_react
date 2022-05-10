import Item from "./Item";
import {useContext} from "react";
import {DiaryStateContext} from "./App";

const List = () => {
    const diaryList = useContext(DiaryStateContext);

    return (
        <div className="DiaryList">
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            {diaryList.map((item) => (
                <Item item={item}/>
            ))}
        </div>
    );
};

List.defaultProps = {
    diaryList: [],
};

export default List;