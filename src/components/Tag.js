import "./Tag.css";
export default function Tag({ tag }) {
  const tagHighlight = tag === "admin";
  const tagClass = tagHighlight ? "tag tag--highlight" : "tag";
  return <li className={tagClass}>{tag}</li>;
}
