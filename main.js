function App() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    let i = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(i);
  }, [seconds]);

  return <h1> -> {seconds}</h1>;
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
