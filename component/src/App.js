import Navbar from "./companents/Navbar";
import Main from "./companents/Main";
import data from "./asset/data.js"
function App() {
  return (
    <div>
      <Navbar title= "Photo Gallery"></Navbar>
      <Main data = {data}></Main>
    </div>
  );
}

export default App;
