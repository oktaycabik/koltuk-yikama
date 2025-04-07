export const metadata = {
  title: 'Admin Panel | Kocaeli Koltuk Yıkama',
  description: 'Kocaeli Koltuk Yıkama Admin Yönetim Paneli',
  robots: 'noindex, nofollow',
}

export default function AdminPanelLayout({ children }) {
  return (
    <div className="admin-panel-layout">
      {children}
    </div>
  )
} 