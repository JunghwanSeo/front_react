import React, {useEffect, useRef, useCallback, useReducer} from "react";
import Editor from "./Editor";
import List from "./List";
import "../css/App.css"

// switch...?
// 를 사용하는게 레퍼런스네..? https://ko.reactjs.org/docs/hooks-reference.html#usereducer
const reducer = (state, action) => {
    switch(action.type){
        case "init" : {
            return action.data;
        }
        case "create" : {
            return [action.data, ...state];
        }
        case "update" : {
            return state.map((diary) => diary.id === action.data.targetId ? {...diary, content: action.data.newContent} : diary);
        }
        case "delete" : {
            return state.filter((diary) => diary.id !== action.data)
        }
        default : return state;
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, []);

    const itemId = useRef(0);

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

        const initData = res.slice(0, 10).map((item) => {
            return {
                author : item.email,
                content : item.body,
                title : item.name,
                emotion : (item.postId % 5 + 1),
                created : new Date(),
                id : itemId.current++
            }
        })

        dispatch({type: "init", data: initData})
    };

    useEffect(() => {
        getData();
    }, [])

    // useMemo 와 동일하게 작동을 하지만 변수가 아닌 함수를 return 하는 점에서 차이가 있음
    const onCreate = useCallback((title, author, content, emotion) => {
        const created = new Date();
        const newItem = {
            title,
            author,
            content,
            emotion,
            created,
            id: itemId.current,
        };
        dispatch({
            type: "create",
            data: newItem
        });

        itemId.current += 1;

        alert("저장되었습니다.");
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "delete",
            data: targetId
        });
    }, []);

    const onUpdate = useCallback((targetId, newContent) =>{
        dispatch({
            type: "update",
            data: {
                targetId: targetId,
                newContent: newContent
            }
        });
    }, []);

    return (
        <div className="container">
            <Editor onCreate={onCreate} />
            <List onDelete={onDelete} onUpdate={onUpdate} diaryList={data}/>
        </div>
    );
}

export default App;