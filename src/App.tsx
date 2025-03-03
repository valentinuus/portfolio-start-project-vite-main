import './App.css'
import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
        </div>
    )
}

export default App

