import React, { useEffect } from "react";
import AceEditor from "react-ace";
import { useState } from "react";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/ext-language_tools";
export default function Ide() {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(`
    s = ''.join(char.lower() for char in s if char.isalnum())
    return s == s[::-1]

test_string = "A man, a plan, a canal, Panama!"
print(is_palindrome(test_string))`);
  }, []);

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const marker = [
    {
      startRow: 0,
      endRow: 1,
      className: "bg-yellow-200 absolute",
      type: "background",
    },
  ];

  return (
    <div>
      <AceEditor
        mode="python"
        placeholder="Write Code!"
        onChange={handleChange}
        width="100%"
        value={code}
        markers={marker}
        fontSize={24}
      ></AceEditor>
    </div>
  );
}
