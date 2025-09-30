import { useRef } from "react";
import './App.css';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page9a from "./pages/Page9a";
import Page9b from "./pages/Page9b";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="container"
      ref={containerRef}
      className="font-main"
    >
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page9a />
      <Page9b />
      <Page10 />
      <Page11 />
      <Page12 />
      <Page13 />
    </div>
  );
}
