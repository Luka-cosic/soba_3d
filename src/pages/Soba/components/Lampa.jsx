

const Lampa = ({nodes}) => {
    return (
        <>
            <mesh geometry={nodes.BezierCurve.geometry} material={nodes.BezierCurve.material} position={[2.825, -0.829, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.625} >
                <meshStandardMaterial color="#a6a6a6" />
            </mesh>
            <mesh geometry={nodes.BezierCurve001.geometry} material={nodes.BezierCurve001.material} position={[2.825, -0.829, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.625} >
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    )
}

export default Lampa;