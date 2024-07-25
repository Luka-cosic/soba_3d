
const Prozori = ({nodes,materials })=>{
    return(
        <>
        <mesh geometry={nodes.podOkvir.geometry} material={materials.okvir} position={[-4.062, -0.142, 0.663]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.286, 1, 1.492]} />
        <mesh geometry={nodes.okvir001.geometry} material={materials.prozori} position={[-1.242, -0.379, 4]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[1.928, 0.674, 2.608]} />
        </>
    )
}

export default Prozori;