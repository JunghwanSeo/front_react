import Item from "./Item";

const List = ({onDelete, onUpdate, diaryList}) => {
    return (
        <div className="DiaryList">
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            {diaryList.map((item) => (
                <Item onDelete={onDelete} onUpdate={onUpdate} item={item}/>
            ))}
        </div>
    );
};

List.defaultProps = {
    diaryList: [],
};

export default List;