export default function Vehicle({ vehicle }) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    { vehicle === 'car' && '🚗'}
    { vehicle === 'truck' && '🚚'}
    { vehicle === 'bus' && '🚌'}
    { vehicle === 'motocrycle' && '🏍️'}
  </div>;
}