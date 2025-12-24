import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [bgColor, setBgColor] = useState("bg-white");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100; // Convert cm to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
      setBgColor("bg-blue-200");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal");
      setBgColor("bg-green-200");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight");
      setBgColor("bg-yellow-200");
    } else {
      setCategory("Obese");
      setBgColor("bg-red-200");
    }
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setBgColor("bg-white");
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${bgColor} transition-colors duration-500`}>
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">BMI Calculator</h1>

      <div className="bg-white p-6 rounded-lg shadow w-80 text-center">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={calculateBMI}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Reset
          </button>
        </div>

        {bmi && (
          <div className="mt-4">
            <p className="text-2xl font-semibold">BMI: {bmi}</p>
            <p className="text-xl font-medium">{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
