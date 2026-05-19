import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardHeader from '../components/dashboardHeader';
import GoHomeButton from '../components/goHomeButton';

interface ElectronicDevice {
  id: string;
  name: string;
  type: string;
  watt: number;
  time_usage: number;
  calculated_kwh: string;
  calculated_cost: string;
}

const ElectricChargePage: React.FC = () => {
  const [devices, setDevices] = useState<ElectronicDevice[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDevices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/electronics');
      setDevices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching electronics:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const subtotal = devices.reduce((sum, item) => sum + parseFloat(item.calculated_cost), 0);
  const vat = subtotal * 0.07;
  const totalBill = subtotal + vat;
  const totalUnits = devices.reduce((sum, item) => sum + parseFloat(item.calculated_kwh), 0);

  const lightCount = devices.filter(d => d.type?.toLowerCase() === 'light').length;
  const waterCount = devices.filter(d => d.type?.toLowerCase() === 'water').length;
  const etcCount = devices.length - (lightCount + waterCount);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center font-bold">Loading Data...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FD] pb-10">
      <DashboardHeader title="Electricity Charges" username="Admin Username" />

      <div className="p-4 md:p-6 max-w-6xl mx-auto">
        <div className="mb-4">
          <GoHomeButton />
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 w-full lg:w-auto">
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center border-[8px] md:border-[10px] border-orange-400 rounded-full text-2xl md:text-3xl font-bold text-orange-400">
              {devices.length}
            </div>
            <div className="flex gap-4 md:gap-6 text-center overflow-x-auto pb-2 sm:pb-0">
              <div><p className="text-xl">💡</p><p className="text-[10px] text-red-500 font-bold uppercase">Light</p><p className="font-bold">{lightCount}</p></div>
              <div><p className="text-xl">💧</p><p className="text-[10px] text-red-500 font-bold uppercase">Water</p><p className="font-bold">{waterCount}</p></div>
              <div><p className="text-xl">⚙️</p><p className="text-[10px] text-red-500 font-bold uppercase">Etc.</p><p className="font-bold">{etcCount}</p></div>
            </div>
          </div>

          <div className="text-center lg:text-right w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0">
            <p className="text-gray-500 font-bold text-sm md:text-base">Total Expense</p>
            <h1 className="text-3xl md:text-5xl font-black text-[#2D5BFF] my-1">
              {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}฿
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Electricity Analyzing Expenses</h2>
        
        <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
          <div className="min-w-[800px]">
            <div className="bg-[#2D5BFF] grid grid-cols-6 p-4 text-white font-bold text-sm text-center">
              <div>Name</div><div>Type</div><div>Devices Power</div><div>Usage Time</div><div>Unit</div><div>Expense</div>
            </div>
            <div className="bg-white divide-y divide-gray-50">
              {devices.map((item) => (
                <div key={item.id} className="grid grid-cols-6 p-4 items-center text-center text-sm hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 font-bold text-[#2D5BFF] text-left">
                    <span className="bg-red-50 p-2 rounded-full text-[10px]">🔌</span> 
                    <span className="truncate">{item.name}</span>
                  </div>
                  <div><span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-[10px] font-bold uppercase">{item.type || 'N/A'}</span></div>
                  <div className="font-semibold">{item.watt}W</div>
                  <div className="font-semibold">{(item.time_usage / 3600).toFixed(2)} Hrs</div>
                  <div className="font-semibold text-orange-500">{item.calculated_kwh} Unit</div>
                  <div className="font-bold text-gray-700">{parseFloat(item.calculated_cost).toLocaleString()}฿</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-[#2D5BFF] font-black text-lg md:text-xl mb-4 border-b-2 border-[#2D5BFF] inline-block">Total Expense Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-blue-800 font-bold text-sm mb-1">Overall Usage</p>
              <div className="flex justify-between text-xs md:text-sm text-gray-600 italic">
                <span>Total Units Consumed</span>
                <span>{totalUnits.toFixed(2)} kWh</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span>Subtotal :</span>
              <span>{subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}฿</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-gray-400">
              <span>Vat (7%) :</span>
              <span>{vat.toLocaleString(undefined, { minimumFractionDigits: 2 })}฿</span>
            </div>
            <div className="flex justify-between text-xl md:text-2xl font-black text-[#2D5BFF] border-t pt-2 mt-2">
              <span>Total Bill:</span>
              <span>{totalBill.toLocaleString(undefined, { minimumFractionDigits: 2 })}฿</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricChargePage;