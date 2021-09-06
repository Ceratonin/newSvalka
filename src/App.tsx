import Button from "./components/Button";

const App = () => {
  const data = {
    type: "primary",
    text: "Click me",
    disabled: false,
    func: () => console.log("привет"),
  };

  return (
    <div>
      <Button {...data} />
    </div>
  );
};

export default App;
