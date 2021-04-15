const CircleVisual = () => {
    return (
        <svg width={70} height={70} >
            <circle 
                cx={35}
                cy={40}
                r={25}
                fill="#E3BDE0"
            />
            <text 
                x={35}
                y={43}
                textAnchor="middle"
                fill="#F5148E"
                fontSize="1rem"
            >{5}</text>
        </svg>
    )
}

export default CircleVisual;

/* dy=".3em" */