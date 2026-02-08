import OrdersTable from './OrdersTable';

export default function Home() {
  return (
    <>
      <h2 className="pageTitle">Обзор</h2>

      <section className="cardGrid">
        <div className="card">
          <div className="statCard">
            <div>
              <p className="statCardLabel">Выручка за месяц - Логистика + аутстафф</p>
              <p className="statCardMetric">₽ 1 247 800</p>
            </div>
            <div className="iconTile iconTileSuccess" aria-hidden>↑</div>
          </div>
        </div>
        <div className="card">
          <div className="statCard">
            <div>
              <p className="statCardLabel">Новых заказов</p>
              <p className="statCardMetric">342</p>
            </div>
            <div className="iconTile iconTileWarning" aria-hidden>📦</div>
          </div>
        </div>
        <div className="card">
          <div className="statCard">
            <div>
              <p className="statCardLabel">Ожидают обработки</p>
              <p className="statCardMetric">18</p>
            </div>
            <div className="iconTile iconTilePending" aria-hidden>⏳</div>
          </div>
        </div>
        <div className="card">
          <div className="statCard">
            <div>
              <p className="statCardLabel">Активных кампаний</p>
              <p className="statCardMetric">5</p>
            </div>
            <div className="iconTile iconTileAccent" aria-hidden>★</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h3 className="sectionTitle">Последние заказы</h3>
        <p className="sectionDesc">
          Ниже список последних заказов. Нажмите на строку для перехода к деталям или используйте действия справа.
        </p>
        <OrdersTable />
      </section>

      <section className="section">
        <h3 className="sectionTitle">Краткая сводка</h3>
        <p className="sectionDesc">
          За текущий месяц конверсия из корзины в оплату составила 34%. Средний чек — ₽ 3 640. Рекомендуется проверить заказы в статусе «В обработке» и связаться с клиентами при задержках.
        </p>
        <button type="button" className="btnPrimary">Скачать отчёт</button>
      </section>
    </>
  );
}
