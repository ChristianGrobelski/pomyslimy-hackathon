// src/components/ThreeScene.tsx
import React, { Suspense} from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import { Html } from "@react-three/drei"
const STLModel = ({ modelUrl }) => {
    const stl = useLoader(STLLoader, modelUrl);
    return <primitive object={stl} />;
};

const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ width: '100%', height: '100vh' }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<Html><span>Loading...</span></Html>}>
        <STLModel modelUrl="./assets/duck.stl" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
