import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import WrongPage from "./Screen/WrongPage";
import Home from "./Screen/Home";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contacts from './Screen/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
      </div>
      <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop  />
    </FloatButton.Group>
    </BrowserRouter>
  );
}

export default App;
