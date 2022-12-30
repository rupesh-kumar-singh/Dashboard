import "./App.css";
import Project from "./components/Project";
import Dashboard from "./components/Dashboard";
import SearchAppBar from "./components/Nav";
import DownloadIcon from "@mui/icons-material/Download";
import Thene from "./components/Chart";
import Footer from "./components/Footer";
import TypesExample from "./components/Colors";
function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div>
          <DownloadIcon />
          Generate Report
        </div>
      </div>
      <SearchAppBar />
      <Dashboard />
      <Thene />
      <Project />
      <TypesExample />
      <Footer />
    </div>
  );
}

export default App;
