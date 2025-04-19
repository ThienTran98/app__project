import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LayoutInvestor from "./HOC/LayoutInvestor";
import ListOfIdeasPage from "./Pages/ListOfIdeasPage/ListOfIdeasPage";
import History from "./Pages/History/History";
import Community from "./Pages/Community/Community";
import ProfileInvestor from "./Pages/ProfileInvestor/ProfileInvestor";
import ChatPage from "./Pages/ChatPage/ChatPage";
import SettingPage from "./Pages/SettingPage/SettingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutInvestor title="Danh sách các ý tưởng" decs="Danh sách các ý tưởng startup đang gọi vốn">
                             <ListOfIdeasPage/>

              </LayoutInvestor>
            }
          />
           <Route
             path="/danh-sach-y-tuong"
  
            element={
              <LayoutInvestor title="Danh sách các ý tưởng" decs="Danh sách các ý tưởng startup đang gọi vốn">
                <ListOfIdeasPage/>
              </LayoutInvestor>
            }
          />
               <Route
            path="/lich-su"
            element={
              <LayoutInvestor title="Lịch sử quan tâm" decs="Lịch sử danh sách các ý tưởng bạn đã quan tâm">
                <History/>
              </LayoutInvestor>
            }
          />
               <Route
            path="/cong-dong"
            element={
              <LayoutInvestor title="Cộng đồng" decs="Cộng đồng nhà đầu tư">
                <Community/>
              </LayoutInvestor>
            }
          />
               <Route
            path="/ho-so-nha-dau-tu"
            element={
              <LayoutInvestor title="Hồ sơ nhà đầu tư" decs="Xem hồ sơ Nhà đầu tư">
                <ProfileInvestor/>
              </LayoutInvestor>
            }
          />
               <Route
            path="/chat-ai-ho-tro"
            element={
              <LayoutInvestor title="Chat AI hỗ trợ" decs="Chat AI hỗ trợ">
                <ChatPage/>
              </LayoutInvestor>
            }
          />
           <Route
            path="/cai-dat"
            element={
              <LayoutInvestor title="" decs="">
                <SettingPage/>
              </LayoutInvestor>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
