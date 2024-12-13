import React from 'react';
import { Droplets, Thermometer, Wind, Activity, Gauge } from 'lucide-react';
import { SensorCard } from './components/SensorCard';
import { SensorChart } from './components/SensorChart';
import type { SensorData } from './types/sensors';

// Mock data - In production, this would come from your API
const mockCurrentData: SensorData = {
  ph: 6.0,
  ec: 1.5,
  waterTemp: 21,
  airTemp: 23,
  humidity: 65,
  timestamp: new Date(),
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex items-center">
          <Droplets className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Hydroponic NFT System</h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SensorCard
            title="pH Level"
            value={mockCurrentData.ph}
            unit="pH"
            min={5.5}
            max={6.5}
            icon={<Activity className="w-6 h-6 text-green-600" />}
          />
          <SensorCard
            title="EC Level"
            value={mockCurrentData.ec}
            unit="mS/cm"
            min={1.0}
            max={1.8}
            icon={<Gauge className="w-6 h-6 text-green-600" />}
          />
          <SensorCard
            title="Water Temperature"
            value={mockCurrentData.waterTemp}
            unit="°C"
            min={18}
            max={24}
            icon={<Thermometer className="w-6 h-6 text-green-600" />}
          />
          <SensorCard
            title="Air Temperature"
            value={mockCurrentData.airTemp}
            unit="°C"
            min={20}
            max={25}
            icon={<Thermometer className="w-6 h-6 text-green-600" />}
          />
          <SensorCard
            title="Humidity"
            value={mockCurrentData.humidity}
            unit="%"
            min={60}
            max={70}
            icon={<Wind className="w-6 h-6 text-green-600" />}
          />
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Sensor History</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SensorChart
              data={[mockCurrentData]}
              sensorKey="ph"
              label="pH Levels"
              color="#059669"
            />
            <SensorChart
              data={[mockCurrentData]}
              sensorKey="ec"
              label="EC Levels"
              color="#0284c7"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;