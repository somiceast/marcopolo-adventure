import React from "react";
import storyData from "../data/story.json";
import { checkConditions, applyEffects } from "../utils/engine";

export default function StoryNode({ nodeId, gameState, setGameState, setNodeId }) {
  const node = storyData[nodeId];

  return (
    <div className="p-4 max-w-xl mx-auto text-white">
      <p className="mb-6 text-lg">{node.text}</p>
      {node.options.map((option, i) =>
        checkConditions(option.conditions, gameState) ? (
          <button
            key={i}
            className="block w-full text-left bg-blue-700 hover:bg-blue-600 p-3 mb-2 rounded"
            onClick={() => {
              const newState = applyEffects(option.effects, gameState);
              setGameState(newState);
              setNodeId(option.next);
            }}
          >
            ➤ {option.text}
          </button>
        ) : null
      )}
    </div>
  );
}