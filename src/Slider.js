import "./App.css";
import Treehouse1 from "./TreehouseImages/Treehouse1.jpg";
import Treehouse2 from "./TreehouseImages/Treehouse2.jpg";
import Treehouse3 from "./TreehouseImages/Treehouse3.jpg";
import Treehouse4 from "./TreehouseImages/Treehouse4.jpg";
import Treehouse5 from "./TreehouseImages/Treehouse5.jpg";
import Treehouse6 from "./TreehouseImages/Treehouse6.jpg";

function Slider() {
  return (
    <div className="App">
      <div className="slides">
        <div>
          <img src={Treehouse1} alt="Treehouse1" />
        </div>

        <div>
          <img src={Treehouse2} alt="Treehouse2" />
        </div>

        <div>
          <img src={Treehouse3} alt="Treehouse3" />
        </div>

        <div>
          <img src={Treehouse4} alt="Treehouse4" />
        </div>

        <div>
          <img src={Treehouse5} alt="Treehouse5" />
        </div>

        <div>
          <img src={Treehouse6} alt="Treehouse6" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
