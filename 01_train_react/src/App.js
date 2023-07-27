import "./App.css";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import MealsListApi from "./MealsListApi";
import SearchMeal from "./SearchMeal";
import SingleMeal from "./SingleMeal";
import ShowAllCategory from "./ShowAllCategories";
import AllCategories from "./AllCategories";

function App() {
  return (
    <>
      <Header />
      <ShowAllCategory />
      {/* <SearchMeal/>
      <MealsListApi />
      <ContactForm />
      <SingleMeal />  */}
      <Footer />
    </>
  );
}

export default App;
