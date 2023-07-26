import "./App.css";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import MealsListApi from "./MealsListApi";
import SearchMeal from "./SearchMeal";
import SingleMeal from "./SingleMeal";

function App() {
  return (
    <>
      <Header />
      <SearchMeal />
      {/* <MealsListApi />
      <ContactForm />
      <SingleMeal /> */}
      <Footer />
    </>
  );
}

export default App;
