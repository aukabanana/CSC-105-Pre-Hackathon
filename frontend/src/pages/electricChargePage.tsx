import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ElectronicDevice {
  id: string;
  name: string;
  type: string;
  watt: number;
  time_usage: number;
  status: boolean | number;
  calculated_kwh: string;
  calculated_cost: string;
}

export default function ElectricChargePage() {
  const [devices, setDevices] = useState<ElectronicDevice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDevices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/electronics',
        {
          withCredentials: true
        });
      setDevices(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching devices:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const lightCount = devices.filter(d => d.type?.toLowerCase() === 'light').length;
  const waterCount = devices.filter(d => d.type?.toLowerCase() === 'water').length;
  const etcCount = devices.length - (lightCount + waterCount);

  const totalKwh = devices.reduce((sum, item) => sum + Number(item.calculated_kwh || 0), 0);
  const subtotal = devices.reduce((sum, item) => sum + Number(item.calculated_cost || 0), 0);

  const vat = subtotal * 0.07;
  const totalBill = subtotal + vat;

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 text-xl font-semibold">
        Loading Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏠</span>
          <h1 className="text-xl font-bold text-gray-800">Electricity Charges</h1>
        </div>
        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <span>Admin Username</span>
          <span className="text-xl cursor-pointer">🚪</span>
        </div>
      </div>

      <button onClick={() => window.history.back()} className="mb-6 flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50">
        ⟨ go back
      </button>

      <div className="mb-8 grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-3 items-center border">
        <div className="flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-orange-500 text-3xl font-bold text-orange-500">
            {devices.length}
          </div>
        </div>

        <div className="flex justify-center gap-6 text-center">
          <div>
            <span className="text-xl">💡</span>
            <p className="text-xs font-bold text-red-500">LIGHT</p>
            <p className="text-lg font-bold">{lightCount}</p>
          </div>
          <div>
            <span className="text-xl">💧</span>
            <p className="text-xs font-bold text-red-500">WATER</p>
            <p className="text-lg font-bold">{waterCount}</p>
          </div>
          <div>
            <span className="text-xl">⚙️</span>
            <p className="text-xs font-bold text-red-500">ETC.</p>
            <p className="text-lg font-bold">{etcCount}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-gray-400">Total Expense</p>
          <p className="text-4xl font-extrabold text-blue-600">{subtotal.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}฿</p>
          <p className="text-xs text-gray-400">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <h2 className="mb-4 text-xl font-bold text-gray-800">Electricity Analyzing Expenses</h2>
      <div className="overflow-x-auto rounded-xl shadow-sm mb-8">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-blue-600 text-sm font-semibold text-white">
              <th className="p-4 text-center">Name</th>
              <th className="p-4 text-center">Type</th>
              <th className="p-4 text-center">Devices Power</th>
              <th className="p-4 text-center">Usage Time</th>
              <th className="p-4 text-center">Unit</th>
              <th className="p-4 text-center">Expense</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600 font-medium">
            {devices.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-400">ไม่พบข้อมูลอุปกรณ์ในระบบ (กรุณาเพิ่มข้อมูลใน Prisma Studio)</td>
              </tr>
            ) : (
              devices.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 text-center">
                  <td className="p-4 text-left font-bold text-gray-800">{item.name}</td>
                  <td className="p-4">
                    {item.type === 'Light' ? '💡 Light' : item.type === 'Water' ? '💧 Water' : '⚙️ ' + item.type}
                  </td>
                  <td className="p-4">{item.watt} W</td>
                  <td className="p-4">{(item.time_usage / 3600).toFixed(2)} Hrs</td>
                  <td className="p-4 text-gray-500">{Number(item.calculated_kwh).toFixed(4)} kWh</td>
                  <td className="p-4 font-bold text-blue-600">{Number(item.calculated_cost).toFixed(2)}฿</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm border">
        <h3 className="mb-4 border-b pb-2 text-lg font-bold text-blue-600">Total Expense Summary</h3>
        <div className="mb-4 border-l-4 border-blue-600 pl-3">
          <p className="text-sm font-bold text-gray-700">Overall Usage</p>
          <div className="flex justify-between text-xs text-gray-400 italic mt-1">
            <span>Total Units Consumed</span>
            <span>{totalKwh.toFixed(4)} kWh</span>
          </div>
        </div>

        <div className="space-y-2 border-b pb-3 text-sm">
          <div className="flex justify-between font-bold text-gray-800">
            <span>Subtotal :</span>
            <span>{subtotal.toFixed(2)}฿</span>
          </div>
          <div className="flex justify-between text-gray-400 font-semibold">
            <span>Vat (7%) :</span>
            <span>{vat.toFixed(2)}฿</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between text-2xl font-black text-blue-600">
          <span>Total Bill:</span>
          <span>{totalBill.toFixed(2)}฿</span>
        </div>
      </div>
    </div>
  );
}