export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex gap-6 mt-10 items-center justify-center">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-5 py-3 rounded-lg bg-card/50 border border-border text-foreground
                   disabled:opacity-30 hover:border-primary/60 hover:text-primary
                   transition-all duration-300"
      >
        ← Previous
      </button>

      <span className="text-primary font-semibold tracking-wide">
        Page {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-5 py-3 rounded-lg bg-card/50 border border-border text-foreground
                   disabled:opacity-30 hover:border-primary/60 hover:text-primary
                   transition-all duration-300"
      >
        Next →
      </button>
    </div>
  );
}
