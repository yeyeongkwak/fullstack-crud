import "./App.css";
import DeptCreate from "./components/DeptCreate";
import DeptSearch from "./components/DeptSearch";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <DeptSearch />
            <DeptCreate />
        </div>
    );
}

export default App;
