import { Routes, Route } from "react-router-dom";

import Page1 from "../Pages/Pages1";
import Page2 from "../Pages/Pages2";
import Page3 from "../Pages/Pages3";

export default function Rotas() {
    return (
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="users/" element={<Page2 />} />
        <Route path="contact/" element={<Page3 />} />
      </Routes>
    );
}