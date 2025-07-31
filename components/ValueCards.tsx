export default function ValueCards() {
    const values = [
      {
        title: 'Excelencia',
        description: 'Tratamientos de la más alta calidad',
        emoji: '✨',
      },
      {
        title: 'Empatía',
        description: 'Atención personalizada y comprensiva',
        emoji: '💜',
      },
      {
        title: 'Bienestar',
        description: 'Enfoque holístico para tu salud',
        emoji: '🌿',
      },
    ];
  
      return (
    <section className="pb-1 px-2 max-w-6xl mx-auto">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full max-w-4xl">
          {values.map(({ title, description, emoji }) => (
            <div
              key={title}
              className="bg-brand-cream rounded-xl shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] transition-transform duration-200 text-center p-2 flex flex-col items-center border border-brand-lavender/20"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-lavender/20 mb-1">
                <span className="text-lg">{emoji}</span>
              </div>
              <h3 className="text-brand-purple font-semibold text-xs mb-1">{title}</h3>
              <p className="text-brand-purple/80 text-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}