"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Platter() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    // Slow idle rotation
    group.current.rotation.y = t * 0.12;
    // Mouse parallax (soft)
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.55 + pointer.y * 0.06,
      0.04
    );
    group.current.position.y = Math.sin(t * 0.8) * 0.04 - 0.1;
  });

  return (
    <group ref={group} rotation={[-0.55, 0, 0]}>
      {/* Copper tray base */}
      <mesh castShadow receiveShadow position={[0, -0.08, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.08, 64]} />
        <meshStandardMaterial
          color="#8a4626"
          metalness={0.85}
          roughness={0.28}
          emissive="#4a1d0e"
          emissiveIntensity={0.12}
        />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.03, 0]}>
        <cylinderGeometry args={[2.15, 2.15, 0.02, 64]} />
        <meshStandardMaterial color="#b0603a" metalness={0.9} roughness={0.22} />
      </mesh>

      {/* Hummus bowl */}
      <Bowl position={[-0.95, 0.02, 0.4]} color="#eadfc2" accent="#c7b88b" size={0.55} />
      {/* Moutabal bowl */}
      <Bowl position={[0.9, 0.02, 0.55]} color="#e8dfcb" accent="#a18866" size={0.5} />
      {/* Tabbouleh bowl */}
      <Bowl position={[0.2, 0.02, -0.7]} color="#7a8e41" accent="#5b6a30" size={0.45} />

      {/* Pita stack */}
      <group position={[-0.9, 0.05, -0.6]}>
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            castShadow
            receiveShadow
            position={[i * 0.03, 0.04 + i * 0.04, i * 0.02]}
            rotation={[0, i * 0.35, 0]}
          >
            <cylinderGeometry args={[0.42, 0.45, 0.06, 32]} />
            <meshStandardMaterial color={i === 2 ? "#d9b485" : "#c99a6a"} roughness={0.85} />
          </mesh>
        ))}
      </group>

      {/* Olives scattered */}
      {olivePositions.map((p, i) => (
        <mesh key={i} castShadow position={p as [number, number, number]}>
          <sphereGeometry args={[0.07, 20, 20]} />
          <meshStandardMaterial color={i % 2 ? "#2e2516" : "#1a1a1a"} roughness={0.3} metalness={0.2} />
        </mesh>
      ))}

      {/* Parsley sprigs (little green clumps) */}
      {parsleyPositions.map((p, i) => (
        <group key={i} position={p as [number, number, number]}>
          {[0, 1, 2].map((j) => (
            <mesh key={j} position={[j * 0.06 - 0.06, j * 0.02, 0]}>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial color="#4a6a28" roughness={0.8} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Lemon wedges */}
      <mesh castShadow position={[1.35, 0.08, -0.2]} rotation={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.08, 24, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#e8c547" roughness={0.6} />
      </mesh>
      <mesh castShadow position={[-0.4, 0.08, 1.1]} rotation={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.08, 24, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#e8c547" roughness={0.6} />
      </mesh>

      {/* Pomegranate seeds cluster (tabbouleh side) */}
      {pomegranateSeeds.map((p, i) => (
        <mesh key={i} castShadow position={p as [number, number, number]}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshStandardMaterial
            color="#a01f2b"
            roughness={0.2}
            metalness={0.15}
            emissive="#5c0b14"
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function Bowl({
  position,
  color,
  accent,
  size = 0.5,
}: {
  position: [number, number, number];
  color: string;
  accent: string;
  size?: number;
}) {
  return (
    <group position={position}>
      {/* Bowl exterior */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[size, size * 0.75, size * 0.38, 40]} />
        <meshStandardMaterial color="#ece1c6" roughness={0.4} />
      </mesh>
      {/* Bowl rim */}
      <mesh position={[0, size * 0.2, 0]} castShadow>
        <torusGeometry args={[size * 0.96, size * 0.04, 16, 40]} />
        <meshStandardMaterial color="#d3c49e" roughness={0.45} />
      </mesh>
      {/* Content (hummus/moutabal/tabbouleh) */}
      <mesh position={[0, size * 0.18, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[size * 0.92, size * 0.7, size * 0.05, 40]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      {/* Swirl indent */}
      <mesh position={[0, size * 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[size * 0.4, size * 0.03, 10, 40]} />
        <meshStandardMaterial color={accent} roughness={0.5} />
      </mesh>
      {/* Olive oil droplet on top */}
      <mesh position={[0, size * 0.24, 0]}>
        <sphereGeometry args={[size * 0.12, 16, 16]} />
        <meshStandardMaterial
          color="#b8863a"
          roughness={0.15}
          metalness={0.35}
          emissive="#6b4e14"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

const olivePositions: [number, number, number][] = [
  [1.55, 0.02, 0.1],
  [1.6, 0.02, -0.4],
  [-1.55, 0.02, -0.2],
  [-1.5, 0.02, 0.9],
  [0.55, 0.02, 1.5],
  [-0.1, 0.02, 1.45],
  [0.1, 0.02, -1.55],
];

const parsleyPositions: [number, number, number][] = [
  [-0.55, 0.18, 0.45],
  [1.15, 0.18, 0.65],
];

const pomegranateSeeds: [number, number, number][] = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const r = 0.28 + (i % 3) * 0.04;
  return [0.2 + Math.cos(angle) * r, 0.22, -0.7 + Math.sin(angle) * r];
});

export default function MezzeScene() {
  const lights = useMemo(
    () => ({
      key: new THREE.Color("#ffe1b8"),
      rim: new THREE.Color("#e26b39"),
      fill: new THREE.Color("#b18a5c"),
    }),
    []
  );

  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ antialias: true, preserveDrawingBuffer: false, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["transparent" as unknown as string]} />
      <PerspectiveCamera makeDefault position={[0, 2.2, 4.6]} fov={38} />

      <ambientLight intensity={0.35} color={lights.fill} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={2.2}
        color={lights.key}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      <directionalLight position={[-3, 3, -2]} intensity={1.2} color={lights.rim} />
      <pointLight position={[0, 4, 0]} intensity={0.6} color="#ffc98a" />

      <Suspense fallback={null}>
        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.25}>
          <Platter />
        </Float>
        <ContactShadows
          position={[0, -0.2, 0]}
          opacity={0.55}
          scale={8}
          blur={2.6}
          far={4}
          color="#2a1f18"
        />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
