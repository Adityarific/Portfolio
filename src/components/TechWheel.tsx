
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import "./TechWheel.css";

const technologies = [
  "PYTHON",
  "PYTORCH",
  "LANGGRAPH",
  "LANGCHAIN",
  "RAG",
  "VECTOR DB",
  "LLMS",
  "REACT",
  "TYPESCRIPT",
  "FLASK",
  "SQL",
  "VULKAN",
];

function TechRing() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.15,
      0.04
    );
  });

  const radius = 2.25;

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 12, 120]} />
        <meshBasicMaterial color="#444444" />
      </mesh>

      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;

        return (
          <group
            key={tech}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              0,
            ]}
          >
            <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.08}>
              <mesh>
                <sphereGeometry args={[0.045, 16, 16]} />
                <meshBasicMaterial color="#d7c8ff" />
              </mesh>

              <Html
                center
                distanceFactor={8}
                style={{ pointerEvents: "none" }}
              >
                <span className="tech-wheel-label">{tech}</span>
              </Html>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

export default function TechWheel() {
  return (
    <section className="tech-wheel-section" id="stack">
      <div className="tech-wheel-heading">
        <span>02 / TECHNOLOGY</span>
        <span>TOOLS THAT BUILD IDEAS</span>
      </div>

      <div className="tech-wheel-copy">
        <h2>
          THE TOOLS
          <br />
          <span>BEHIND THE THINKING.</span>
        </h2>
      </div>

      <div className="tech-wheel-canvas">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.5} />
          <TechRing />
          
        </Canvas>
      </div>

      <p className="tech-wheel-note">
        AI ENGINEERING / GENERATIVE AI / SOFTWARE
      </p>
    </section>
  );
}
