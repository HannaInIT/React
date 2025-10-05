import useWindowSize from "./hooks/useWindowSize";
import { BigHead } from "@bigheads/core";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Use the hook 3 times with different labels (it is for debugging)
  const mainScreen = useWindowSize("Main screen");
  // const avatarScreen = useWindowSize("Avatar display");
  // const debugScreen = useWindowSize("Debug info");

  // Avatar properties, that change randomly
  const [avatarProps, setAvatarProps] = useState({
    hat: "none",
    hatColor: "red",
    accessory: "none",
    clothing: "shirt",
    clothingColor: "blue",
    graphic: "none",
  });

  // Random property generators
  const getRandomHat = () =>
    ["none", "beanie", "turban"].at(Math.floor(Math.random() * 3));
  const getRandomColor = () =>
    ["red", "blue", "green", "yellow", "purple"].at(
      Math.floor(Math.random() * 5)
    );

  const getRandomAccessory = () =>
    ["none", "glasses", "sunglasses"].at(Math.floor(Math.random() * 3));
  const getRandomClothing = () =>
    ["shirt", "dress", "vneck"].at(Math.floor(Math.random() * 3));
  const getRandomGraphic = () =>
    ["none", "redwoodPark", "gatsby"].at(Math.floor(Math.random() * 3));

  // Update avatar properties when screen size changes
  useEffect(() => {
    setAvatarProps({
      hat: getRandomHat(),
      hatColor: getRandomColor(),
      accessory: getRandomAccessory(),
      clothing: getRandomClothing(),
      clothingColor: getRandomColor(),
      graphic: getRandomGraphic(),
    });
  }, [mainScreen.width, mainScreen.height]);

  // Avatar configurations
  const avatars = {
    big: {
      name: "Mithi",
      skinTone: "light",
      eyes: "happy",
      eyebrows: "raised",
      mouth: "smile",
      hair: "long",
      hairColor: "brown",
    },
    medium: {
      name: "Diana",
      skinTone: "medium",
      eyes: "wink",
      eyebrows: "serious",
      mouth: "open",
      hair: "short",
      hairColor: "black",
    },
    small: {
      name: "Mikong",
      skinTone: "dark",
      eyes: "simple",
      eyebrows: "angry",
      mouth: "serious",
      hair: "buzz",
      hairColor: "blonde",
    },
  };

  const currentAvatar = avatars[mainScreen.screenType];

  return (
    <div className="App">
      <h1>Screen size avatar</h1>

      <div className="screen-info">
        <p>
          Screen: {mainScreen.width} x {mainScreen.height}
        </p>
        <p>Type: {mainScreen.screenType} screen</p>
        <p>Showing: {currentAvatar.name}</p>
      </div>

      <div className="avatar-container">
        <BigHead {...currentAvatar} {...avatarProps} />
      </div>

      <div className="debug-info">
        <h3>Current avatar properties</h3>
        <ul>
          <li>Hat: {avatarProps.hat}</li>
          <li>Hat color: {avatarProps.hatColor}</li>
          <li>Accessory: {avatarProps.accessory}</li>
          <li>Clothing: {avatarProps.clothing}</li>
          <li>Clothing color: {avatarProps.clothingColor}</li>
          <li>Graphic: {avatarProps.graphic}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
