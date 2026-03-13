export default function SectionHeading({ icon, title, style }) {
  return (
    <div className="section-heading" style={style}>
      {icon}
      {title}
    </div>
  );
}
