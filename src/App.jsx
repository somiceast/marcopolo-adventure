import React, { useState } from "react";
import StoryNode from "./components/StoryNode";

function App() {
  const [nodeId, setNodeId] = useState("venice_start");
  const [gameState, setGameState] = useState({});

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-center text-3xl font-bold pt-6">马可波罗冒险记</h1>
      <StoryNode
        nodeId={nodeId}
        gameState={gameState}
        setGameState={setGameState}
        setNodeId={setNodeId}
      />
    </div>
  );
}

export default App;