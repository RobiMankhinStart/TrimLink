import { Calendar, X } from "lucide-react";
import React from "react";
import Button from "../commonUi/Button";

const VisitModal = ({
  selectedHistory,
  setSelectedHistory,
  formatLocalTime,
}) => {
  return (
    <div>
      {" "}
      {selectedHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh]">
            <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 gap-3">
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Visit History
                </h2>
                <p className="text-xs text-slate-500 truncate">
                  {selectedHistory.longUrl}
                </p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedHistory(null)}
                icon={X}
                className="p-2"
              />
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
              {selectedHistory.visitHistory?.length > 0 ? (
                selectedHistory.visitHistory.map((visit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-500">
                      <Calendar size={16} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {formatLocalTime(visit.visitTime)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-slate-400">
                  <p className="text-sm font-medium">No visits recorded yet.</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 text-center">
              <Button
                onClick={() => setSelectedHistory(null)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitModal;
