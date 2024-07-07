import { Circle, Layer, Stage } from 'react-konva';

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

  return (
    <Stage width={width} height={height}>
      <Layer x={width / 2} y={height / 2}>
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
