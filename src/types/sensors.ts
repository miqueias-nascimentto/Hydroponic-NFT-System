export interface SensorData {
  ph: number;
  ec: number;
  waterTemp: number;
  airTemp: number;
  humidity: number;
  timestamp: Date;
}

export interface AlertThresholds {
  ph: { min: number; max: number };
  ec: { min: number; max: number };
  waterTemp: { min: number; max: number };
  airTemp: { min: number; max: number };
  humidity: { min: number; max: number };
}