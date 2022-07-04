import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import DeptSearch from "./components/DeptSearch";
import DeptCreate from "./components/DeptCreate";
import DeptModify from "./components/DeptModify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    <BrowserRouter>
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/depts" element={<DeptSearch />}></Route>
                <Route path="/depts/newlist" element={<DeptCreate />}></Route>
                <Route
                    path="/depts/modification"
                    element={<DeptModify />}
                ></Route>

                {/* </Route> */}
            </Routes>
        </div>
    </BrowserRouter>
);

reportWebVitals();
