import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F4F5FA]">

      <Sidebar 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />

      <div className="flex-1 lg:ml-[263px] flex flex-col">
        <Header onMenuClick={() => setIsOpen(true)} />
        <MainContent />
      </div>

    </div>
  );
}