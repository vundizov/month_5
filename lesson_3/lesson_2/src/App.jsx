import {Routes,Route} from "react-router-dom";
import './App.css'

import MainPage from "./pages/MainPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Layout from "./components/Layout.jsx";
import OnePost from "./pages/OnePost.jsx";
import Delete from "./pages/Delete.jsx";
function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<MainPage/>} />
                <Route path='/posts' element={<PostPage/>} />
                <Route path={'/posts/:id'} element={<OnePost/>} />
                <Route path={'/posts/:id/delete'} element={<Delete />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
