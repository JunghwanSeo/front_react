import "./css/App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";

import DiaryHome from "./Diary/DiaryHome";
import CounterHome from "./counter/CounterHome";
import AppNavigator from "./components/AppNavigator";
import TodoHome from "./todo/TodoHome";

function App(){
    return (
        <div>
            <AppNavigator />
            <Routes>
                <Route path="/diary" element={<DiaryHome />} />
                <Route path="/counter/:id" element={<CounterHome />} />
                <Route path="/counter" element={<CounterHome />}/>
                <Route path="/" element={<TodoHome />} />
            </Routes>
        </div>
    );
}

export default App;