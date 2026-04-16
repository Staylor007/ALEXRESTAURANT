export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚚 App Repartidores</h1>
      <p>Aplicación para repartidores del servicio de delivery</p>
      <div style={{ marginTop: "20px", backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
        <h2>Funcionalidades:</h2>
        <ul>
          <li>Ver pedidos disponibles</li>
          <li>Aceptar/Rechazar entregas</li>
          <li>GPS en tiempo real</li>
          <li>Historial de entregas</li>
          <li>Ganancias y estadísticas personales</li>
        </ul>
      </div>
    </main>
  );
}
