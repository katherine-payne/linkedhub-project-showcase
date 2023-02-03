export default function UserProfile() {
  return (
    <div className="grid grid-cols-5">
      <div id="infoFeed" className="col-span-2">
        <p>Name</p>
        <p>Contact Info</p>
        <p>Experience</p>
        <p>Education</p>
        <p>Skills</p>
      </div>
      <div id="projectFeed" className="col-span-3">
        {[...Array(10)].map((x, i) => (
          <p>Project</p>
        ))}
      </div>
    </div>
  );
}
