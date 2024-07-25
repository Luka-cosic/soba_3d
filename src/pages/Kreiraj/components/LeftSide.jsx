import { OrbitControls } from "@react-three/drei";
import { Canvas  } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import Floor from '../Floor';
import Kuca1 from "./Kuca1";
import Kuca2 from "./Kuca2";
import Kuca3 from "./Kuca3";
import * as THREE from "three";
const LeftSide = ({ count, bojaKrova, bojaZida, isMapRoof, isMapFrontBack }) => {


    function Lights() {
        const light = useRef();
        
        return <spotLight ref={light} args={["#fff", 8, 10, 1]} position={[-0.5, 1.5, -2]} castShadow />
    }

    return (
        <div className="leftHalf">
            <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
    linear className="canvas" shadows camera={{ position: [0, 3, -4] }} >
                <Suspense fallback={null}>
                    <ambientLight intensity={1} position={[0, 1, 0]} />
                    <Lights />

                    {
                        count === 1 && <Kuca1 bojaKrova={bojaKrova} bojaZida={bojaZida} isMapRoof={isMapRoof} isMapFrontBack={isMapFrontBack} /> ||
                        count === 2 && <Kuca2 bojaKrova={bojaKrova} bojaZida={bojaZida} isMapRoof={isMapRoof} isMapFrontBack={isMapFrontBack} /> ||
                        count === 3 && <Kuca3 bojaKrova={bojaKrova} bojaZida={bojaZida} isMapRoof={isMapRoof} isMapFrontBack={isMapFrontBack} />

                    }
                    <OrbitControls />
                    <Floor />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default LeftSide;