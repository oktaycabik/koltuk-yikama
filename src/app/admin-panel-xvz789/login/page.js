'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaLock, FaUser, FaSignInAlt } from 'react-icons/fa';

// Güvenli bir uygulama için bu kimlik bilgileri gerçek projede serverda saklanmalıdır
// Bu sadece basit bir demo amaçlıdır
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'kocaelikoltuk2025';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basit giriş kontrolü
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Gerçek uygulamada bir JWT token veya güvenli bir oturum yönetimi kullanılmalıdır
      // Bu sadece basit bir demo amaçlıdır
      localStorage.setItem('adminLoggedIn', 'true');
      router.push('/admin-panel-xvz789');
    } else {
      setError('Geçersiz kullanıcı adı veya şifre!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
            Yönetim Paneli Girişi
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Lütfen yönetici bilgilerinizle giriş yapın
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Kullanıcı Adı"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Şifre"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaSignInAlt className="h-5 w-5 text-primary-light group-hover:text-primary-lighter" />
              </span>
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 