

const Kovceg = ({nodes,materials }) => {
    return (
        <>
            <mesh geometry={nodes.treasure_chest_bottom.geometry} material={materials['treasure_chest.001']} position={[2.844, -1.92, 0.51]} rotation={[0, -1.571, 0]} />
            <mesh geometry={nodes.treasure_chest_handle_left.geometry} material={materials['treasure_chest.001']} position={[2.832, -1.877, 0.043]} rotation={[0, -1.571, 0]} />
            <mesh geometry={nodes.treasure_chest_handle_right.geometry} material={materials['treasure_chest.001']} position={[2.832, -1.877, 0.977]} rotation={[0, -1.571, 0]} />
            <mesh geometry={nodes.treasure_chest_lid.geometry} material={materials['treasure_chest.001']} position={[2.821, -1.632, 0.51]} rotation={[0, -1.571, 0]} />
            <mesh geometry={nodes.treasure_chest_lock.geometry} material={materials['treasure_chest.001']} position={[2.577, -1.796, 0.51]} rotation={[0, -1.571, 0]} />
        </>
    )
}

export default Kovceg;