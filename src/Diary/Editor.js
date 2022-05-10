import '../css/DiaryApp.css';
import React, {useContext, useRef, useState} from "react";
import {DiaryDispatchContext} from "./App";

function Editor(){
    const {onCreate} = useContext(DiaryDispatchContext);

    /* 아래 처럼 속성 값 하나하나를 선언할 수도 있지만
        const [author, setAuthor] = useState("");
     * 아래 처럼 그룹으로 묶어서 상태관리가 가능함.
     */
    const [diary, setDiary] = useState({
        author: "",
        title: "",
        content: "",
        emotion: 1
    })
    const authorInput = useRef();
    const titleInput = useRef();
    const contentInput = useRef();

    /* 스프레드 연산자(...diary)는 기존에 가지고 있는 값들은 나열해줌
     * 따라서, diary에 속성값이 늘어나도 하나하나 선언이 필요없음 (content: diary.content, <= 이런 것들)
     * 단, 스프레드 연산자는 사용할 때 값을 덮어씌우기 때문에 제일 먼저 선언해서 사용해야함.
     */

    /* 각 속성값마다 onChange 이벤트를 걸어도 됨
        <input value={diary.author} onChange={(e)=>{
            setDiary({
                author: e.target.value,
                content: diary.content,
            });
        }}/>
     * 근데 그거보다는 아래처럼 묶어서 사용하는게 좋음 ㅎㅎ
     */
    const handleOnChangeDiary = (e) => {
        setDiary({
            ...diary,
            [e.target.name]: e.target.value, // 이게 ㄹㅇ 대박이네
        });
    }

    const handelSaveDiary = () => {
        if(diary.title.length < 1){
            titleInput.current.focus();
            return;
        }

        if(diary.author.length < 1){
            authorInput.current.focus();
            return;
        }

        if(diary.content.length < 5){
            contentInput.current.focus();
            return;
        }

        onCreate(diary.title, diary.author, diary.content, diary.emotion);

        setDiary({
            title: "",
            author: "",
            content: "",
            emotion: 1
        })
    }

    return (
        <div className="DiaryApp">
            <div className="diaryContent">
                <h2>오늘의 일기</h2>
                <div>
                    <input ref={titleInput} name="title" value={diary.title} onChange={handleOnChangeDiary}/>
                </div>
                <div>
                    <input ref={authorInput} name="author" value={diary.author} onChange={handleOnChangeDiary}/>
                </div>
                <div>
                    <textarea ref={contentInput} name="content" value={diary.content} onChange={handleOnChangeDiary}/>
                </div>
                <div className="selectBox">
                    <h2>감정 점수</h2>
                    <select name="emotion" value={diary.emotion} onChange={handleOnChangeDiary}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
            <div className="diarySave">
                <button onClick={handelSaveDiary}>save</button>
            </div>
        </div>
    );
}

export default React.memo(Editor);