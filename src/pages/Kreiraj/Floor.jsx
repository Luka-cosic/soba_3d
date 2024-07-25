export default function Floor() {
    return (
      <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]} receiveShadow >
        <circleGeometry args={[2]} />
        <meshStandardMaterial />
      </mesh>
    )
  }