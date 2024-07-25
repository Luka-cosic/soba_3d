
import { useTexture } from '@react-three/drei';
const Kucica = ({nodes,materials })=>{

    const platno = useTexture('/images/bakeKrov2.jpg');
    return(
        <mesh geometry={nodes.zidovi.geometry} material={materials['Dark Iron']} position={[-3.101, -1.955, 1.194]} rotation={[0, 0.659, 0]} scale={1.191}>

          <mesh geometry={nodes.grede.geometry} material={materials['Material.002']} position={[0.001, -0.155, 0.212]} scale={[0.352, 0.008, 0.008]} />
          <mesh geometry={nodes.nogice.geometry} material={materials['Material.001']} position={[-0.003, -0.229, -0.007]} rotation={[0.069, -0.664, -3.098]} />
          <mesh geometry={nodes.platno.geometry} material={materials['Laces 02']} position={[0, -0.159, 0.222]} scale={[0.324, 0.0016, 0.0016]} >
            <meshBasicMaterial map={platno} />
          </mesh>
        </mesh>
    )
}

export default Kucica;