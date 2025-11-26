import React, { useEffect, useRef, useState } from "react";
import OverviewBDP from "../OverviewBDP";
import SyllabusBDP from "../SyllabusBDP";



export default function BDPTabs({
  tabs = [
    { id: "overview", label: "Overview", content:  <OverviewBDP /> },
    { id: "syllabus", label: "Syllabus", content: <SyllabusBDP /> },
  ],
  defaultIndex = 0,
  className = "",
}) {
  const [active, setActive] = useState(defaultIndex);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);
  const listRef = useRef(null);

  // measure active tab to position indicator
  useEffect(() => {
    const el = tabsRef.current[active];
    if (!el) return;
    const parentRect = listRef.current?.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - (parentRect?.left ?? 0) + (listRef.current?.scrollLeft ?? 0);
    setIndicatorStyle({ left, width: rect.width });
  }, [active, tabs]);

  // Re-measure on window resize
  useEffect(() => {
    function handleResize() {
      const el = tabsRef.current[active];
      if (!el || !listRef.current) return;
      const parentRect = listRef.current.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      const left = rect.left - parentRect.left + listRef.current.scrollLeft;
      setIndicatorStyle({ left, width: rect.width });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  // keyboard navigation (ArrowLeft/Right, Home/End)
  function onKeyDown(e) {
  const isPlainKey = !e.altKey && !e.metaKey && !e.ctrlKey && !e.shiftKey;

  if (isPlainKey && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
    e.preventDefault();

    if (e.key === "ArrowRight") {
      setActive((s) => Math.min(s + 1, tabs.length - 1));
    } else if (e.key === "ArrowLeft") {
      setActive((s) => Math.max(s - 1, 0));
    } else if (e.key === "Home") {
      setActive(0);
    } else if (e.key === "End") {
      setActive(tabs.length - 1);
    }
  }
}


  return (
    <div className="">
    <div className={`w-full ${className}`}>
      {/* Tab list */}
      <div className="relative">
        <div
          ref={listRef}
          role="tablist"
          aria-label="Custom tabs"
          className="flex overflow-auto no-scrollbar justify-around"
          onKeyDown={onKeyDown}
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => (tabsRef.current[i] = el)}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active === i}
              aria-controls={`panel-${t.id}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative inline-flex items-center whitespace-nowrap rounded-2xl px-4 py-2 text-lg font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400
                ${
                  active === i
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }
              `}
            >
              {t.label}
              {/* optional ripple / click feedback element (purely decorative) */}
            </button>
          ))}
        </div>

        {/* animated indicator */}
        <div
          aria-hidden
          className="absolute bottom-0 h-0.5 bg-indigo-600 rounded-full transition-all duration-200"
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: indicatorStyle.width,
          }}
        />
      </div>

      {/* Panels */}
      <div className="mt-6">
        {tabs.map((t, i) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={i !== active}
            className={`outline-none focus:outline-none ${i === active ? "block" : "hidden"}`}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}