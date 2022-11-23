import React, { useState } from "react";

export default function RegisterForm({ setRegisterAccount, errMessage }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [aggreement, setAggreement] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      confirmPassword,
    };
    setRegisterAccount(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3">
            <label htmlFor="register" className="subtitle">
              REGISTER
            </label>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="username"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  value={aggreement}
                  onChange={(e) => setAggreement(e.target.value)}
                  required
                />
                &nbsp; I agree all statements in
                <span className="text-decoration-underline ml-1">
                  Terms of service
                </span>
              </label>
            </div>
            <div className="mb-3">
              <p className="text-danger">{errMessage}</p>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </div>

          <div className="col-lg-6 col-sm-12 mb-3">
            <label htmlFor="registrasi">BUAT AKUN</label>
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
          </div>
        </div>
      </form>
    </div>
  );
}
