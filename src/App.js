import styles from "./styles";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import "./App.css";
import "./custom.css";

function App() {
  return (
    <div id="parentContainer" className={styles.bg}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
