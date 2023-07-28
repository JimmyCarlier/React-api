import Header from "../component/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex home-section">
        <h1>Bienvenue a Coktail City</h1>
        <img src="/tchoupiprout.png" alt="" className="tchoupi" />
      </div>
    </>
  );
};

export default HomePage;
