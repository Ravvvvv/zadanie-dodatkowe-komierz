import "./ButtonsPanel.css";
const ButtonsPanel = (props) => {
  return (
    <div className="buttons-panel">
      <button onClick={() => props.buttonMethod("dodaj")}>
        Dodaj {props.stepValue}
      </button>
      {/* rodzica  do dziecka parament funkcji ktora zostal przekazana */}
      <button onClick={() => props.buttonMethod("reset")}>Reset</button>
      <button onClick={() => props.buttonMethod("zero")}>Zero</button>
    </div>
  );
};

export default ButtonsPanel;
