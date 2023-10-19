import './App.css'
import Layout from './layout/Layout'

function App() {
  const tableData = [
    {
      name: "Catalina",
      gender: "Female",
      time: "12:00 AM",
      status: "pending",
    },
    {
      name: "John",
      gender: "Male",
      time: "12:00 AM",
      status: "completed",
    },
    {
      name: "Martin",
      gender: "Male",
      time: "12:00 AM",
      status: "canceled",
    },
    {
      name: "Susan",
      gender: "Female",
      time: "12:00 AM",
      status: "pending",
    }
  ]

  return (
    <Layout>
      <div className="flex flex-col gap-1 p-8">
        <h1 className="text-4xl font-semibold ">Welcome Back <strong className="font-semibold text-purple-700">Olivia</strong></h1>
        <div className="p-1 text-slate-500">Your current account summary and activity.</div>

        <div className="w-[800px] mx-auto mt-16">
          <div className="flex justify-between gap-8">
            <div className="flex flex-col w-1/2 gap-4 p-4 border rounded-lg">
              <div className="flex justify-between">
                <div className="font-semibold">
                  <i className="mr-4 text-purple-700 fa-solid fa-coins" />
                  Total Earnings
                </div>

                <i className="fa-solid fa-arrow-right text-slate-400" />
              </div>

              <div className="pt-4 text-4xl font-medium">35 $</div>
            </div>

            <div className="flex flex-col w-1/2 gap-4 p-4 border rounded-lg">
              <div className="flex justify-between">
                <div className="font-semibold">
                  <i className="mr-4 text-purple-700 fa-solid fa-coins" />
                  Appointments
                </div>

                <i className="fa-solid fa-arrow-right text-slate-400" />
              </div>

              <div className="pt-4 text-4xl font-medium">1/4</div>
            </div>
          </div>

          <div className="w-full mt-4 border rounded-lg">
            <div className="flex items-center justify-between p-4">
              <div>
                <h4 className="mb-1 text-xl font-bold">Appointments <span className="px-2 text-sm font-semibold border rounded-lg text-slate-700">4 appointments</span></h4>
                <div className="text-slate-500">Keep track of your appointment</div>
              </div>
              
              <div><a href="#" className="text-purple-700 underline">See all</a></div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="border border-l-0 border-r-0 bg-grey-500">
                  {Object.keys(tableData[0]).map((e) => (
                    <th key={e} className="p-4 text-sm font-medium text-left capitalize text-slate-500">{e}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tableData.map((d) => (
                  <tr key={d.name} className="border border-b-0 border-l-0 border-r-0">
                    <td className="p-4 font-medium">{d.name}</td>
                    <td className="p-4 font-medium">{d.gender}</td>
                    <td className="p-4">{d.time}</td>
                    <td className="p-4">{d.status}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
