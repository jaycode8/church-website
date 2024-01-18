
import "./App.css"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import Events from "./components/Events/Events"
import Gallery from "./components/Gallery/Gallery"
import Landing from "./components/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import V1 from "./components/Verses/V1"

function App() {

    return (
        <div className="w-full h-screen">
            <Navbar />
            <Landing />
            <About />
            <V1 />
            <Events />
            <Gallery />
            <Contacts />
        </div>
    )
}


export default App
