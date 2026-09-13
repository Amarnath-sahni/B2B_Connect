import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Grid,
  ContactShadows,
  useGLTF,
  Html,
} from "@react-three/drei";
import { Rotate3D, ZoomIn, Move3D } from "lucide-react";

/* ============================================================
   3D MODEL
============================================================ */

function ProductModel({ modelPath }) {
  const modelRef = useRef();

  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, -1, 0]}
    />
  );
}

/* ============================================================
   LOADING
============================================================ */

function ModelLoader() {
  return (
    <Html center>
      <div className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-lg">
        Loading 3D Model...
      </div>
    </Html>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function Product3DViewer({
  modelPath = "/models/product.glb",
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="border-b border-slate-100 p-6 sm:p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
            <Rotate3D
              size={22}
              className="text-indigo-600"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#102D5B]">
              3D Product View
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Rotate • Zoom • Explore
            </p>
          </div>

        </div>

      </div>


      {/* ======================================================
          3D CANVAS
      ====================================================== */}

      <div className="relative h-[450px] w-full bg-gradient-to-br from-indigo-50 via-white to-sky-50">

        <Canvas
          camera={{
            position: [0, 1, 6],
            fov: 45,
          }}
          shadows
        >

          {/* Lighting */}

          <ambientLight intensity={1.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            castShadow
          />

          <directionalLight
            position={[-5, 3, 2]}
            intensity={1}
          />


          {/* Environment */}

          <Environment preset="studio" />


          {/* Ground */}

          <Grid
            position={[0, -1, 0]}
            args={[10, 10]}
            cellSize={0.5}
            cellThickness={0.5}
            sectionSize={2}
            sectionThickness={1}
            fadeDistance={15}
            fadeStrength={1}
          />


          {/* Product */}

          <Suspense fallback={<ModelLoader />}>

            <ProductModel
              modelPath={modelPath}
            />

          </Suspense>


          {/* Shadow */}

          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={5}
            blur={2}
            far={4}
          />


          {/* ==================================================
              CONTROLS

              Left mouse  → Rotate
              Scroll      → Zoom
              Right mouse → Move
          ================================================== */}

          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            autoRotate={false}
            autoRotateSpeed={1}
          />

        </Canvas>


        {/* ====================================================
            CONTROL HINT
        ==================================================== */}

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs font-medium text-slate-600 shadow-md backdrop-blur">

          <Rotate3D size={14} />

          <span>Drag to Rotate</span>

          <span className="text-slate-300">•</span>

          <ZoomIn size={14} />

          <span>Scroll to Zoom</span>

          <span className="text-slate-300">•</span>

          <Move3D size={14} />

          <span>Right Click to Move</span>

        </div>

      </div>

    </section>
  );
}