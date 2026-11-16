import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert.jsx";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
import { Label } from "./components/ui/label.jsx";

function createPlan(focus, minutes) {
  if (minutes < 20) {
    return `Spend ${minutes} minutes completing one small ${focus} task.`;
  }

  if (minutes < 50) {
    return `Work on ${focus} for 25 minutes, then use the remaining time to review.`;
  }

  return `Complete two 25-minute ${focus} sessions with a 5-minute break between them.`;
}

function App() {
  const [focus, setFocus] = useState("");
  const [minutes, setMinutes] = useState("");
  const [feedback, setFeedback] = useState({
    variant: "default",
    title: "Plan ready when you are",
    message: "Your recommended plan will appear here.",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const cleanFocus = focus.trim();
    const numericMinutes = Number(minutes);

    if (!cleanFocus || numericMinutes < 1 || numericMinutes > 240) {
      setFeedback({
        variant: "warning",
        title: "Check your entries",
        message: "Enter a study focus and a time from 1 to 240 minutes.",
      });
      return;
    }

    setFeedback({
      variant: "success",
      title: "Recommended plan",
      message: createPlan(cleanFocus, numericMinutes),
    });
  }

  return (
    <>
      <header className="border-b-[5px] border-amber-500 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase text-cyan-300">Study Sprint</p>
          <h1 className="mt-2 text-4xl font-extrabold">Study session planner</h1>
          <p className="mt-2 text-lg">Turn the time you have into one realistic next step.</p>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(18rem,5fr)] lg:px-8 lg:py-12">
        <section className="rounded-lg border border-l-[6px] border-slate-300 border-l-amber-500 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="planner-title">
          <h2 id="planner-title" className="text-2xl font-bold text-slate-900">Build a study plan</h2>
          <p className="mt-2 text-slate-600">Choose a focus and enter the number of minutes available.</p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <Label htmlFor="focus-input">Study focus</Label>
              <Input
                id="focus-input"
                placeholder="Example: responsive navigation"
                autoComplete="off"
                value={focus}
                onChange={(event) => setFocus(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minutes-input">Minutes available</Label>
              <Input
                id="minutes-input"
                type="number"
                min="1"
                max="240"
                inputMode="numeric"
                placeholder="Example: 45"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">Create study plan</Button>

            <Alert variant={feedback.variant} role="status" aria-live="polite">
              <AlertTitle>{feedback.title}</AlertTitle>
              <AlertDescription>{feedback.message}</AlertDescription>
            </Alert>
          </form>
        </section>

        <aside className="rounded-lg border border-cyan-200 bg-cyan-50 p-6" aria-labelledby="ownership-title">
          <p className="text-xs font-extrabold uppercase text-teal-800">Open-code model</p>
          <h2 id="ownership-title" className="mt-2 text-xl font-bold text-slate-900">What the project now owns</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-800">
            <li>Component source under <code>components/ui</code></li>
            <li>Tailwind utility and variant decisions</li>
            <li>Local modification and maintenance responsibility</li>
            <li>React, Vite, Tailwind, and primitive dependencies</li>
          </ul>
        </aside>
      </main>
    </>
  );
}

export default App;
