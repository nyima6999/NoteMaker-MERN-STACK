import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage.css/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/MyNotes" element={<MyNotes />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/createnote" element={<CreateNote />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/note/:id" element={<SingleNote />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
