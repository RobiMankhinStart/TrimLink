import { Scissors } from "lucide-react";

const TrimmerInput = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
      <input
        type="url"
        placeholder="Paste your long URL here..."
        className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary outline-none"
      />
      <button className="bg-primary hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
        <Scissors size={20} />
        Trim Link
      </button>
    </div>
  );
};
export default TrimmerInput;
