import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from './components/Buttonbox'
import Button from './components/Button'
import CalcProvider from "./context/CalcContext";

const btnValues = [
  ["(", ")", "mc", "m+", "m-", "mr", "C", "+/-", "%", "÷"],
  ["2nd", "x²", "x³", "xʸ", "eˣ", "10ˣ", 7, 8, 9, "x"],
  ["¹/ₓ", "²√ₓ", "³√ₓ", "ʸ√ₓ", "ln", "log₁₀", 4, 5, 6, "-"],
  ["x!", "sin", "cos", "tan", "e", "EE", 1, 2, 3, "+"],
  ["Rad", "sinh", "cosh", "tanh", "π", "Rand", 0, ".", "="],
];
function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App
