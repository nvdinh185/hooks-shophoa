import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/list' element={<List />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  )
}
