import {
  CameraControls,
  Environment,
  Html,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import { Model } from "./components/Model";
import { Marker } from "./components/Marker";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <main className="w-screen h-screen">
      <Sidebar>
        <Canvas
          style={{
            height: "90vh",
            position: "absolute",
            top: 0,
            borderBottom: "1px solid black",
          }}
          shadows="basic"
          eventSource={document.getElementById("root")!}
          eventPrefix="client"
        >
          <ambientLight intensity={Math.PI / 2} />
          {/* <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      /> */}
          {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
          <Model />
          <Marker />
          <CameraControls />
        </Canvas>
      </Sidebar>
    </main>
  );
}

export default App;