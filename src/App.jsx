import LanguageContextProvider from "./v1/contexts/LanguageContext";
import Layout from "./v1/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Layout />
      </LanguageContextProvider>
    </div>
  );
};

export default App;
