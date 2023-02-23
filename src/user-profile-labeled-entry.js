export default function UserProfileLabeledEntry({ label, entry }) {
  return (
    <p>
      <span className="text-secondary">{label}: </span>
      {entry}
    </p>
  );
}
