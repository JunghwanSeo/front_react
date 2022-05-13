import React, {useContext, useRef, useState} from "react";
import {DiaryDispatchContext} from "./DiaryHome";

const Item = ({item}) => {
    const {onUpdate, onDelete} = useContext(DiaryDispatchContext);

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(item.content);

    const contentInput = useRef();

    const handleDelete = () => {
        if(window.confirm(`${item.title}을 삭제하시겠습니까?`)){
            onDelete(item.id);
        }
    }

    const handleCancelUpdate = () => {
        setIsEdit(false);
        setLocalContent(item.content);
    }

    const handleUpdate = () => {
        if(localContent.length < 5){
            contentInput.current.focus();
            return;
        }

        if(item.content === localContent){
            contentInput.current.focus();
            return;
        }

        if(window.confirm(`${item.title}을 수정하시겠습니까?`)){
            onUpdate(item.id, localContent);
            toggleIsEdit();
        }
    }

    return (
        <div className="item" key={item.id}>
            <div>{item.emotion}</div>
            <div className="title">{item.title}</div>
            <div className="manifest">
                <div className="date">{item.created.toLocaleString()}</div>
                <div>{item.author}</div>
                {isEdit ? (
                    <>
                        <button onClick={handleCancelUpdate}>취소</button>
                        <button onClick={handleUpdate}>완료</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleDelete}>삭제</button>
                        <button onClick={toggleIsEdit}>수정</button>
                    </>
                )}
            </div>
            <div className="content">{isEdit ? (
                <>
                    <textarea ref={contentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)}/>
                </>
            ) : (
                <>
                    {item.content}
                </>
            )}</div>
        </div>
    );
}

export default React.memo(Item);