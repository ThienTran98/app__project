import React, { useState } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";
import icon_1 from "../assets/img/Vector-1.png";
import { NavLink } from "react-router-dom";


const dataNav = [
  {
    id: 1,
    title: "Danh sách ý tưởng",
    link: "/danh-sach-y-tuong",
    icon : icon_1
  },
  {
    id: 2,
    title: "Lịch sử quan tâm",
    link: "/lich-su",
    icon : icon_1
  },
  {
    id: 3,
    title: "Cộng đồng",
    link: "/cong-dong",
    icon : icon_1
  },
  {
    id: 4,
    title: "Hồ sơ Nhà đầu tư",
    link: "/ho-so-nha-dau-tu",
    icon : icon_1
  },
  {
    id: 5,
    title: "Chat AI hỗ trợ",
    link: "/chat-ai-ho-tro",
    icon : icon_1
  }
  // {
  //   id: 6,
  //   title: "Cài đặt",
  //   link: "/cai-dat",
  // },

];
export default function LayoutInvestor({ children , title , decs }) {
  const [activeNav , setActiveNav] = useState(1)
  const renderNav = () => {
    
    return dataNav.map((item, index) => {
      return <>
      <NavLink onClick={() => {
        handleChangeIndexNav(item.id)
      }} key={item.id} to="" className="flex items-center pl-[60px] group py-6">
        <img src={item.icon} alt="" className={activeNav === item.id ? "w-4 h-4 mr-3  group-hover:opacity-70 group-hover:transition-all " : "w-4 h-4 mr-3 group-hover:opacity-70 group-hover:transition-all"}     />
        <h3 className={activeNav === item.id ? "text-base font-bold text-[#0A2273] group-hover:opacity-70 group-hover:transition-all": "text-base font-medium text-[#000000] group-hover:opacity-70 group-hover:transition-all"}>{item.title}</h3>
      </NavLink>
      </>
    })

  }

  const handleChangeIndexNav = (indexItem) => {
    setActiveNav(indexItem)
  }
  return (
    <div className="bg-[#f1f1f1]">
      <Header />
      <div className="px-[156px]">
      <Banner title={title} decs={decs} />
      <div className="px-6 py-5 grid grid-cols-4 gap-4 bg-white" >
        <div className="border rounded-lg col-span-1 ">
          {renderNav()}
          <NavLink className="flex items-center justify-center hover:opacity-70 hover:transition-all group py-6 bg-[#0A2273] rounded-bl-lg rounded-br-lg" to="/cai-dat">
        <h3 className="text-base font-medium group-hover:opacity-70 group-hover:transition-all text-white">Cài đặt</h3>
      </NavLink>
        </div>
        <div className="col-span-3 ">
        {children}
        </div> 
        </div>
      </div>
      <Footer />
    </div>
  );
}
