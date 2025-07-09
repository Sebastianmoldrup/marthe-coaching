"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/app/components/ContactForm";
import { Progress } from "@/components/ui/progress"

const steps = [
  "Hva vil du ha hjelp med?",
  "Klar for å komme i gang?",
  "Skriv inn kontaktinformasjonen din",
  "Omdirigerer til betalingsside",
];

const goals = [
  "Gå ned i vekt og føle meg bedre",
  "Bygge styrke og bli sterkere i hverdagen",
  "Skape en sunn og balansert livsstil",
];

const callToAction = [
  "Jeg vil lære mer først",
  "La oss starte reisen min!"
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // console.log(step);
  console.log(selectedGoal);
  console.log(formData);

  // Progress bar logic
  const [progress, setProgress] = useState(25)
  // useEffect(() => {
  //   const timer = setTimeout(() => setProgress(66), 500)
  //   return () => clearTimeout(timer)
  // }, [])


  const handleBack = () => {
    if (step === 0) return; // Avoid going back from the first step
    else if (step === 3) setStep(1); // Bug fix: skip back from payment step
    else setStep(step - 1);
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 flex flex-col gap-y-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary-light">{steps[step]}</h2>

      <Progress value={progress} className="w-full" />

      {step === 0 && (
        <Goals setSelectedGoal={setSelectedGoal} setStep={setStep} setProgress={setProgress} />
      )}

      {step === 1 && (
        <CallToAction setStep={setStep} setProgress={setProgress} />
      )}

      {step === 2 && (
        <ContactForm setFormDataAction={setFormData} />
      )}

      {step === 3 && (
        <span>
          Kunden ønsker å ({selectedGoal})
        </span>
      )}

      <Button
        onClick={() => handleBack()}
        variant={step === 0 ? "outline" : "default"}
        className="text-sm font-medium transition disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer"
      >
        ← Tilbake
      </Button>
    </div>
  );
}

{/*
  Goals props and component
*/}

type GoalsContentProps = {
  setSelectedGoal: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

function Goals({ setSelectedGoal, setStep, setProgress }: GoalsContentProps) {
  return (
    <div className="flex flex-col gap-y-4">
      {goals.map((goal: string, index: number) => {
        return (
          <Button key={index} className="hover:cursor-pointer hover:shadow-md" onClick={() => {
            setSelectedGoal(goal);
            setStep(1);
            setProgress(50); // Update progress to 50% when a goal is selected

          }}>{goal}</Button>
        );
      })}
    </div>
  );
}

{/*
  CallToAction props and component
*/}

type CallToActionProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}


function CallToAction({ setStep, setProgress }: CallToActionProps) {
  return (
    <div className="flex flex-col gap-y-4">
      {callToAction.map((action: string, index: number) => {
        return (
          <Button
            key={index}
            className="hover:cursor-pointer hover:shadow-md"
            onClick={() => {
              if (index === 0) setProgress(75);
              setStep(2 + index); // Step 2 for form, 3 for payment
            }}
          >
            {action}
          </Button>
        );
      })}
    </div>
  );
}




