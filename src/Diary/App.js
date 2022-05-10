import React, {useState, useEffect, useRef, useCallback} from "react";
import Editor from "./Editor";
import List from "./List";
import "../css/App.css"

function App() {
    const [data, setData] = useState([]);

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

        setData(initData);
    };

    useEffect(() => {
        getData();
    }, [])

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
        itemId.current += 1;
        setData((data) => [newItem, ...data]);

        alert("저장되었습니다.");
    }, []);

    const onDelete = (targetId) => {
        const newDiary = data.filter((diary) => diary.id !== targetId);
        setData(newDiary);
    };

    const onUpdate = (targetId, newContent) =>{
        setData(
            data.map((diary) => diary.id === targetId ? {...diary, content: newContent} : diary)
        );
    };

    return (
        <div className="container">
            <Editor onCreate={onCreate} />
            <List onDelete={onDelete} onUpdate={onUpdate} diaryList={data}/>
        </div>
    );
}

export default App;