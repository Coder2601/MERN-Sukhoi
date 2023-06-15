import ABC,{Rooster} from "./components/classBasedComps/Lifecycle";
import FeedbackForm from "./components/functionbasdComps/FormHandling/FeedbackForm";
import Multiplier from "./components/functionbasdComps/props/Multiplier";
import Counter from "./components/functionbasdComps/useStateHook/Counter";


function App() {
  return (
    <div>
      {/* <ABC />
      <Rooster/> */}
      {/* <Counter /> */}
      {/* <FeedbackForm /> */}
      <Multiplier/>
    </div>
  );
}

export default App;