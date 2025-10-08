import NavBar from "./NavBar";

export default function Header({ title }) {
  return (
    <div className="page-header">
      <h1 className="page-title">{title}</h1>

      <div className="nav">
        <NavBar />
      </div>
    </div>
  );
}
