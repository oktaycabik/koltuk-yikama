'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaTrash, FaEdit, FaSave, FaTimes, FaSignOutAlt } from 'react-icons/fa';

export default function AdminPanel() {
  const [customers, setCustomers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingCustomerId, setEditingCustomerId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    fullName: '',
    service: '',
    district: '',
    address: '',
    phone: '',
    notes: ''
  });

  // Oturum kontrolü
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
      if (!isLoggedIn) {
        router.push('/admin-panel-xvz789/login');
      } else {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);

  // Local Storage'dan müşteri verilerini yükle
  useEffect(() => {
    const savedCustomers = localStorage.getItem('customers');
    if (savedCustomers) {
      setCustomers(JSON.parse(savedCustomers));
    }
  }, []);

  // Müşteri verilerini Local Storage'a kaydet
  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  // Çıkış yap
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/admin-panel-xvz789/login');
  };

  // Form verilerini sıfırla
  const resetFormData = () => {
    setFormData({
      date: '',
      time: '',
      fullName: '',
      service: '',
      district: '',
      address: '',
      phone: '',
      notes: ''
    });
    setEditingCustomerId(null);
  };

  // Form görünürlüğünü değiştir
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      resetFormData();
    }
  };

  // Form veri değişikliği
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Müşteri ekle veya güncelle
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Bugünün tarihini ve saatini otomatik olarak ekle eğer boşsa
    const currentDate = new Date();
    const formattedDate = formData.date || currentDate.toISOString().split('T')[0];
    const formattedTime = formData.time || 
      `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
    
    const customerData = {
      ...formData,
      date: formattedDate,
      time: formattedTime,
      id: editingCustomerId || Date.now().toString()
    };

    if (editingCustomerId) {
      // Müşteri güncelleme
      setCustomers(customers.map(customer => 
        customer.id === editingCustomerId ? customerData : customer
      ));
    } else {
      // Yeni müşteri ekleme
      setCustomers([...customers, customerData]);
    }

    resetFormData();
    setIsFormVisible(false);
  };

  // Müşteri düzenleme
  const handleEdit = (customer) => {
    setFormData({
      date: customer.date,
      time: customer.time,
      fullName: customer.fullName,
      service: customer.service,
      district: customer.district,
      address: customer.address,
      phone: customer.phone,
      notes: customer.notes
    });
    setEditingCustomerId(customer.id);
    setIsFormVisible(true);
  };

  // Müşteri silme
  const handleDelete = (id) => {
    if (window.confirm('Bu müşteriyi silmek istediğinizden emin misiniz?')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-primary text-2xl">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Müşteri Yönetim Paneli</h1>
          <div className="flex space-x-4">
            <button 
              onClick={toggleForm}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isFormVisible ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'} text-white transition-colors`}
            >
              {isFormVisible ? (
                <>
                  <FaTimes />
                  <span>İptal</span>
                </>
              ) : (
                <>
                  <FaPlus />
                  <span>Yeni Müşteri Ekle</span>
                </>
              )}
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white transition-colors"
            >
              <FaSignOutAlt />
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>

        {/* Müşteri Formu */}
        {isFormVisible && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">
              {editingCustomerId ? 'Müşteri Düzenle' : 'Yeni Müşteri Ekle'}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Tarih</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Saat</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">İsim Soyisim</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Müşteri Ad Soyad"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">İş/Hizmet</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Hizmet Seçin</option>
                  <option value="Ev Koltuk Yıkama">Ev Koltuk Yıkama</option>
                  <option value="Araç Koltuk Yıkama">Araç Koltuk Yıkama</option>
                  <option value="Ofis Koltuk Yıkama">Ofis Koltuk Yıkama</option>
                  <option value="Yatak/Yastık Yıkama">Yatak/Yastık Yıkama</option>
                  <option value="Otel Temizliği">Otel Temizliği</option>
                  <option value="Özel Koltuk Temizliği">Özel Koltuk Temizliği</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">İlçe</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  placeholder="İlçe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Telefon Numarası"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">Açık Adres</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Açık Adres"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">Not</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Müşteri hakkında notlar"
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-1"
                >
                  <FaTimes size={14} />
                  <span>İptal</span>
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center space-x-1"
                >
                  <FaSave size={14} />
                  <span>{editingCustomerId ? 'Güncelle' : 'Kaydet'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Müşteri Tablosu */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Tarih/Saat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Müşteri</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Hizmet</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">İlçe/Adres</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Telefon</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Not</th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      Henüz müşteri kaydı bulunmuyor.
                    </td>
                  </tr>
                ) : (
                  customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{customer.date}</div>
                        <div className="text-sm text-gray-500">{customer.time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{customer.fullName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{customer.service}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{customer.district}</div>
                        <div className="text-sm text-gray-500">{customer.address}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{customer.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{customer.notes}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleEdit(customer)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <FaEdit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(customer.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 