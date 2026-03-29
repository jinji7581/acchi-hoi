import { useState, useEffect } from "react";
import { usePrevious } from "../hooks/usePrevious";
import "./AchievementPopup.css";
import { useGameStore } from "../../../zustand";
import Cookies from "js-cookie";

interface AchievementPopupProps {
  Clear: boolean;
  title: string;
}

export function AchievementPopup({ Clear, title }: AchievementPopupProps) {
  const [showPopup, setShowPopup] = useState(false);
  const prevClear = usePrevious(Clear);
  const isClear = useGameStore((state) => state.isClear);

  useEffect(() => {
    if (prevClear === undefined) return;
    if (!prevClear && Clear) {
      const tfString = isClear.map((v) => (v ? "t" : "f")).join("");
      Cookies.set("achievements", tfString);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  }, [Clear, prevClear]);

  return (
    <div
      className={`achievement-popup ${showPopup ? "achievement-popup-show" : ""}`}
    >
      実績解除！「{title}」
    </div>
  );
}
