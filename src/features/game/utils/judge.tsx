import React, { useEffect } from "react";
import { useGameStore } from "../../../zustand";
export const Judge: React.FC = () => {
  type Direction = "up" | "down" | "left" | "right" | "center" | null;

  const currentDirections: Direction[] = useGameStore(
    //ストアから値を取得
    (state) => state.currentDirections,
  );
  const playerDirections: Direction[] = useGameStore(
    (state) => state.playerDirections,
  );
  const playerCount: number = useGameStore((state) => state.playerCount);
  const isPointSystem: boolean = useGameStore((state) => state.isPointSystem);
  const increaseScore = useGameStore((state) => state.increaseScore);
  const decleaseLife = useGameStore((state) => state.decreaseLife);
  const scores: number[] = useGameStore((state) => state.scores);
  useEffect(() => {
    let counter: number = 0;
    for (let i = 0; i < playerCount; i++) {
      for (const element2 of currentDirections) {
        if (playerDirections[i] === element2) break;
        counter = counter + 1;
      }
      if (counter === currentDirections.length) {
        increaseScore(i);
      } else {
        if (!isPointSystem) {
          decleaseLife(i);
        }
      }
    }
    console.log(scores);
  }, []);

  return (
    <ul
      style={{
        display: "flex", // 横並びにする
        listStyle: "none", // 点（・）を消す
        gap: "15px", // 要素間の隙間を作る
        padding: 0, // デフォルトの余白を消す
      }}
    >
      {scores.slice(0, playerCount).map((item: number, index: number) => (
        <li
          key={index}
          style={{
            padding: "5px 10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
          }}
        >
          {index + 1}p: {item}
        </li>
      ))}
    </ul>
  );
};
export default Judge;
