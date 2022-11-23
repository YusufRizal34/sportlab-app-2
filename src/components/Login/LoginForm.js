import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setAccessToken, errMessage }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    setAccessToken(userData);
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3">
            <label htmlFor="login" className="subtitle">
              MASUK
            </label>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  alue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <p className="text-danger">{errMessage}</p>
              </div>
              <button type="submit" className="btn btn-login w-100">
                Login
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-sm-12 mb-3">
            <label htmlFor="registrasi" className="subtitle">
              BUAT AKUN
            </label>
            <label htmlFor="registrasi">
              Sangat mudah. Masukkan alamat email Anda, isi formulir di halaman
              berikutnya dan nikmati keuntungan dari memiliki akun, misalnya:
            </label>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="bi bi-check-lg"></i> Produk dengan harga spesial
                sepanjang tahun, setiap hari.
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-lg"></i> Akses awal ke SALE
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-lg"></i> Tinjauan informasi personal
                Anda
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-lg"></i> Lacak & cek pesanan Anda
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-lg"></i> Kelola Wishlist
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-lg"></i> Checkout lebih cepat
              </li>
            </ul>
            <button onClick={register} className="btn btn-register w-100">
              Registrasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
