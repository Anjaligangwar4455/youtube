
import './App.css';

import VideoPage from'./components/VideoPage.js';

import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import VideoComponent from './components/VideoComponent.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeComponent/>}></Route>
    <Route path="/" element={<VideoComponent/>}> </Route>
    <Route path="/video/:id" element={<VideoPage/>}></Route>



    </Routes>
    </BrowserRouter>
  

  )
}

export default App;