import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/ext-language_tools";
export default function Ide({ dataState, initialState }) {
  const markers = [
    {
      startRow: 1,
      startCol: 0,
      endRow: 4,
      endCol: Number.MAX_SAFE_INTEGER, // Set endCol to a very large value to span entire row
      className: "bg-yellow-200", // Using Tailwind CSS classes
      type: "background",
    },
  ];
  return (
    <div>
      <AceEditor
        mode="python"
        placeholder="Write Code!"
        onChange={dataState}
        markers={markers}
        width="100%"
        value={initialState}
        fontSize={24}
      ></AceEditor>
    </div>
  );
}
