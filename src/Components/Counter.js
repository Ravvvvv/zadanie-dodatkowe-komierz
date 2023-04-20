import { useState } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";
// const counter = () => {

// }

const Counter = (props) => {
  console.log(props);
  // wywoluje koncole zeby sprawdzic czy props jest przekazanyi czy funkcja dziala
  // useStea pozwal zarzadzac stanem komponentu

  const [counter, setCounter] = useState(props.stala); // stan('string', liczba ,wartosc true logiczna ,tablica[], obiekt {} )
  console.log(setCounter);
  // set funkcja aktualizujaca
  const [stepValue, setStepValue] = useState(1);
  console.log(setStepValue);
  //stan w ktorym bede przechowywal wartosc kroku

  //funkcja ktora odpowiada za zamiane kroku.
  const stepChange = (wartosc) => {
    console.log(wartosc.target.value);
    setStepValue(+wartosc.target.value);
    //czemu plus tutaj?
    //target lokalizuje konkretna wartosc zmiany
  };
  const updateCounter = (akcja) => {
    // () <=parament w funkcji zwrotnej
    console.log(akcja);
    if (akcja === "dodaj") {
      setCounter(counter + stepValue);
    } else if (akcja === "reset") {
      setCounter(props.stala);
    } else {
      setCounter(0);
    }

    // wazne zeby nazwy bylo zgodne pod przyciskiem i w nazweach

    console.log("testuje funkcje update Counter");
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      {/* stala jest z app gdzie stala to jest 8  czytaj jest obiektem */}
      <ButtonsPanel buttonMethod={updateCounter} stepValue={stepValue} />
      {/* funkcja updateCounter tutaj robi za propsa  ktory jest przekazany do butona */}
      <Step stepChange={stepChange} />
    </div>
  );
};

export default Counter;
