import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface SensorCardProps {
  title: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  icon: React.ReactNode;
}

export function SensorCard({ title, value, unit, min, max, icon }: SensorCardProps) {
  const isWarning = value < min || value > max;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      <div className="p-3 bg-green-100 rounded-full">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="text-gray-500">{unit}</span>
          {isWarning && (
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          )}
        </div>
        <div className="text-sm text-gray-500">
          Range: {min} - {max} {unit}
        </div>
      </div>
    </div>
  );
}