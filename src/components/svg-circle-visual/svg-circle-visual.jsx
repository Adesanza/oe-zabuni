const CircleVisual = ({ bgColor, textColor, text }) => {
  return (
    <svg width={70} height={70}>
      <circle cx={35} cy={40} r={25} fill={bgColor} />
      <text
        x={35}
        y={43}
        textAnchor="middle"
        fill={textColor}
        fontSize="1rem"
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
};

export default CircleVisual;
