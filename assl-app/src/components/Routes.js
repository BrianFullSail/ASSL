import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Quizzes from '../pages/Quizzes'

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Quizzes' element={<Quizzes />}></Route>
        </Routes>
    );
}

export default Routing;