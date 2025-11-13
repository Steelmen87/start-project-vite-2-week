import './App.css'
import {Header} from "./components/header/Header.tsx";
import {Main} from "./components/main/Main.tsx";
import {OurFilm} from "./components/ourFilm/OurFilm.tsx";
import {SectionImage} from "./components/redingHouse/SectionImage.tsx";
import {OurProcess} from "./components/ourProcess/OurProcess.tsx";
import img from "./images/img_2.png"

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <OurFilm/>
            <SectionImage/>
            <OurProcess/>
            <SectionImage title={"The marble staircase"} image={img}/>
        </div>
    )
}

export default App

