"use client";
import Ide from "@/components/Ide";
import { useEffect, useState } from "react";

export default function Home() {
  const [codeData, setData] = useState();

  return (
    <main>
      <div className="columns-2 m-12">
        <div className="border-black border-4 rounded-md">
          <Ide />
        </div>
        <div className="bg-black text-white p-6 rounded-md">
          <p>What is this code missing?</p>
        </div>
      </div>
    </main>
  );
}
