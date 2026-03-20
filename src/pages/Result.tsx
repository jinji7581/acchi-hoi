// import React, { useState, useEffect } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";

const Result: React.FC = () => {
  const navigate = useNavigate();
  const clickStart = () => { navigate("/Play") };
  const GotoSetting = () => { navigate("/Setup") };
  const GotoTitle = () => { navigate("/") };
  return (
    <div className="game-container">
      <div className="back"></div>
      <div className="result-text">結果発表</div>
      <div className="result-buttons">
        <button className="result-button" onClick={clickStart}>
          もういちど
        </button>
        <button className="result-button" onClick={GotoSetting}>
          設定へ
        </button>
        <button className="result-button" onClick={GotoTitle}>
          タイトルへ
        </button>
      </div>
    </div>
  );
};

export default Result;
