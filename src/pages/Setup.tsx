import React, { useRef } from "react";
import "./Pages.css";
// import { useNavigate } from "react-router-dom";
import { useGameStore } from "../zustand";
import { useNavigate } from "react-router-dom";
import left_arrow from "../assets/left_arrow.png";
import right_arrow from "../assets/right_arrow.png";
import left_C from "../assets/left_C.png";
import right_C from "../assets/right_C.png";
import Abutton from "../assets/buttonA.mp3";
import Bbutton from "../assets/buttonD.mp3";

const Setup: React.FC = () => {
  // グローバル変数
  const playerCount = useGameStore((state) => state.playerCount);
  const increasePlayerCount = useGameStore(
    (state) => state.increasePlayerCount,
  );
  const decreasePlayerCount = useGameStore(
    (state) => state.decreasePlayerCount,
  );
  const showingCharacter = useGameStore((state) => state.showingCharacter);
  const setShowingCharacter = useGameStore(
    (state) => state.setShowingCharacter,
  );
  const isPointSystem = useGameStore((state) => state.isPointSystem);
  const setIsPointSystem = useGameStore((state) => state.setIsPointSystem);
  const setRound = useGameStore((state) => state.setRound);

  // 画面遷移処理

  const navigate = useNavigate();
  const clickBack = () => {
    playSoundA();
    navigate("/");
  };
  const clickStart = () => {
    playSoundB();
    setRound(1);
    navigate(showingCharacter ? "/SetChara" : "/Play");
  };

  // 変数の変動処理
  const decreaseNumber = () => {
    playSoundA();
    if (playerCount > 1) {
      decreasePlayerCount();
    }
  };
  const increaseNumber = () => {
    playSoundA();
    if (playerCount < 4) {
      increasePlayerCount();
    }
  };
  const modeTrue = () => {
    playSoundA();
    setShowingCharacter(true);
  };
  const modeFalse = () => {
    playSoundA();
    setShowingCharacter(false);
  };
  const pointTrue = () => {
    playSoundA();
    setIsPointSystem(true);
  };
  const pointFalse = () => {
    playSoundA();
    setIsPointSystem(false);
  };

  const audioRefA = useRef<HTMLAudioElement | null>(null);
  const playSoundA = () => {
    if (!audioRefA.current) {
      audioRefA.current = new Audio(Abutton);
    }
    audioRefA.current.currentTime = 0;
    audioRefA.current.play();
  };
  const audioRefB = useRef<HTMLAudioElement | null>(null);
  const playSoundB = () => {
    if (!audioRefB.current) {
      audioRefB.current = new Audio(Bbutton);
    }
    audioRefB.current.currentTime = 0;
    audioRefB.current.play();
  };

  return (
    <div className="game-container">
      <div className="back"></div>
      <div className="setup1">
        <div>参加人数　　</div>
        <img src={left_arrow} onClick={decreaseNumber} className="triangle" />
        <div className="setup-text">{playerCount}</div>
        <img src={right_arrow} onClick={increaseNumber} className="triangle" />
      </div>
      <div className="setup2">
        <div>表示モード　</div>
        <img src={left_arrow} onClick={modeTrue} className="triangle" />
        <div className="setup-text">{showingCharacter ? "キャラ" : "映像"}</div>
        <img src={right_arrow} onClick={modeFalse} className="triangle" />
      </div>
      <div className="setup3">
        <div>ゲームモード</div>
        <img src={left_arrow} onClick={pointTrue} className="triangle" />
        <div className="setup-text">
          {isPointSystem ? "ポイント制" : "残機制"}
        </div>
        <img src={right_arrow} onClick={pointFalse} className="triangle" />
      </div>
      <button className="back-button" onClick={clickBack}>
        戻る
      </button>
      <button className="setup-start-button" onClick={clickStart}>
        GameStart!
      </button>
    </div>
  );
};

export default Setup;
