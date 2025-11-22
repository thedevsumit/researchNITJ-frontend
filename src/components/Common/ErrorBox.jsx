export default function ErrorBox({ message }) {
  if (!message) return null;

  return (
    <div className="bg-errorRed/20 border border-errorRed text-errorRed p-3 rounded-lg my-3">
      {message}
    </div>
  );
}
