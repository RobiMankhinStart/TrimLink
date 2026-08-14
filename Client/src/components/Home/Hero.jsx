import React, { useState } from "react";

import { Check, LinkIcon, Copy, CheckCircle2 } from "lucide-react";
import { urlServices } from "../../api";
import { Link } from "react-router";
import Button from "../commonUi/Button";
import Input from "../commonUi/Input";
import { toast, Zoom } from "react-toastify";

const Hero = () => {
  const [longUrl, setlongUrl] = useState("");
  const [error, setError] = useState("");

  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false); // Handles the "Copied!" button state

  // Simulate the shortening process
  const handleTrim = async () => {
    try {
      if (!longUrl)
        return toast.warn("Please paste a link first!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
          transition: Zoom,
        });
      const res = await urlServices.trimUrl(longUrl);
      console.log(res);
      setError("");
      setShortenedUrl(`http://localhost:8000/${res.shortUrl}`);
    } catch (error) {
      console.log("error", error);
      setError(error);
      setShortenedUrl("");
    }

    setCopied(false); // Reset copy state for the new link
  };

  // Copy to clipboard logic
  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset button after 2 seconds
  };

  return (
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* ... Badge and Title stay the same ... */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          Now with Advanced Analytics
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Shorten your links, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            expand your reach.
          </span>
        </h1>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Trimmr is the professional way to shorten, manage, and track your
          links. Beautifully simple, incredibly powerful, and completely free.
        </p>
        <p className="h-7 py-1 text-sm text-red-600 font-semibold">{error}</p>
        {/* Main Input Tool */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 items-end">
            <div className="flex-1">
              <Input
                icon={LinkIcon}
                type="url"
                value={longUrl}
                onChange={(e) => setlongUrl(e.target.value)}
                placeholder="Paste your long link here..."
                containerClassName="w-full"
              />
            </div>
            <Button size="lg" className="md:w-auto w-full" onClick={handleTrim}>
              Trim Link
            </Button>
          </div>

          {/* New Result Component (Conditional Rendering) */}
          {shortenedUrl && (
            <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between gap-4 group hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
                <div className="flex items-center gap-3 overflow-hidden flex-1">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-indigo-600" size={20} />
                  </div>
                  <a
                    href={shortenedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-900 hover:text-indigo-600 truncate cursor-pointer transition-colors"
                  >
                    {shortenedUrl}
                  </a>
                </div>

                <Button
                  variant={copied ? "primary" : "secondary"}
                  size="sm"
                  onClick={handleCopy}
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

          <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" /> No credit card
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" /> Instant redirect
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-green-500" /> QR codes
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
