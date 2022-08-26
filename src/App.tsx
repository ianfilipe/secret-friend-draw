import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Config from './pages/Config'
import Draw from './pages/Draw'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
