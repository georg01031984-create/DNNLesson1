import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="appFrame">
          <div className="appCanvas">
            <aside className="sidebar">
              <div className="sidebarBrand">SwiftLink</div>
              <nav>
                <button type="button" className="navItem navItemActive" aria-current="page">
                  <span className="navIcon" aria-hidden>📊</span>
                  Главная
                </button>
                <button type="button" className="navItem">
                  <span className="navIcon" aria-hidden>📋</span>
                  Заказы
                </button>
                <button type="button" className="navItem">
                  <span className="navIcon" aria-hidden>👥</span>
                  Клиенты
                </button>
                <button type="button" className="navItem">
                  <span className="navIcon" aria-hidden>📦</span>
                  Товары
                </button>
                <button type="button" className="navItem">
                  <span className="navIcon" aria-hidden>⚙️</span>
                  Настройки
                </button>
              </nav>
            </aside>
            <div className="mainArea">
              <header className="topBar">
                <h1 className="topBarTitle">Панель управления</h1>
                <div className="topBarActions">
                  <button type="button" className="iconBtn" title="Уведомления">🔔</button>
                  <button type="button" className="iconBtn" title="Настройки">⚙️</button>
                  <div className="avatar" title="Профиль">А</div>
                </div>
              </header>
              <main className="content">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
