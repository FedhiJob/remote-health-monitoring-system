"use client";

import { useState } from "react";
import { patients } from "./src/data/data/patient";
export default function Dashboard() {
  const [selectedPatientId, setSelectedPatientId] = useState(
    patients[0].id
  );

  const patient = patients.find(
    (p) => p.id === selectedPatientId
  )!;

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        Remote Health Monitoring Dashboard
      </h1>

      {/* Patient Selection */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Select Patient
        </label>
        <select
          className="border rounded p-2 w-64"
          value={selectedPatientId}
          onChange={(e) => setSelectedPatientId(e.target.value)}
        >
          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Heart Rate</h2>
          <p className="text-2xl font-semibold">
            {patient.vitals.heartRate} BPM
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">SpO₂</h2>
          <p className="text-2xl font-semibold">
            {patient.vitals.spo2} %
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Temperature</h2>
          <p className="text-2xl font-semibold">
            {patient.vitals.temperature} °C
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Compliance</h2>
          <p className="text-2xl font-semibold">
            {patient.vitals.compliance}
          </p>
        </div>
      </div>
    </main>
  );
}
