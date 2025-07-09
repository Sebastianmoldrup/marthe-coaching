"use client";

import { useState } from "react";

const steps = ["Velkommen", "Hva er målet ditt?", "Kontaktinfo"];
const goals = ["Ned i vekt/fettprosent", "Bli sterkere", "Sunnere livsstil"];

export default function CoachingStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    choice: "",
  });

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Takk! Du hører fra oss snart 💌");
  };

  return (
    <div className="w-[500px] mx-auto p-6 rounded-2xl shadow-lg bg-pink-50 border border-pink-100">
      <h2 className="text-2xl font-semibold text-pink-700 mb-4">{steps[step]}</h2>

      <div className="mb-6 min-h-[140px]">
        {step === 0 && (
          <div className="text-pink-900">
            <p className="mb-4">Hei, så hyggelig at du er her! 👋</p>
            <p>La oss finne ut hvordan jeg kan hjelpe deg best mulig.</p>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col items-center gap-4">
            {goals.map((option) => {
              const isSelected = formData.choice === option;
              const base =
                "px-4 py-3 rounded-xl text-center text-pink-900 bg-white border border-pink-200 hover:bg-pink-100 transition-all";
              const selected = isSelected ? " ring-2 ring-pink-300" : "";
              return (
                <button
                  key={option}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, choice: option }));
                    handleNext();
                  }}
                  className={base + selected}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-pink-800">
              Navn:
              <input
                type="text"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full mt-1 p-2 rounded-md border border-pink-200 bg-white"
              />
            </label>
            <label className="text-pink-800">
              E-post:
              <input
                type="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full mt-1 p-2 rounded-md border border-pink-200 bg-white"
              />
            </label>
            <button
              type="submit"
              className="mt-2 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition"
            >
              Send inn
            </button>
          </form>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="text-pink-600 hover:underline disabled:opacity-30"
        >
          Tilbake
        </button>
        {step < steps.length - 1 && step !== 1 && (
          <button
            onClick={handleNext}
            className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition"
          >
            Neste
          </button>
        )}
      </div>
    </div>
  );
}
