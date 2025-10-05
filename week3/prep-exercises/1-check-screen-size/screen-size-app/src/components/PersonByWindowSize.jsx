import React, { useState, useEffect } from "react";
import { useWithinWindowWidth } from "../hooks/useWindowSize.jsx";
import Avatar from "./Avatar.jsx";

const AVATARS = {
  big: "Mithi",
  medium: "Diana",
  small: "Mikong",
};

const COLORS = ["red", "green", "blue", "orange", "purple", "yellow"];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default function PersonByWindowSize() {
  const isBig = useWithinWindowWidth(1000, Infinity);
  const isMedium = useWithinWindowWidth(700, 999);
  const isSmall = useWithinWindowWidth(0, 699);

  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setColor(getRandomColor());
  }, [isBig, isMedium, isSmall]);

  let name = "";
  if (isBig) name = AVATARS.big;
  else if (isMedium) name = AVATARS.medium;
  else if (isSmall) name = AVATARS.small;

  return <Avatar name={name} color={color} />;
}
