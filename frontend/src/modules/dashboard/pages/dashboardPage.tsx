import DashboardHeader from "../../../components/dashboardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faCalculator, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
)


function DashboardPage() {

  const navigate = useNavigate()

    const devices = [
    {
      name: 'Living Room Light',
      status: 'active',
      type: 'light'
    },
    {
      name: 'Kitchen Light',
      status: 'inactive',
      type: 'light'
    },
    {
      name: 'Refrigerator',
      status: 'active',
      type: 'ac',
      history: [
      { time: '08:00', temp: 3 },
      { time: '12:00', temp: 0 },
      { time: '16:00', temp: 2 },
      { time: '20:00', temp: -1 },
      { time: '24:00', temp: 2 }
    ]
    },
    {
      name: 'Bedroom Fan',
      status: 'inactive',
      type: 'fan'
    },
    {
      name: 'TV',
      status: 'active',
      type: 'tv'
    },
    {
      name: 'Living Room Light',
      status: 'active',
      type: 'light'
    },
    {
      name: 'Kitchen Light',
      status: 'inactive',
      type: 'light'
    },
    {
      name: 'Air Conditioner',
      status: 'active',
      type: 'ac',
      history: [
      { time: '08:00', temp: 70 },
      { time: '12:00', temp: 68 },
      { time: '16:00', temp: 88 },
      { time: '20:00', temp: 76 },
      { time: '24:00', temp: 86 }
    ]
    },
    {
      name: 'Bedroom Fan',
      status: 'active',
      type: 'fan'
    },
    {
      name: 'TV',
      status: 'active',
      type: 'tv'
    },
    {
      name: 'Living Room Light',
      status: 'active',
      type: 'light'
    },
    {
      name: 'TV',
      status: 'active',
      type: 'light'
    },
  ]

  const Timeline = ['08:00', '12:00', '16:00', '20:00', '24:00']

  //assume line
  const redTemp = devices
  .find(d => d.name === 'Air Conditioner')
  ?.history?.map((item) => item.temp) || []

  const purpleTemp = devices
  .find(d => d.name === 'Refrigerator')
  ?.history?.map((item) => item.temp) || []

  const allDevices = devices.length;
  const activeDevices = devices.filter((device) => device.status === 'active').length
  const inactiveDevices = devices.filter((device) => device.status === 'inactive').length

  const CategoriesCount = {
    air: devices.filter((d) => d.name === 'Air Conditioner').length,
    ref: devices.filter((d) => d.name === 'Refrigerator').length,
    kt: devices.filter((d) => d.name === 'Kitchen Light').length,
    lv: devices.filter((d) => d.name === 'Living Room Light').length
  }

  const data = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [
          activeDevices,
          inactiveDevices
        ],
        backgroundColor: [
          '#22c55e',
          '#EE4646'
        ],
        borderWidth: 0
      }
    ]
  }

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const tempChart = {
  labels: Timeline,
  datasets: [
    {
      label: 'Air Conditioner',
      data: redTemp, 
      borderColor: '#f28e82',
      backgroundColor: '#f28e82',
      tension: 0.3,
      pointRadius: 4,
    },
    {
      label: 'Refrigerator',
      data: purpleTemp, 
      borderColor: '#7c73e6',
      backgroundColor: '#7c73e6',
      tension: 0.3,
      pointRadius: 4,
    }
    ]
    };

    const tempChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }, 
    scales: {
      y: {
        min: -30,
        max: 120,
        ticks: { stepSize: 30 }
      },
      x: {
        grid: { display: false } 
      }
    }
  };

  const barChart = {
    labels: ['Refrigerator', 'Air Conditioner', 'Kitchen Light', 'Living Room Light'],
    datasets: [{
        data: [CategoriesCount.ref, CategoriesCount.air, CategoriesCount.kt, CategoriesCount.lv],
        backgroundColor: '#7c73e6',
        borderRadius: 10,
        barThickness: 20
    }]
  }

  const barChartOptions = {
    indexAxis: 'y' as const, // เปลี่ยนเป็นกราฟแท่งแนวนอน
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        min: 0,
        max: 5,
        ticks: { stepSize: 1 },
        grid: { display: false }
      },
      y: {
        grid: { display: false }
      }
    }
  };


    return (
        <main className="flex flex-col p-5 md:p-10 bg-(--bg-main) gap-10">
            <DashboardHeader title="Dashboard" username="Admin Username" />
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-2 rounded-full bg-(--bg-card) device" onClick={() => navigate('/devices-controller')}>
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faPowerOff} className="text-(--bg-card) text-2xl bg-(--color-primary) px-2 py-3 rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-start text-xl font-bold text-(--color-primary)">Device</p>
                            <p className="text-start text-sm text-(--color-primary)">Connected devices</p>
                        </div>
                    </div>
                </button>
                <button className="p-2 rounded-full bg-(--bg-card) calculate" onClick={() => navigate('/electric-charge')}>
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faCalculator} className="text-(--bg-card) text-2xl bg-(--color-success) px-2 py-3 rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-start text-xl font-bold text-(--color-success)">Calculate</p>
                            <p className="text-start text-sm text-(--color-success)">Utility cost estimate</p>
                        </div>
                    </div>
                </button>
                <button className="p-2 rounded-full bg-(--bg-card) notifications ">
                    <div className="flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faBell} className="text-(--bg-card) text-2xl bg-(--color-orange) px-2 py-3 rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-start text-xl font-bold text-(--color-orange)">Notification</p>
                            <p className="text-start text-sm text-(--color-orange)">Alerts and updates</p>
                        </div>
                    </div>
                </button>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-stretch">
                <div className="flex flex-col gap-5">
                    <div className="py-3 px-6 rounded-full bg-(--bg-card) shadow-(--shadow-lg)"><p className="font-semibold text-[16px] md:text-[20px]">Device</p></div>
                    <div className="flex flex-col items-center gap-10 py-12 bg-(--bg-card) rounded-2xl shadow-(--shadow-lg)">
                        <div className="relative w-60 h-60  md:w-70 md:h-70 p-5">
                            <Doughnut data={data} options={options}/>
                            <div className="
                                absolute inset-0
                                flex items-center justify-center
                                text-5xl font-bold text-(--color-primary)
                                ">
                                {allDevices}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-5">
                            <div className="flex flex-row justify-between items-center w-60 md:w-70">
                                <div className="flex flex-row items-center gap-2">
                                    <FontAwesomeIcon icon={faCircle} className="text-(--color-primary)"/>
                                    <h3 className="text-(--color-primary) text-[20px] md:text-[24px] font-semibold">All Devices</h3>
                                </div>
                                    <h3 className="text-(--color-primary) text-[20px] md:text-[24px] font-semibold">{allDevices}</h3>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-2">
                                    <FontAwesomeIcon icon={faCircle} className="text-(--color-success)"/>
                                    <h3 className="text-(--color-success) text-[20px] md:text-[24px] font-semibold">Active Devices</h3>
                                </div>
                                    <h3 className="text-(--color-success) text-[20px] md:text-[24px] font-semibold">{activeDevices}</h3>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-2">
                                    <FontAwesomeIcon icon={faCircle} className="text-(--color-danger)"/>
                                    <h3 className="text-(--color-danger) text-[20px] md:text-[24px] font-semibold">Inactive Devices</h3>
                                </div>
                                    <h3 className="text-(--color-danger) text-[20px] md:text-[24px] font-semibold">{inactiveDevices}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 h-full">
                    <div className="flex flex-col gap-5">
                        <div className="py-3 px-6 rounded-full bg-(--bg-card) shadow-(--shadow-lg)"><p className="font-semibold text-[16px] md:text-[20px]">Temperature</p></div>
                        <div className="h-60 w-full p-5 bg-(--bg-card) rounded-2xl shadow-(--shadow-lg) flex-1">
                            <Line data={tempChart} options={tempChartOptions} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 h-full">
                        <div className="py-3 px-6 rounded-full bg-(--bg-card) shadow-(--shadow-lg)"><p className="font-semibold text-[16px] md:text-[20px]">Device Categories</p></div>
                        <div className="h-60 w-full p-5 bg-(--bg-card) rounded-2xl shadow-(--shadow-lg) flex-1">
                            <Bar data={barChart} options={barChartOptions}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DashboardPage