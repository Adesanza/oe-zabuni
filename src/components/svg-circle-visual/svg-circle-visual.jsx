const CircleVisual = () => {
    return (
        <svg width={100} height={100} >
            <circle 
                cx={45}
                cy={55}
                r={40}
                fill="blue"
            />
            <text 
                x={45}
                y={57}
                textAnchor="middle"
                fill="white"
                fontSize="1rem"
            >{5}</text>
        </svg>
    )
}

export default CircleVisual;

/* dy=".3em" */