import { Circle, Layer, Line, Stage } from 'react-konva';

import { useTheme } from '@mui/material';

import { usePointsStore } from '../stores';

export function CanvasBlock({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const points = usePointsStore((state) => state.points);

  const theme = useTheme();

  const primaryMainColor = theme.palette.primary.main;
  const primaryContrastTextColor = theme.palette.primary.contrastText;
  const dividerColor = theme.palette.divider;

  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Line
          points={[0, centerY, width, centerY]}
          stroke={dividerColor}
          strokeWidth={1}
        />
        <Line
          points={[centerX, 0, centerX, height]}
          stroke={dividerColor}
          strokeWidth={1}
        />
      </Layer>

      <Layer x={centerX} y={centerY}>
        {points.map((point) => (
          <Circle
            key={point.id}
            x={point.x}
            y={point.y}
            radius={5}
            fill={primaryMainColor}
            stroke={primaryContrastTextColor}
          />
        ))}
      </Layer>
    </Stage>
  );
}
