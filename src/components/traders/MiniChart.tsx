interface MiniChartProps {
  color: 'green' | 'red';
}

export const MiniChart: React.FC<MiniChartProps> = ({ color }) => (
  <div className="w-full h-16 flex items-end justify-end">
    <svg width="100" height="40" className="overflow-visible">
      <polyline
        fill="none"
        stroke={color === 'green' ? '#00d4aa' : '#f84960'}
        strokeWidth="2"
        points="0,35 20,30 40,25 60,20 80,15 100,10"
      />
    </svg>
  </div>
);