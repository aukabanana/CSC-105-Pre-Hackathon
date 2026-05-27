import { useEffect, useState } from 'react';
import { Lightbulb, Droplets, Fan } from 'lucide-react';
import DashboardHeader from "../../../components/dashboardHeader";
import { getElectricChargeData } from '../api/electricCharge.api';

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

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const data = await getElectricChargeData();
        setDevices(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const lightCount = devices.filter(d => d.type?.toLowerCase() === 'light').length;
  const waterCount = devices.filter(d => d.type?.toLowerCase() === 'water').length;
  const etcCount = devices.length - (lightCount + waterCount);

  const totalKwh = devices.reduce((sum, item) => sum + Number(item.calculated_kwh || 0), 0);
  const subtotal = devices.reduce((sum, item) => sum + Number(item.calculated_cost || 0), 0);

  const vat = subtotal * 0.07;
  const totalBill = subtotal + vat;

  const getDeviceIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'light':
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-400">
            <Lightbulb className="w-5 h-5" />
          </div>
        );
      case 'water':
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-400">
            <Droplets className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-400">
            <Fan className="w-5 h-5" />
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 text-xl font-semibold">
        Loading Data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <DashboardHeader title="Electricity Charges" username="Admin Username" />

      <button onClick={() => window.history.back()} className="mt-6 mb-6 flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50">
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
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-400 mb-1">
              <Lightbulb className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-red-400">LIGHT</p>
            <p className="text-lg font-bold">{lightCount}</p>
          </div>
          <div>
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-400 mb-1">
              <Droplets className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-red-400">WATER</p>
            <p className="text-lg font-bold">{waterCount}</p>
          </div>
          <div>
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-400 mb-1">
              <Fan className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-red-400">ETC.</p>
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
              <th className="p-4">Name</th>
              <th className="p-4 text-center">Type</th>
              <th className="p-4 text-center">Devices Power</th>
              <th className="p-4 text-center">Power Usage</th>
              <th className="p-4 text-center">Unit</th>
              <th className="p-4 text-center">Expense</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600 font-medium">
            {devices.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-400">
                  No devices found in the system. (Please add data in Prisma Studio)
                </td>
              </tr>
            ) : (
              devices.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-4 text-left font-bold text-blue-600 flex items-center gap-4">
                    {getDeviceIcon(item.type)}
                    <span>{item.name}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-600">
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4 text-center">{item.watt}W</td>
                  <td className="p-4 text-center">{(item.time_usage / 3600).toFixed(2)}W</td>
                  <td className="p-4 text-center text-gray-500">{Number(item.calculated_kwh).toFixed(0)} Unit</td>
                  <td className="p-4 text-center font-bold text-gray-800">{Number(item.calculated_cost).toFixed(2)}฿</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 border border-gray-200 shadow-sm font-sans">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-blue-600 inline-block border-b-2 border-blue-600 pb-1">
            Total Expense Summary
          </h3>
        </div>

        <div className="mb-4 flex items-center justify-between border-l-4 border-blue-600 bg-gray-50/50 p-4 rounded-r-lg">
          <div>
            <p className="text-sm font-bold text-gray-800">Overall Usage</p>
            <p className="text-xs italic text-gray-400 mt-0.5">Total Units Consumed</p>
          </div>
          <div className="text-sm font-medium text-gray-700">
            {totalKwh.toFixed(4)} kWh
          </div>
        </div>

        <div className="border-t border-black my-4"></div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm font-bold text-gray-900">
            <span>Subtotal :</span>
            <span>{subtotal.toFixed(2)}฿</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-400">
            <span>Vat (7%) :</span>
            <span>{vat.toFixed(2)}฿</span>
          </div>
        </div>

        <div className="border-t border-blue-600 my-4"></div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-2xl font-black text-blue-600">Total Bill:</span>
          <span className="text-3xl font-black text-blue-600">
            {totalBill.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}฿
          </span>
        </div>
      </div>
    </div>
  );
}