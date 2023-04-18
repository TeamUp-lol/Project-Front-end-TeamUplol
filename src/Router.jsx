import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Form from "./pages/Form";


export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}