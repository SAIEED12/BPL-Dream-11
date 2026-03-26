import { Suspense,  useState } from "react";
import "./App.css";
import Banner from "./components/navbar/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/navbar/players/Players";
import Footer from "./components/footer/footer";
const fetchPlayer = async () =>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000000)
  return (
    <>
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
    </Suspense>
    <Footer></Footer>
    </>
  );
}

export default App;
