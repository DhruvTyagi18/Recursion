import {Html , Float, Environment, useGLTF, PresentationControls , ContactShadows} from "@react-three/drei";

export default function App() {

  const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

  return (
    <>
      <Environment preset="city"/>
      <color args={['#151925']} attach={"background"}/>
      <PresentationControls global rotation={[0.13,.6,0]} polar={[-0.4,0.2]} azimuth={[-1,0.75]} config={{mass:2,tension:400}} snap={{mass:4,tension:400}}>
        <Float scale={1.2} rotationIntensity={0.4} >
          {/* <rectAreaLight width={2.5} height={1.65} intensity={32} color={'#234da8'} rotation={[0.1,Math.PI,0]} position={[0,0.55,-1.15]}/> */}
          <primitive object={laptop.scene} scale={1.2} position-y={-1.2}>
            <Html position={[0,1.56,-1.4] } scale={1/1.5} rotation-x={-.256} transform wrapperClass="htmlScreen" distanceFactor={1.17}>
              <iframe src="https://dhruvtyagi18-portfolio.netlify.app/"></iframe>
              {/* <iframe src="https://alphacupcake10.github.io/Portfolio/"></iframe> */}
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows opacity={.4} scale={5} blur={2.4} position-y={-1.4}/>
    </>
  )
}