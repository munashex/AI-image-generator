import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home   from './pages/Home' 
import CreatePost from './pages/CreatePost'


const App = () => { 

  let logo = 'data:image/png;base64,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'

  return (
   <BrowserRouter> 
   <header className="w-full flex justify-between items-center bg-white
   sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/">
    <img alt="logo" src="logo.svg" className="h-6 object-contain" /> 
    </Link>
    
    <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white py-1 px-2 rounded-md">Create</Link>
   </header> 

   <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
   </main>
   </BrowserRouter>
  )
}

export default App