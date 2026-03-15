// import React from "react";
// import {
//   Link2,
//   ExternalLink,
//   Copy,
//   MousePointerClick,
//   TrendingUp,
//   Plus,
//   Trash2,
//   Calendar,
//   Search,
// } from "lucide-react";

// const DashContent = () => {
//   // Mock Data - Replace this with your state/fetching logic later
//   const mockUrls = [
//     {
//       _id: "1",
//       longUrl: "https://vscodedebugging.com/tips/react-hooks-advanced-patterns",
//       shortUrl: "p8x.io/react-tips",
//       clicks: 124,
//       createdAt: "2024-05-15",
//       status: "Active",
//     },
//     {
//       _id: "2",
//       longUrl:
//         "https://tailwind-ui.com/components/application-ui/page-examples/detail-screens",
//       shortUrl: "p8x.io/tw-ui",
//       clicks: 89,
//       createdAt: "2024-05-14",
//       status: "Active",
//     },
//     {
//       _id: "3",
//       longUrl: "https://github.com/trending/javascript?since=weekly",
//       shortUrl: "p8x.io/gh-trend",
//       clicks: 452,
//       createdAt: "2024-05-10",
//       status: "Inactive",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//       {/* Top Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
//         <div>
//           <h1 className="text-3xl font-black text-slate-900 tracking-tight">
//             Your Dashboard
//           </h1>
//           <p className="text-slate-500 font-medium">
//             Manage your assets and track performance.
//           </p>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="relative hidden sm:block">
//             <Search
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//               size={18}
//             />
//             <input
//               type="text"
//               placeholder="Search links..."
//               className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none w-64 transition-all"
//             />
//           </div>
//           <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100 active:scale-95">
//             <Plus size={20} />
//             New Link
//           </button>
//         </div>
//       </div>

//       {/* Stats Summary Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//         <StatCard
//           icon={<Link2 size={24} />}
//           label="Total Links"
//           value={mockUrls.length}
//           color="text-blue-600"
//           bg="bg-blue-50"
//         />
//         <StatCard
//           icon={<MousePointerClick size={24} />}
//           label="Total Clicks"
//           value="665"
//           color="text-indigo-600"
//           bg="bg-indigo-50"
//         />
//         <StatCard
//           icon={<TrendingUp size={24} />}
//           label="Avg. Daily Visits"
//           value="42"
//           color="text-emerald-600"
//           bg="bg-emerald-50"
//         />
//       </div>

//       {/* URL Table Section */}
//       <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
//         <div className="p-6 border-b border-slate-100 bg-slate-50/30">
//           <h2 className="font-bold text-slate-800">Recent Activity</h2>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-slate-400 text-[11px] uppercase tracking-widest font-bold border-b border-slate-100">
//                 <th className="px-8 py-5">Original URL</th>
//                 <th className="px-8 py-5">Short URL</th>
//                 <th className="px-8 py-5">Clicks</th>
//                 <th className="px-8 py-5">Status</th>
//                 <th className="px-8 py-5">Date</th>
//                 <th className="px-8 py-5 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-50">
//               {mockUrls.map((url) => (
//                 <tr
//                   key={url._id}
//                   className="group hover:bg-slate-50/80 transition-all"
//                 >
//                   <td className="px-8 py-6">
//                     <p
//                       className="text-sm font-semibold text-slate-900 max-w-[200px] truncate"
//                       title={url.longUrl}
//                     >
//                       {url.longUrl}
//                     </p>
//                   </td>
//                   <td className="px-8 py-6">
//                     <div className="flex items-center gap-2">
//                       <span className="text-indigo-600 font-bold text-sm">
//                         {url.shortUrl}
//                       </span>
//                       <button className="p-1.5 text-slate-300 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all">
//                         <Copy size={14} />
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-8 py-6">
//                     <div className="flex items-center gap-2 text-slate-700 font-bold">
//                       <span className="text-sm">{url.clicks}</span>
//                       <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden md:block">
//                         <div
//                           className="bg-indigo-500 h-full"
//                           style={{ width: "60%" }}
//                         ></div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-8 py-6">
//                     <span
//                       className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight ${
//                         url.status === "Active"
//                           ? "bg-emerald-100 text-emerald-700"
//                           : "bg-slate-100 text-slate-500"
//                       }`}
//                     >
//                       {url.status}
//                     </span>
//                   </td>
//                   <td className="px-8 py-6">
//                     <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
//                       <Calendar size={14} />
//                       {url.createdAt}
//                     </div>
//                   </td>
//                   <td className="px-8 py-6 text-right">
//                     <div className="flex justify-end gap-2">
//                       <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
//                         <ExternalLink size={18} />
//                       </button>
//                       <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Reusable Stat Card Component
// const StatCard = ({ icon, label, value, color, bg }) => (
//   <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-5 hover:border-indigo-200 transition-all">
//     <div
//       className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center`}
//     >
//       {icon}
//     </div>
//     <div>
//       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
//         {label}
//       </p>
//       <h3 className="text-2xl font-black text-slate-900 mt-0.5">{value}</h3>
//     </div>
//   </div>
// );

// export default DashContent;

import React, { useEffect, useState } from "react";
import {
  Search,
  Copy,
  Zap,
  Globe,
  ChevronRight,
  X,
  Calendar,
  Check,
  Delete,
  CheckCircle2,
} from "lucide-react";
import { urlServices } from "../../api";
import { Link } from "react-router";
import DashFooter from "./Footer";
import DashHeader from "./DashHeader";
import VisitModal from "./VisitModal";
import Button from "../commonUi/Button";

const DashContent = () => {
  const [copiedId, setCopiedId] = useState(null); // Tracks which ID is currently "copied"
  const [data, setData] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null);
  // Helper to format the UTC string into a readable local format
  const formatLocalTime = (utcString) => {
    return new Date(utcString).toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await urlServices.getUrls();
        console.log("resData :", res);
        setData(res);
      } catch (error) {
        const message = error.response?.data?.message;
        console.log("error :", message);
      }
    })();
  }, []);

  const handleCopy = (shortUrl, id) => {
    const fullUrl = `http://localhost:8000/${shortUrl}`;
    navigator.clipboard.writeText(fullUrl);

    setCopiedId(id);
    // Reset the icon back to a copy icon after 2 seconds
    setTimeout(() => setCopiedId(null), 2000);
  };

  // url delete
  const deleteUrl = async (id) => {
    // confirmation with user
    // if (!window.confirm("Delete this link forever")) return;

    try {
      const response = await urlServices.deleteUrl(id);
      console.log("Server Response:", response);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log("error :", error);
      alert(error);
    }
  };

  // ......trimming Link logics
  const [longUrl, setlongUrl] = useState("");
  const [error, setError] = useState("");

  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false); // Handles the "Copied!" button state

  // Simulate the shortening process
  const handleTrim = async () => {
    try {
      if (!longUrl) return alert("Please paste a link first!");
      const res = await urlServices.trimUrl(longUrl);
      console.log(res);

      // 1. Update the list state immediately so it's "Real-Time"
      // We spread the previous data and add the new object at the beginning
      setData((prevData) => [res, ...prevData]);
      setError("");
      setShortenedUrl(`http://localhost:8000/${res.shortUrl}`);
      setlongUrl("");
    } catch (error) {
      console.log("error", error);
      setError(error);
      setShortenedUrl("");
    }

    setCopied(false); // Reset copy state for the new link
  };

  // Copy to clipboard logic
  const TrimmedLinkCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset button after 2 seconds
  };
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* 1. Integrated Search & Create Bar */}
      <div className="relative group mb-5">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm">
          <div className="flex items-center flex-1 px-4">
            <Search className="text-slate-400 mr-3" size={20} />
            <input
              value={longUrl}
              onChange={(e) => setlongUrl(e.target.value)}
              type="text"
              placeholder="Search or paste a long URL to shorten..."
              className="outline-none w-full bg-transparent border-none focus:ring-0 text-slate-700 font-medium placeholder:text-slate-400"
            />
          </div>
          <Button
            onClick={handleTrim}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all"
          >
            TrimLink <Zap fill="currentColor" />
          </Button>
        </div>
      </div>
      {/* New Result Component (Conditional Rendering) */}
      {shortenedUrl && (
        <div className="my-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <CheckCircle2 className="text-indigo-600" size={20} />
              </div>
              <a
                to={`${shortenedUrl}`}
                target="_blank"
                className="font-medium text-indigo-900 truncate"
                rel="noopener noreferrer"
              >
                {shortenedUrl}
              </a>
            </div>

            <Button
              variant={copied ? "primary" : "secondary"}
              size="sm"
              onClick={TrimmedLinkCopy}
              className="shrink-0"
            >
              {copied ? (
                <>
                  <Check size={16} /> Copied
                </>
              ) : (
                <>
                  <Copy size={16} /> Copy
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* 2. Filter & View Header */}
      <DashHeader />

      {/* 3. The Activity Feed */}
      <div className="space-y-3">
        {data?.map((url, i) => (
          <div
            key={url._id}
            className="group flex items-center justify-between bg-white border border-slate-100 p-4 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer"
          >
            {/* Left Side: Identity */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                <Globe size={22} />
              </div>
              <div>
                <Link
                  to={`http://localhost:8000/${url?.shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors"
                >
                  {url?.longUrl}
                </Link>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-0.5">
                  <Link
                    to={`http://localhost:8000/${url?.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`http://localhost:8000/${url?.shortUrl}`}
                  </Link>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    {/* <Activity size={12} /> {url.clicks} clicks */}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Actions & Trend */}
            <div className="flex items-center gap-6">
              <div className=" flex flex-col  items-center text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Visits
                </p>
                <p className="   text-base font-bold text-emerald-700 hover:bg-emerald-50 px-2 rounded-md transition-colors">
                  {url?.visitHistory?.length || 0}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  icon={Delete}
                  className="cursor-pointer"
                  size="sm"
                  variant="danger"
                  onClick={() => deleteUrl(url._id)}
                >
                  {/* <Delete /> */}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  // icon={Check}
                  onClick={() => handleCopy(url.shortUrl, url._id)}
                  className={`p-2 rounded-lg transition-all ${
                    copiedId === url._id
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-slate-300 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {copiedId === url._id ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </Button>
                <Button
                  size="sm"
                  icon={ChevronRight}
                  onClick={() => setSelectedHistory(url)} // Open modal with this URL's data
                  className="cursor-pointer border hover:scale-110 duration-500 ease-in-out p-2 text-slate-300 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                >
                  {/* <ChevronRight size={18} /> */}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Pro Tip Footer */}
      <DashFooter />
      {/* --- VISIT HISTORY MODAL --- */}
      <VisitModal
        selectedHistory={selectedHistory}
        setSelectedHistory={setSelectedHistory}
        formatLocalTime={formatLocalTime}
      />
    </div>
  );
};

export default DashContent;
