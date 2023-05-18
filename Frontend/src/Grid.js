import React from 'react';
import { LineSegments, BufferGeometry, BufferAttribute } from 'three';

const Grid = ({ size, divisions, color }) => {
    const gridSize = size * 2;
    const halfSize = size / 2;
    const step = gridSize / divisions;
    const vertices = [];

    for (let i = -halfSize; i <= halfSize; i += step) {
        vertices.push(i, -halfSize, 0);
        vertices.push(i, halfSize, 0);
        vertices.push(-halfSize, i, 0);
        vertices.push(halfSize, i, 0);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));

    return (
        <lineSegments geometry={geometry}>
            <lineBasicMaterial color={color} linewidth={1} />
        </lineSegments>
    );
};

export default Grid;
