/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />

      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.65 : 0.75} 
        position={isMobile ? [0, -3,-2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  // track screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
  //  initialize the state
    setIsMobile(mediaQuery.matches);
  
    // Add a listener function that will update the state
    const handleMeidaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }
    // Register the listener function as a handler for the query
    mediaQuery.addEventListener("change", handleMeidaQueryChange);

    // Remove the listener function from the query
    return()=>{
      mediaQuery.removeEventListener("change", handleMeidaQueryChange)
    }
    
  }, []);


  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile ={isMobile }  />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
