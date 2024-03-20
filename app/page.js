"use client";
import Ide from "@/components/ide";
import { useEffect, useState } from "react";

export default function Home() {
  const code = `def main():
  print("test")
  `;
  const [codeData, setData] = useState();
  const [initialCode, setCode] = useState(code);

  return (
    <main>
      <div className="columns-2 m-12">
        <div className="border-black border-4 rounded-md">
          <Ide dataState={setData} initialState={initialCode} />
        </div>
        <div className="bg-black text-white p-6 rounded-md">
          <p>This is where the suggestions should go</p>
        </div>
      </div>
    </main>
  );
}
