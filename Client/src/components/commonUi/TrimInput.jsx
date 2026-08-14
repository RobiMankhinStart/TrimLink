import { Scissors } from "lucide-react";
import Button from "./Button";

const TrimmerInput = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto p-4">
      <input
        type="url"
        placeholder="Paste your long URL here..."
        className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <Button size="lg" icon={Scissors} className="shrink-0">
        Trim Link
      </Button>
    </div>
  );
};
export default TrimmerInput;
