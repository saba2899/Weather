
interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

export function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/10 backdrop-blur-xl border border-red-500/20 text-red-300 px-6 py-4 rounded-2xl relative shadow-xl">
      <span className="block font-light">{message}</span>
      <button
        className="absolute top-2 right-3 text-red-400 hover:text-red-300 transition-colors"
        onClick={onDismiss}
      >
        <span className="text-xl">&times;</span>
      </button>
    </div>
  );
}
