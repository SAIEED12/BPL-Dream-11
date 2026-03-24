import { Suspense } from "react";
import "./App.css";
import Banner from "./components/navbar/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/navbar/players/Players";

const fetchPlayer = async () =>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playersPromise={playersPromise}></Players>
    </Suspense>
    </>
  );
}

export default App;
