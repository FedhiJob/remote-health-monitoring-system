export type VitalSigns = {
  heartRate: number;
  spo2: number;
  temperature: number;
  compliance: "Good" | "Warning" | "Non-Compliant";
};

export type Patient = {
  id: string;
  name: string;
  vitals: VitalSigns;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const patients: Patient[] = letters.map((letter, index) => ({
  id: `patient-${index + 1}`,
  name: `Patient ${letter}`,
  vitals: {
    heartRate: 72,
    spo2: 98,
    temperature: 36.8,
    compliance: "Good",
  },
}));
