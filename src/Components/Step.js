const Step = (props) => {
  return (
    <form>
      <input
        type="number"
        onChange={(event) => {
          props.stepChange(event);
        }}
      />
      <p className="step">Step</p>
    </form>
  );
};

export default Step;
