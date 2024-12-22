import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Blog } from "./pages/Blog";
import {Appbar} from "./pages/Appbar"

import { RecoilRoot } from "recoil";
import { Add_post } from "./pages/Add_post";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Appbar />
      <BrowserRouter>
        <RecoilRoot>
          <Routes>            
          <Route path="/singin" element={
            <div>
              hello world
            </div>
          } />
            <Route path="/signin" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/get-blogs" element={<Blog />} />
            <Route path="/create-post" element={<Add_post />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
