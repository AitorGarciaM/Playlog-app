import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Home from './pages/Home.tsx';
import Game from './pages/Game.tsx';

function App() {
    
    return (
    <>
        <Router>
            <Navbar />

            <div style={{display: 'flex'}}>
                <Sidebar/>

                <section className='main'>
                    {/* Define web routes */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/games' element={<Game />} />
                    </Routes>
                </section>
            </div>
        </Router>
    </>
  )
}

export default App
