import BDF from "./tabs/curriculum/BDF";


export default function blockdevfun (){
   const imgPath = "https://kairaablockchainacademy.com/static/media/Teacher1.abb35f7696f0de780a3f.png";

  return (
    <>
     <section className="px-6 py-8">
      <div
        className="relative mx-auto max-w-6xl rounded-xl overflow-hidden shadow-2xl"
        style={{
          // base background behind everything
          background:
            "linear-gradient(90deg,#071a4a 0%, #1a4db0 30%, #2b6ae0 60%, #2c6be3 100%)",
        }}
      >
        {/* subtle inner glossy border */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            boxShadow:
              "inset 0 4px 10px rgba(255,255,255,0.03), inset 0 -8px 20px rgba(0,0,0,0.35)",
            zIndex: 0,
          }}
        />

        {/* GLOBAL GRADIENT FILL: pure gradient (NO image) that grows left->right across the entire hero */}
        <div
          aria-hidden
          className="global-fill pointer-events-none"
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            height: "75%",
            width: "0%", // will animate to 100%
            zIndex: 1, // above base gradient but below content (content uses z-10)
            background:
              "linear-gradient(90deg,rgba(59,128,245,1) 0%, rgba(53,115,220,1) 18%, rgba(37,80,154,1) 40%, rgba(22,48,92,1) 70%, rgba(1,32,97,1) 100%)",
            // add subtle diagonal sheen to the moving gradient:
            backgroundBlendMode: "normal",
            opacity: 0.98,
            filter: "blur(6px)",
            transformOrigin: "left center",
            animation: "globalFillGrow 4.2s cubic-bezier(.2,.9,.2,1) 0.12s forwards, gradientSweep 3.6s linear 0.12s infinite",
            borderRadius: "12px",
          }}
        />

        {/* Main content (z-10 so it sits above the gradient) */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 px-8 py-12">
          {/* Left column */}
          <div className="flex-1 text-white relative overflow-hidden rounded-lg p-6">
            {/* subtle dark overlay so text remains readable */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                background:
                  "linear-gradient(90deg, rgba(7,26,74,0.28) 0%, rgba(10,40,110,0.12) 100%)",
                pointerEvents: "none",
              }}
            />

            <div className="relative z-10">
              <h1
                className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight mb-6 whitespace-nowrap overflow-hidden"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="inline-block typing"> Blockchain developer fundamental</span>
              </h1>

              <blockquote className="max-w-lg text-lg md:text-xl font-semibold leading-snug mb-8">
                “Embark on Your Journey to Master Blockchain Technology and Unlock New Career Opportunities in the Digital Economy”
              </blockquote>

              <div className="flex items-center gap-6">
                <button
                  className="relative inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white text-lg font-semibold hover:cursor-pointer hover:bg-white/10 transition"
                  aria-label="Free Course CTA"
                >
                  <span>FREE</span>
                  <span className="absolute -right-4 -top-4 w-3 h-3 rounded-full bg-white/90 shadow-sm transform rotate-12" />
                </button>

                <h4 className="text-sm text-white/80 underline decoration-white/30"> 
                  ** START NOW **
                </h4>
              </div>
            </div>
          </div>

          {/* Right image card */}
          <div className="w-72 relative flex-shrink-0 mt-6 md:mt-0">
            {/* glow behind card */}
            <div
              className="absolute inset-0 -right-6 -bottom-6 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.25), rgba(59,130,246,0.13) 20%, transparent 45%)",
                filter: "blur(28px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* card shell (transparent so global-fill shows behind it) */}
            <div
              className="relative z-10 rounded-xl overflow-hidden shadow-lg border border-white/30"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              {/* actual image stays above the gradient (so gradient only fills background) */}
              <img
                src={imgPath}
                alt="Hero Illustration"
                className="w-full h-full object-contain block"
                style={{ display: "block", background: "white" }}
              />
            </div>
          </div>
        </div>

        {/* bottom accent bar */}
        <div className="h-3 bg-gradient-to-r from-white/5 via-white to-white/5" />
      </div>

      {/* Inline animations (move to global CSS or tailwind.config if preferred) */}
      <style>{`
        /* Typing animation */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blinkCaret {
          50% { border-color: transparent; }
        }
        .typing {
          display: inline-block;
          white-space: nowrap;
          
          border-right: 5px solid rgba(234, 179, 8, 0.95);
          width: 0;
          animation:
            typing 2.6s  0.2s,
            blinkCaret 0.8s  infinite 2.9s;
        }

        /* Grow the global gradient fill from left -> right to cover the entire hero */
        @keyframes globalFillGrow {
          0% { width: 0%; opacity: 0; transform: translateX(0); }
          18% { opacity: 0.6; }
          60% { width: 70%; opacity: 0.92; }
          100% { width: 100%; opacity: 0.99; }
        }

        /* subtle diagonal sweep inside the fill to give motion */
        @keyframes gradientSweep {
          0% {
            background-position: 0% 50%;
            transform: translateX(0);
          }
          50% {
            background-position: 30% 50%;
            transform: translateX(0.6%);
          }
          100% {
            background-position: 60% 50%;
            transform: translateX(0);
          }
        }

        /* responsive tweaks */
        @media (max-width: 640px) {
          .typing {
            animation: typing 2.0s  0.12s, blinkCaret 0.8s infinite 2.2s;
          }
        }
      `}</style>
    </section>
    <BDF/>
    </>
    );
}