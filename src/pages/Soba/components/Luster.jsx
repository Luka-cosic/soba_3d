

const Luster = ({ nodes }) => {
    return (
        <>
            <mesh geometry={nodes.luster001.geometry} material={nodes.luster001.material} position={[0.368, 0.729, 4]} scale={0.645} >
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh geometry={nodes.kabal.geometry} material={nodes.kabal.material} position={[0.007, 1.549, -0.051]} scale={[0.005, 0.9, 0.005]} />
        </>
    )
}

export default Luster;