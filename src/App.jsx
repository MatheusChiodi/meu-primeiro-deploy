export default function Card() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10" />

        <h2 className="mb-2 text-2xl font-bold text-gray-800 transition-all duration-300">
          Bora aprender o primeiro deploy? 🚀
        </h2>

        <p className="mb-4 leading-relaxed text-gray-600 transition-opacity duration-300 group-hover:opacity-90">
          Aqui você vai aprender, de forma simples e prática, como publicar seu
          primeiro projeto no GitHub com React e Tailwind.
        </p>

        <a
          href="https://www.youtube.com/@MChiodiDev"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button className="w-full rounded-lg bg-red-500 px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/30 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-500/50">
            Assistir no YouTube 📺
          </button>
        </a>
      </div>
    </div>
  );
}
