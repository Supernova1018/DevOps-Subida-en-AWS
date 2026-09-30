import { useState } from "react";

const students = [
  { name: "Estudiante 1", role: "Desarrollo frontend" },
  { name: "Estudiante 2", role: "Integración y pruebas" },
  { name: "Estudiante 3", role: "Cloud / DevOps" },
];

function App() {
  const [deployed, setDeployed] = useState(false);

  return (
    <div className="app">
      <style>{`
        :root { font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #172033; background: #eef3f8; font-synthesis: none; text-rendering: optimizeLegibility; }
        * { box-sizing: border-box; }
        body { margin: 0; min-width: 320px; background: radial-gradient(circle at top right, rgba(255,153,0,.18), transparent 32%), linear-gradient(135deg, #eef3f8 0%, #f8fafc 55%, #e8f0f8 100%); }
        button { font: inherit; }
        .app { min-height: 100vh; }
        .hero { color: white; background: linear-gradient(135deg, #111827 0%, #172554 58%, #0f4c5c 100%); padding: 28px 20px 76px; }
        .nav, .hero-content, .content { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
        .nav { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .brand { display: flex; align-items: center; gap: 12px; font-weight: 800; letter-spacing: .2px; }
        .brand-mark { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; background: #ff9900; color: #111827; font-weight: 900; }
        .status { border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.08); border-radius: 999px; padding: 8px 12px; font-size: .86rem; }
        .hero-content { padding-top: 70px; }
        .eyebrow { color: #ffd28a; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; font-size: .78rem; }
        h1 { max-width: 820px; margin: 12px 0 16px; font-size: clamp(2.2rem, 6vw, 4.6rem); line-height: .98; letter-spacing: -.045em; }
        .lead { max-width: 720px; color: #dbeafe; font-size: clamp(1rem, 2vw, 1.2rem); line-height: 1.7; margin: 0; }
        .actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
        .button { border: 0; border-radius: 12px; padding: 12px 18px; cursor: pointer; font-weight: 800; transition: transform .15s ease, box-shadow .15s ease; }
        .button:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(0,0,0,.16); }
        .button-primary { background: #ff9900; color: #111827; }
        .button-secondary { background: rgba(255,255,255,.1); color: white; border: 1px solid rgba(255,255,255,.25); }
        .content { margin-top: -44px; padding-bottom: 48px; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .card { background: rgba(255,255,255,.94); border: 1px solid #dbe3ec; border-radius: 18px; padding: 22px; box-shadow: 0 14px 38px rgba(15,23,42,.08); }
        .card h2, .card h3 { margin-top: 0; }
        .metric { font-size: 2rem; font-weight: 900; color: #172554; }
        .muted { color: #64748b; line-height: 1.6; }
        .pipeline { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 20px; }
        .stage { position: relative; padding: 16px 10px; text-align: center; border-radius: 14px; background: #f1f5f9; border: 1px solid #dbe3ec; font-size: .86rem; font-weight: 800; }
        .stage::after { content: "→"; position: absolute; right: -10px; top: 50%; transform: translateY(-50%); color: #94a3b8; z-index: 2; }
        .stage:last-child::after { display: none; }
        .student-list { display: grid; gap: 10px; margin-top: 16px; }
        .student { display: flex; justify-content: space-between; gap: 12px; padding: 13px 14px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; }
        .student strong { display: block; }
        .student span { color: #64748b; font-size: .86rem; }
        .success { margin-top: 16px; padding: 13px 15px; border-radius: 12px; background: #ecfdf5; color: #166534; border: 1px solid #bbf7d0; font-weight: 700; }
        .footer { text-align: center; color: #64748b; padding: 22px 16px 40px; font-size: .9rem; }
        @media (max-width: 820px) {
          .grid { grid-template-columns: 1fr; }
          .pipeline { grid-template-columns: 1fr; }
          .stage::after { content: "↓"; right: auto; top: auto; bottom: -16px; left: 50%; transform: translateX(-50%); }
          .stage:last-child::after { display: none; }
        }
        @media (max-width: 560px) {
          .nav { align-items: flex-start; }
          .status { display: none; }
          .hero-content { padding-top: 52px; }
          .student { flex-direction: column; }
        }
      `}</style>

      <header className="hero">
        <nav className="nav">
          <div className="brand"><div className="brand-mark">AWS</div><span>Laboratorio DevOps</span></div>
          <div className="status">React + Vite · AWS Amplify</div>
        </nav>
        <div className="hero-content">
          <div className="eyebrow">Despliegue continuo</div>
          <h1>Del commit a una aplicación web publicada.</h1>
          <p className="lead">Aplicación demostrativa del laboratorio: GitHub recibe el código, AWS Amplify ejecuta el build y publica automáticamente la versión de producción de nuestra aplicación React.</p>
          <div className="actions">
            <button className="button button-primary" onClick={() => setDeployed(true)}>Simular despliegue</button>
            <button className="button button-secondary" onClick={() => window.open("https://aws.amazon.com/amplify/hosting/", "_blank")}>Conocer Amplify</button>
          </div>
          {deployed && <div className="success">✓ Despliegue simulado correctamente. Ahora realiza un commit, haz push a main y observa el nuevo build en Amplify.</div>}
        </div>
      </header>

      <main className="content">
        <section className="grid">
          <article className="card"><div className="metric">01</div><h2>Repositorio</h2><p className="muted">El código fuente se administra con Git y se publica en GitHub mediante commits y ramas.</p></article>
          <article className="card"><div className="metric">02</div><h2>Build</h2><p className="muted">Amplify instala las dependencias y ejecuta <strong>npm run build</strong> para generar la versión de producción.</p></article>
          <article className="card"><div className="metric">03</div><h2>Deploy</h2><p className="muted">La salida de Vite se publica como aplicación web accesible desde Internet.</p></article>
        </section>

        <section className="card" style={{ marginTop: 18 }}>
          <h2>Pipeline del laboratorio</h2><p className="muted">Cada etapa representa una parte del flujo CI/CD que debes demostrar.</p>
          <div className="pipeline">{["Git", "GitHub", "Build", "Deploy", "Web"].map(stage => <div className="stage" key={stage}>{stage}</div>)}</div>
        </section>

        <section className="card" style={{ marginTop: 18 }}>
          <h2>Equipo del proyecto</h2><p className="muted">Reemplaza estos nombres por los integrantes reales del grupo.</p>
          <div className="student-list">{students.map(student => <div className="student" key={student.name}><div><strong>{student.name}</strong><span>{student.role}</span></div><span>React</span></div>)}</div>
        </section>

        <section className="grid" style={{ marginTop: 18 }}>
          <article className="card"><h3>Tecnologías</h3><p className="muted">React · Vite · Git · GitHub · AWS Amplify</p></article>
          <article className="card"><h3>Resultado esperado</h3><p className="muted">Una URL pública que muestre esta aplicación y se actualice después de cada push a la rama conectada.</p></article>
          <article className="card"><h3>Prueba CI/CD</h3><p className="muted">Cambia cualquier texto, haz commit y push, y verifica el nuevo build en AWS Amplify.</p></article>
        </section>
      </main>
      <footer className="footer">Laboratorio DevOps · React + Vite · Despliegue continuo con AWS Amplify</footer>
    </div>
  );
}

export default App;
