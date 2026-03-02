import React from "react";
import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-bgMain relative">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <MainContent setIsOpen={setIsOpen} />

     

    </div>
  );
}