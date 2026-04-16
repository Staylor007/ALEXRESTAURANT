export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🍽️ Bienvenido a Delivery App</h1>
      <p>Aplicación para usuarios - Busca restaurantes y realiza pedidos</p>
      <div style={{ marginTop: "20px", backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
        <h2>Características:</h2>
        <ul>
          <li>Explorar restaurantes</li>
          <li>Ver menús y precios</li>
          <li>Realizar pedidos</li>
          <li>Rastrear entregas en tiempo real</li>
          <li>Calificar repartidores</li>
        </ul>
      </div>
    </main>
  );
}
