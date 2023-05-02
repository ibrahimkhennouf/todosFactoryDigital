export default function Button({ type, text }: { type?: any; text: string }) {
  return (
    <button
      type={type}
      className="p-2 outline-none bg-blue-500 text-white ml-4 rounded-md"
    >
      {text}
    </button>
  );
}
