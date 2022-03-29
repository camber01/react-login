import "./styles.css";

const Label = (props) => {
  return (
    <div className="form-label">
      <label>{props.header}</label>
      <input className="input-style" type={props.type} />
    </div>
  );
};

const Button = () => {
  return (
    <div className="form-label">
      <button className="btn-submit" type="submit">
        Submit
      </button>
    </div>
  );
};

const Form = () => {
  return (
    <form className="form-container">
      <Label header="Username" type="text" />
      <Label header="Password" type="password" />
      <Button />
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
