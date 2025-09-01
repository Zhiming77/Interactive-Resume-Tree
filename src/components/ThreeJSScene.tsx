import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface ThreeJSSceneProps {
  activeLane: 'education' | 'work'
  towers: any[]
  onTowerClick: (towerId: string) => void
  avatarPosition: { x: number; z: number }
  isMoving: boolean
}

// Modern Anime-Style 3D Avatar Component
function AnimeAvatar({ position, isMoving }: { position: { x: number; z: number }, isMoving: boolean }) {
  const avatarRef = useRef<THREE.Group>(null!)
  const bodyRef = useRef<THREE.Mesh>(null!)
  const headRef = useRef<THREE.Mesh>(null!)
  const hairRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Gentle floating animation
    if (avatarRef.current) {
      avatarRef.current.position.y = 0.1 + Math.sin(time * 1.5) * 0.05
    }
    
    // Hair sway animation
    if (hairRef.current) {
      hairRef.current.rotation.z = Math.sin(time * 2) * 0.1
    }
    
    // Gentle glow animation
    if (glowRef.current && glowRef.current.material instanceof THREE.Material) {
      glowRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
      if ('opacity' in glowRef.current.material) {
        glowRef.current.material.opacity = 0.2 + Math.sin(time * 3) * 0.1
      }
    }
    
    // Movement animation
    if (bodyRef.current && isMoving) {
      bodyRef.current.rotation.z = Math.sin(time * 6) * 0.05
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(time * 4) * 0.1
      }
    }
  })

  return (
    <group ref={avatarRef} position={[position.x, 0, position.z]}>
      {/* Anime Character Body */}
      <mesh ref={bodyRef} castShadow>
        <capsuleGeometry args={[0.25, 0.7]} />
        <meshStandardMaterial 
          color="#4a90e2"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      
      {/* Anime Character Head */}
      <mesh ref={headRef} position={[0, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial 
          color="#ffdbac"
          roughness={0.2}
          metalness={0.0}
        />
      </mesh>
      
      {/* Anime Hair */}
      <mesh ref={hairRef} position={[0, 0.95, 0]} castShadow>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      
      {/* Anime Eyes */}
      <mesh position={[-0.08, 0.85, 0.18]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0.08, 0.85, 0.18]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      {/* Anime Arms */}
      <mesh position={[-0.35, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.4]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.35, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.4]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      
      {/* Anime Legs */}
      <mesh position={[-0.12, -0.4, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.5]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.12, -0.4, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.5]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      
      {/* Soft Magical Aura */}
      <mesh ref={glowRef} position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial 
          color="#87CEEB"
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Movement Sparkles */}
      {isMoving && (
        <group>
          {Array.from({ length: 6 }, (_, i) => (
            <mesh key={i} position={[
              (Math.random() - 0.5) * 1.5,
              Math.random() * 1.5,
              (Math.random() - 0.5) * 1.5
            ]}>
              <sphereGeometry args={[0.02]} />
              <meshBasicMaterial 
                color="#FFD700"
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
      )}
    </group>
  )
}

// Anime-Style Floating Cloud Platform Component
function AnimeCloudPlatform({ position, height, color, towerId, onTowerClick }: any) {
  const cloudRef = useRef<THREE.Group>(null!)
  const platformRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)
  const particlesRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Gentle floating animation for cloud
    if (cloudRef.current) {
      cloudRef.current.position.y = position[1] + Math.sin(time * 1.5 + position[0]) * 0.2
    }
    
    // Soft glow animation
    if (glowRef.current && glowRef.current.material instanceof THREE.Material) {
      glowRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
      if ('opacity' in glowRef.current.material) {
        glowRef.current.material.opacity = 0.2 + Math.sin(time * 3) * 0.1
      }
    }
    
    // Floating particles animation
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(time * 2 + i) * 0.3
        child.rotation.y = time * 0.5 + i
      })
    }
  })

  return (
    <group ref={cloudRef} position={position} onClick={() => onTowerClick(towerId)}>
      {/* Fluffy Cloud Base */}
      <mesh position={[0, height + 0.5, 0]} castShadow>
        <sphereGeometry args={[1.2, 12, 8]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.8}
          metalness={0.0}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Additional Cloud Puffs */}
      <mesh position={[-0.8, height + 0.3, 0.3]} castShadow>
        <sphereGeometry args={[0.8, 10, 6]} />
        <meshStandardMaterial 
          color="#f0f8ff"
          roughness={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[0.8, height + 0.3, -0.3]} castShadow>
        <sphereGeometry args={[0.7, 10, 6]} />
        <meshStandardMaterial 
          color="#f0f8ff"
          roughness={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Solid Platform on Cloud */}
      <mesh ref={platformRef} position={[0, height + 0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial 
          color="#8FBC8F"
          roughness={0.6}
          metalness={0.0}
        />
      </mesh>
      
      {/* Magical Crystals */}
      {Array.from({ length: 4 }, (_, i) => (
        <mesh key={`crystal-${i}`} position={[
          Math.cos(i * Math.PI / 2) * 0.6,
          height + 0.8,
          Math.sin(i * Math.PI / 2) * 0.6
        ]} castShadow>
          <coneGeometry args={[0.1, 0.4, 6]} />
          <meshStandardMaterial 
            color={color}
            transparent
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Holographic Beacon */}
      <mesh position={[0, height + 1.0, 0]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Animated Energy Field */}
      <mesh ref={glowRef} position={[0, height + 1.0, 0]}>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshBasicMaterial 
          color={color}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  )
}

// Anime-Style Forest Path Component
function AnimeForestPath() {
  const pathRef = useRef<THREE.Group>(null!)
  const grassRef = useRef<THREE.Group>(null!)
  const flowersRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Gentle grass swaying
    if (grassRef.current) {
      grassRef.current.children.forEach((child: any, i: number) => {
        child.rotation.z = Math.sin(time * 2 + i * 0.5) * 0.1
      })
    }
    
    // Floating flower petals
    if (flowersRef.current) {
      flowersRef.current.children.forEach((child: any, i: number) => {
        child.position.y = Math.sin(time * 1.5 + i) * 0.1
        child.rotation.y = time * 0.3 + i
      })
    }
  })

  return (
    <group ref={pathRef}>
      {/* Forest Ground Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[30, 15]} />
        <meshStandardMaterial 
          color="#2d5016"
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>
      
      {/* Main Forest Path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 3]} />
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.8}
          metalness={0.0}
        />
      </mesh>
      
      {/* Path Borders with Stones */}
      <mesh position={[0, 0.02, 1.5]} castShadow>
        <boxGeometry args={[20, 0.1, 0.2]} />
        <meshStandardMaterial 
          color="#696969"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      <mesh position={[0, 0.02, -1.5]} castShadow>
        <boxGeometry args={[20, 0.1, 0.2]} />
        <meshStandardMaterial 
          color="#696969"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Animated Grass */}
      <group ref={grassRef}>
        {Array.from({ length: 50 }, (_, i) => (
          <mesh key={i} position={[
            (Math.random() - 0.5) * 25,
            0.1,
            (Math.random() - 0.5) * 12
          ]} castShadow>
            <coneGeometry args={[0.02, 0.3, 4]} />
            <meshStandardMaterial 
              color="#228B22"
              roughness={0.6}
            />
          </mesh>
        ))}
      </group>
      
      {/* Magical Flowers */}
      <group ref={flowersRef}>
        {Array.from({ length: 20 }, (_, i) => (
          <mesh key={i} position={[
            (Math.random() - 0.5) * 20,
            0.05,
            (Math.random() - 0.5) * 10
          ]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#FFB6C1" : i % 3 === 1 ? "#87CEEB" : "#DDA0DD"}
              emissive={i % 3 === 0 ? "#FFB6C1" : i % 3 === 1 ? "#87CEEB" : "#DDA0DD"}
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
      
      {/* Path Stepping Stones */}
      {Array.from({ length: 10 }, (_, i) => (
        <mesh key={`stone-${i}`} position={[i * 2 - 9, 0.02, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial 
            color="#A0A0A0"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      ))}
      
      {/* Magical Sparkles */}
      {Array.from({ length: 15 }, (_, i) => (
        <mesh key={`sparkle-${i}`} position={[
          (Math.random() - 0.5) * 20,
          Math.random() * 2 + 0.5,
          (Math.random() - 0.5) * 8
        ]}>
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial 
            color="#FFD700"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

const ThreeJSScene: React.FC<ThreeJSSceneProps> = ({ activeLane, towers, onTowerClick, avatarPosition, isMoving }) => {
  const visibleTowers = towers.filter(tower => 
    tower.id === 'nexus' || tower.id === 'boss' || tower.lane === activeLane
  )

  const laneColor = activeLane === 'education' ? '#87CEEB' : '#FFB6C1'

  return (
    <div className="w-full h-full" style={{ minHeight: '400px' }}>
      <Canvas
        shadows
        camera={{ position: [0, 8, 12], fov: 75 }}
        style={{ background: 'linear-gradient(to bottom, #87CEEB, #98FB98)' }}
      >
        {/* Natural Forest Lighting System */}
        <ambientLight intensity={0.4} color="#F0F8FF" />
        
        {/* Main Sunlight */}
        <directionalLight 
          position={[10, 15, 8]} 
          intensity={1.0}
          color="#FFF8DC"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
        />
        
        {/* Soft Forest Atmosphere */}
        <fog attach="fog" args={['#E6F3FF', 15, 40]} />
        
        {/* Magical Forest Lights */}
        <pointLight position={[-8, 4, 3]} color="#FFB6C1" intensity={1} distance={20} decay={1} />
        <pointLight position={[8, 4, 3]} color="#87CEEB" intensity={1} distance={20} decay={1} />
        <pointLight position={[0, 6, -8]} color="#DDA0DD" intensity={0.8} distance={15} decay={1} />
        
        {/* Soft Path Illumination */}
        <spotLight 
          position={[0, 6, 4]} 
          target-position={[0, 0, 0]}
          color="#FFF8DC"
          intensity={0.8}
          angle={Math.PI / 4}
          penumbra={0.8}
          castShadow
        />
        
        {/* Gentle Rim Lighting */}
        <pointLight position={[-6, 2, -6]} color="#98FB98" intensity={0.6} distance={12} />
        <pointLight position={[6, 2, -6]} color="#F0E68C" intensity={0.6} distance={12} />

        {/* Anime Forest Path */}
        <AnimeForestPath />

        {/* Anime Forest Trees */}
        {Array.from({ length: 12 }, (_, i) => (
          <group key={`tree-${i}`} position={[
            (Math.random() - 0.5) * 40 + (i % 2 === 0 ? -15 : 15),
            0,
            (Math.random() - 0.5) * 20
          ]}>
            {/* Tree Trunk */}
            <mesh castShadow>
              <cylinderGeometry args={[0.3, 0.4, 3]} />
              <meshStandardMaterial color="#8B4513" roughness={0.8} />
            </mesh>
            {/* Tree Foliage */}
            <mesh position={[0, 3.5, 0]} castShadow>
              <sphereGeometry args={[1.5, 8, 6]} />
              <meshStandardMaterial color="#228B22" roughness={0.6} />
            </mesh>
            {/* Additional Foliage Layers */}
            <mesh position={[0, 2.8, 0]} castShadow>
              <sphereGeometry args={[1.2, 8, 6]} />
              <meshStandardMaterial color="#32CD32" roughness={0.6} />
            </mesh>
          </group>
        ))}

        {/* Floating Butterflies */}
        {Array.from({ length: 8 }, (_, i) => (
          <group key={`butterfly-${i}`} position={[
            Math.sin(i * 2) * 8,
            2 + Math.sin(i * 3) * 1.5,
            Math.cos(i * 2) * 6
          ]}>
            {/* Butterfly Body */}
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.2]} />
              <meshBasicMaterial color="#4B0082" />
            </mesh>
            {/* Butterfly Wings */}
            <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
              <planeGeometry args={[0.15, 0.1]} />
              <meshBasicMaterial 
                color="#FF69B4" 
                transparent 
                opacity={0.8}
                side={2}
              />
            </mesh>
            <mesh position={[0.1, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
              <planeGeometry args={[0.15, 0.1]} />
              <meshBasicMaterial 
                color="#FF69B4" 
                transparent 
                opacity={0.8}
                side={2}
              />
            </mesh>
          </group>
        ))}

        {/* 3D Avatar */}
        <AnimeAvatar position={avatarPosition} isMoving={isMoving} />

        {/* Anime Cloud Platforms */}
        {visibleTowers.map((tower, index) => {
          const x = (index - visibleTowers.length / 2) * 4
          const height = tower.id === 'boss' ? 3 : tower.id === 'nexus' ? 1.5 : 2
          
          return (
            <AnimeCloudPlatform
              key={tower.id}
              position={[x, 0, 0]}
              height={height}
              color={laneColor}
              towerId={tower.id}
              onTowerClick={onTowerClick}
            />
          )
        })}

        {/* Enhanced Environmental Details */}
        
        {/* Realistic Cyberpunk Cityscape Background */}
        {Array.from({ length: 8 }, (_, i) => (
          <group key={`bg-building-${i}`} position={[i * 6 - 21, 0, -15]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2, 8 + Math.random() * 4, 2]} />
              <meshStandardMaterial 
                color="#1a1a2e"
                metalness={0.4}
                roughness={0.6}
                emissive="#0033cc"
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Building Windows */}
            {Array.from({ length: 12 }, (_, j) => (
              <mesh key={j} position={[1.01, j * 0.8 - 4, Math.random() * 1.8 - 0.9]}>
                <planeGeometry args={[0.3, 0.2]} />
                <meshBasicMaterial 
                  color={Math.random() > 0.6 ? "#00ffff" : "#001122"}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            ))}
          </group>
        ))}

        {/* Floating Holographic Displays with Realistic Materials */}
        {Array.from({ length: 6 }, (_, i) => (
          <group key={`holo-${i}`} position={[i * 3 - 7.5, 2.5 + Math.sin(i) * 0.5, 3 + Math.cos(i) * 2]}>
            <mesh>
              <planeGeometry args={[1.2, 0.8]} />
              <meshStandardMaterial 
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={0.4}
                transparent
                opacity={0.7}
                side={2}
              />
            </mesh>
            {/* Hologram Support */}
            <mesh position={[0, -1.5, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1]} />
              <meshStandardMaterial 
                color="#666666"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </group>
        ))}

        {/* Atmospheric Particle Effects */}
        {Array.from({ length: 20 }, (_, i) => (
          <mesh key={`particle-${i}`} position={[
            (Math.random() - 0.5) * 30,
            Math.random() * 8 + 2,
            (Math.random() - 0.5) * 20
          ]}>
            <sphereGeometry args={[0.02]} />
            <meshBasicMaterial 
              color={Math.random() > 0.5 ? "#00ffff" : "#ff00ff"}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}

        {/* Neon Support Pillars with Realistic Details */}
        {Array.from({ length: 4 }, (_, i) => (
          <group key={`pillar-${i}`} position={[i * 8 - 12, 0, -6]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.2, 4]} />
              <meshStandardMaterial 
                color="#2a2a2a"
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
            {/* Pillar Glow Rings */}
            {Array.from({ length: 3 }, (_, j) => (
              <mesh key={j} position={[0, j * 1.2 - 1.5, 0]}>
                <torusGeometry args={[0.25, 0.02]} />
                <meshBasicMaterial 
                  color="#00ffff"
                  transparent
                  opacity={0.8}
                />
              </mesh>
            ))}
          </group>
        ))}

        {/* Ground Details and Textures */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>

        {/* Atmospheric Lighting Beams */}
        {Array.from({ length: 3 }, (_, i) => (
          <mesh key={`beam-${i}`} position={[i * 8 - 8, 6, -5]} rotation={[Math.PI / 4, 0, 0]}>
            <cylinderGeometry args={[0.1, 2, 8]} />
            <meshBasicMaterial 
              color={i % 2 === 0 ? "#00ffff" : "#ff00ff"}
              transparent
              opacity={0.3}
            />
          </mesh>
        ))}

        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={6}
          maxDistance={20}
        />
      </Canvas>
    </div>
  )
}

export default ThreeJSScene
