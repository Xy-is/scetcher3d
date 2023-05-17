import React from 'react';
import { LineSegments, BufferGeometry, BufferAttribute } from 'three';

const Axes = () => {
    const points = [
        { color: 'green', positions: [[-1000, 0, 1], [0, 0, 1]] },
        { color: 'blue', positions: [[0, 0, 1], [0, 1000, 1]] },
        { color: 'red', positions: [[1000, 0, 1], [0, 0, 1]] },
        { color: 'red', positions: [[0, 0, 1], [0, -1000, 1]] },
    ];

    const geometries = points.map(({ positions }) => {
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions.flat()), 3));
        return geometry;
    });

    return (
        <>
            {geometries.map((geometry, index) => (
                <lineSegments key={index} geometry={geometry}>
                    <lineBasicMaterial color={points[index].color} linewidth={3} />
                </lineSegments>
            ))}
        </>
    );
};

export default Axes;
