import {Routes,Route} from "react-router-dom";
import './App.css'

import MainPage from "./pages/MainPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Layout from "./components/Layout.jsx";
function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<MainPage/>} />
                <Route path='/posts' element={<PostPage/>} />
            </Route>
        </Routes>
    </>
  )
}

export default App
