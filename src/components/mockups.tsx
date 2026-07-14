import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  Home,
  LayoutDashboard,
  Mail,
  Search,
  Settings,
  Users,
} from "lucide-react";

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60"
    >
      <div className="flex h-[420px]">
        {/* Sidebar */}
        <div className="flex w-14 shrink-0 flex-col items-center gap-4 border-r border-gray-100 bg-gray-50 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-loft-dark text-xs font-bold text-white">
            L
          </div>
          {[LayoutDashboard, Building2, Users, Mail, BarChart3, Settings].map(
            (Icon, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 0 ? "bg-violet-100 text-violet-600" : "text-gray-400"}`}
              >
                <Icon size={16} />
              </div>
            ),
          )}
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-400">
              <Search size={12} />
              Search buyers...
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Table area */}
            <div className="flex-1 overflow-auto p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">
                  Top Buyers — Mandate #2847
                </h3>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                  24 matches
                </span>
              </div>

              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] uppercase tracking-wide text-gray-400">
                    <th className="pb-2 pr-4 font-medium">Buyer</th>
                    <th className="pb-2 pr-4 font-medium">Score</th>
                    <th className="pb-2 pr-4 font-medium">Intent</th>
                    <th className="pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ["Blackstone Real Estate", "94", "High", "Ready"],
                    ["Brookfield Asset Mgmt", "89", "High", "Ready"],
                    ["CBRE Investment", "82", "Medium", "Review"],
                    ["Hines Europe", "78", "Medium", "Review"],
                    ["Prologis Capital", "71", "Low", "Pending"],
                  ].map(([name, score, intent, status], i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="py-2.5 pr-4 font-medium">{name}</td>
                      <td className="py-2.5 pr-4">
                        <span className="rounded bg-violet-50 px-1.5 py-0.5 font-semibold text-violet-600">
                          {score}
                        </span>
                      </td>
                      <td className="py-2.5 pr-4 text-gray-500">{intent}</td>
                      <td className="py-2.5">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            status === "Ready"
                              ? "bg-emerald-50 text-emerald-600"
                              : status === "Review"
                                ? "bg-amber-50 text-amber-600"
                                : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mini chart panel */}
            <div className="hidden w-48 shrink-0 border-l border-gray-100 p-4 sm:block">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wide text-gray-400">
                Buyer Activity
              </p>
              <div className="flex h-32 items-end gap-1.5">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-violet-500 to-violet-300"
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function BuyerProfileDashboard() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
      <div className="flex h-[380px]">
        <div className="flex w-14 shrink-0 flex-col items-center gap-4 border-r border-gray-100 bg-gray-50 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-loft-dark text-xs font-bold text-white">
            L
          </div>
          {[Home, Users, Mail, BarChart3].map((Icon, i) => (
            <div
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 1 ? "bg-violet-100 text-violet-600" : "text-gray-400"}`}
            >
              <Icon size={16} />
            </div>
          ))}
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                  Buyer Profile
                </p>
                <h3 className="text-lg font-bold text-gray-900">
                  Blackstone Real Estate
                </h3>
                <p className="text-xs text-gray-500">
                  Institutional investor · Europe · Office & Logistics
                </p>
              </div>
              <div className="rounded-lg bg-violet-600 px-3 py-1.5 text-center">
                <p className="text-[10px] text-violet-200">Match Score</p>
                <p className="text-xl font-bold text-white">94</p>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {[
                "Office",
                "€50M+",
                "DACH Region",
                "Active Buyer",
                "Q2 Target",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["Portfolio Size", "€12.4B"],
                ["Avg. Deal Size", "€68M"],
                ["Recent Deals", "14"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-3"
                >
                  <p className="text-[10px] text-gray-400">{label}</p>
                  <p className="text-sm font-bold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-56 shrink-0 border-l border-gray-100 bg-gray-50/50 p-4">
            <p className="mb-3 text-xs font-semibold text-gray-800">
              Reasons for Selection
            </p>
            <ul className="space-y-2.5">
              {[
                "Active in target geography",
                "Portfolio gap in office assets",
                "Recent fund raise completed",
                "Historical deal velocity high",
                "Intent signal detected last week",
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-[11px] text-gray-600">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4L3.5 6L6.5 2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowDashboard() {
  const steps = [
    { label: "Buyer identified", time: "0:00", done: true },
    { label: "Profile enriched", time: "0:02", done: true },
    { label: "Outreach drafted", time: "0:05", done: true },
    { label: "Email sent", time: "0:08", done: true },
    { label: "Follow-up scheduled", time: "Day 3", done: true },
    { label: "Response tracked", time: "Pending", done: false },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
      <div className="border-b border-gray-100 px-5 py-3">
        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
          Outreach Workflow
        </p>
        <h3 className="text-sm font-bold text-gray-900">
          Mandate #2847 — Automated Sequence
        </h3>
      </div>
      <div className="p-5">
        <div className="relative space-y-0">
          {steps.map((step, i) => (
            <div key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-[11px] top-6 h-full w-px bg-gray-200" />
              )}
              <div
                className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  step.done
                    ? "bg-emerald-500 text-white"
                    : "border-2 border-gray-200 bg-white"
                }`}
              >
                {step.done && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
              <div className="flex flex-1 items-center justify-between pt-0.5">
                <span className="text-sm font-medium text-gray-800">
                  {step.label}
                </span>
                <span className="text-xs text-gray-400">{step.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileMockup() {
  return (
    <div className="relative mx-auto w-[260px]">
      <div className="absolute -inset-16 iridescent-glow" />
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-900" />
        <div className="bg-white pt-8">
          <div className="px-4 pb-3">
            <p className="text-[10px] font-medium text-gray-400">LOFT AI</p>
            <h4 className="text-sm font-bold text-gray-900">Buyer Score</h4>
          </div>

          <div className="mx-4 mb-4 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-4 text-white">
            <p className="text-[10px] text-violet-200">Top Match</p>
            <p className="text-lg font-bold">Blackstone RE</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-3xl font-extrabold">94</span>
              <span className="mb-1 text-xs text-violet-200">/ 100</span>
            </div>
          </div>

          <div className="px-4 pb-6">
            <p className="mb-2 text-xs font-semibold text-gray-800">
              Top Buyers
            </p>
            {[
              ["Blackstone RE", "94"],
              ["Brookfield", "89"],
              ["CBRE Investment", "82"],
              ["Hines Europe", "78"],
            ].map(([name, score], i) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-gray-50 py-2.5 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-500">
                    {i + 1}
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {name}
                  </span>
                </div>
                <span className="rounded bg-violet-50 px-1.5 py-0.5 text-[10px] font-bold text-violet-600">
                  {score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
