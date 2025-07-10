"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactForm from "./ContactForm";

// 1. «Hva er ditt mål?»
// 2. «Hva vil du oppnå?»
// 3. «Velg din vei videre»
// 4. «Din reise starter her – hva vil du fokusere på?»
// 5. «Hva er viktigst for deg akkurat nå?»
// 6. «Velg målet som passer deg best»
// 7. «Skreddersy din livsstilsendring – hvor vil du begynne?»
// 8. «Start med det som betyr mest for deg»
// 9. «Hva ønsker du å forbedre i livet ditt?»
const headers = [
  "Velg din vei videre",
  "Er du klar for å ta neste steg?"
];

const goals = [
  "Ned i vekt",
  "Bygge styrke",
  "Sunnere livsstil",
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });




  return (
    <div className="bg-white p-6 shadow-xl rounded-md space-y-6 w-[350px] md:w-[480px]">
      <h2 className="text-2xl">{headers[step]}</h2>

      {
        step === 0 && (
          <StepContent content={goals} step={step} setStep={setStep} />
        )
      }

      {
        step === 1 && (
          <ContactForm setFormDataAction={setFormData} step={step} setStepAction={setStep} />
        )
      }
    </div>
  );
}

type StepProps = {
  content: string[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function StepContent({ content, step, setStep }: StepProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-y-4">
        {content.map((item, index) => {
          return (
            <Button key={index} className="" onClick={() => setStep(step + 1)}>{item}</Button>
          );
        })}
      </div>
      {step === 0 ? null : <Button className="" onClick={() => setStep(step - 1)}>Tilbake</Button>}
    </div>
  );
}
