import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Specification from "./components/specifications/Specification";
import Projets from "./components/projets/Projets";
import FormContact from "./components/formContact/FormContact";
import Apropos from "./components/apropos/Apropos";

function App() {
  return (
    <>
      <Header />
      <main>
        <Apropos />
        <Specification />
        <Projets />
        <FormContact />
      </main>
      <Footer />
    </>
  );
}

export default App;
