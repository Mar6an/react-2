import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (password.length < 6) {
      alert("Por favor, el campo debe tener al menos 6 caracteres.");
      return;
    }
    // Aquí puedes agregar lógica para autenticar
    alert("Inicio de sesión enviado");
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
        <p className="text-center mt-3">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
