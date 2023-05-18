import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import Axes from './Axes';
import Grid from './Grid';

const App = () => {
    return (
        <Canvas>
            <OrthographicCamera makeDefault position={[0, 0, 2000]} />
            <ambientLight />
            <pointLight position={[0, 0, 10]} />

            <Axes />
            <Grid size={2000} divisions={200} color="lightgray" />

            {/* Другие компоненты и элементы интерфейса приложения */}
        </Canvas>
    );
};

export default App;
