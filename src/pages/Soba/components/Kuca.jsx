import { useTexture } from '@react-three/drei';

const Kuca = ({nodes, materials}) => {

    const pod = useTexture('/pod/textures/wood_floor_diff_4k.jpg');
    return (
        <group position={[0.006, 0.092, 0]} scale={[4.2, 2.5, 4.2]}>

            <mesh geometry={nodes.Cube011_1.geometry} material={materials.zid}  />
            <mesh geometry={nodes.Cube011_2.geometry} material={materials.plafon} >
                <meshBasicMaterial color="#804000" />
            </mesh>
            <mesh geometry={nodes.Cube011_3.geometry} material={materials.zid2} >

            </mesh>
            <mesh geometry={nodes.Cube011_4.geometry} >
                <meshStandardMaterial map={pod} />
            </mesh>
        </group>
    )
}

export default Kuca;