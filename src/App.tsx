import React, { useEffect, useState } from "react";
import Button from "./components/button/button";
import {
  fas,
  faComputerMouse,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import FieldIcon from "./components/fieldicon/FieldIcon";

function App(): JSX.Element {
  const icons = Object.values(fas);
  const randomIcon = () => icons[Math.floor(Math.random() * icons.length)];

  const [icon, setIcon] = useState<IconDefinition>(faComputerMouse);
  const [timerStack, setTimerStack] = useState<IconDefinition[]>([]);

  useEffect(() => {
    setIcon(randomIcon);
  }, []);

  useEffect(() => {
    timerStack.forEach((item, index) => {
      setTimeout(() => {
        setIcon(item);
        const copyArr = timerStack;
        copyArr.shift();
        setTimerStack([...copyArr]);
      }, 3000 * ++index);
    });
  }, [timerStack]);

  const changeIcon = () => {
    setTimerStack([...timerStack, randomIcon()]);
  };

  return (
    <div className="field">
      <Button changeIcon={changeIcon} />
      <FieldIcon icon={icon} />
    </div>
  );
}

export default App;
