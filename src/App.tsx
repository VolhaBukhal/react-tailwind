import "./App.css";
import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { Wrapper } from "./components/wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <MainSection />
      </Wrapper>
    </>
  );
}

export default App;
