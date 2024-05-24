// src/components/ThreeScene.tsx
import React, { Suspense,  useRef, useEffect} from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import duck from './duck.stl';



export const Model = ({url}) => {
    const geom = useLoader(STLLoader, url);

    const ref = useRef();
    const {camera} = useThree();
    useEffect(() => {
        camera.lookAt(ref.current.position);
    });

    return (
        <>
            <mesh ref={ref}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={"orange"}/>
            </mesh>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
        </>
    );
};

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 10, 100] }}>
    <Suspense fallback={null}>
         <Model url={duck} />
    </Suspense>
    <OrbitControls />
</Canvas>
  );
};

export default ThreeScene;
