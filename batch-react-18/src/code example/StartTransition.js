import { startTransition } from "react";

function StartTransition() {
  const [isPending, startTransition] = useTransition();
  // Urgent: Show what was typed
  setInputValue(input);

  // Mark any state updates inside as transitions
  startTransition(() => {
    // Transition: Show the results
    setSearchQuery(input);
  });
}
