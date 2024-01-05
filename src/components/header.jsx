import './header.css';
import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Core", "Crucial"];

function genRandomInt(max) {
    return Math.floor(Math.random() * max); // math.random() => 0 - 1 // 0.25 * 3 = 0.75 => 0 // 0.5 * 3 = 1.5 => 1 // 0.99 * 2.97 => 2
  }
export default function Header() {
  const max = [reactDescriptions.length]; 
    const description = reactDescriptions[genRandomInt(max)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}
