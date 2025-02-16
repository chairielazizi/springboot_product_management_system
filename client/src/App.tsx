import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TableList from "./components/TableList/TableList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <TableList />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default App;
