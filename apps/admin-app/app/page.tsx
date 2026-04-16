export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>📊 Panel de Administración</h1>
      <p>Aplicación para administradores del servicio de delivery</p>
      <div style={{ marginTop: "20px", backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
        <h2>Funcionalidades:</h2>
        <ul>
          <li>Gestionar restaurantes</li>
          <li>Ver estadísticas y reportes</li>
          <li>Gestionar pedidos</li>
          <li>Administrar usuarios y repartidores</li>
          <li>Configurar comisiones</li>
        </ul>
      </div>
    </main>
  );
}
