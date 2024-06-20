import './App.css';
import {Canvas} from '@react-three/fiber'
import {Html, ScrollControls} from "@react-three/drei";
import {SheetProvider} from "@theatre/r3f";
import {getProject} from "@theatre/core";
import animation from './assets/animations/animation-turn-and-parallax.json';

import Scene from "./components/3D/Scene";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Solutions from "./components/Solutions/Solutions";
import Community from "./components/Community/Community";
import Contact from "./components/Contact/Contact";

const sheet = getProject('Streamiverse', {state: animation}).sheet('Scene');
const animationPages = 6;
function App() {
  return (
    <div className={'app background-primary'}>
      <Canvas gl={{preserveDrawingBuffer: true}}>
          <ScrollControls pages={animationPages}>
              <SheetProvider sheet={sheet}>
                  <Scene/>
              </SheetProvider>
              <Html className={'canvas-html'}>
                  <div>
                      <div className={'sticky blur'}>
                          <Header/>
                      </div>
                      <div className={'background-primary'}
                           style={{marginTop: (animationPages*100) + 'vh'}}
                      >
                          <Features/>
                          <Solutions/>
                          <Community/>
                          <Contact/>
                      </div>
                  </div>
              </Html>
          </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
