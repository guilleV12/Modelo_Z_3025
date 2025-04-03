import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Cyber_samurai"; // Importa el modelo correctamente

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }} className="bg-zinc-800 rounded-2xl">
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Model position={[0, 0, 0]} scale={0.02} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ModelViewer;
