export default function UserProfileLabeledEntry({ label, entry }) {
  return (
    <p>
      <span className="text-slate-500">{label}: </span>
      {entry}
    </p>
  );
}
