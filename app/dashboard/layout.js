export default function DashbordLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <p>Dashboard Menu</p>
      </aside>

      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
}
