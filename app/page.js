export default function Home() {
  return (
    <>
      <h2 className="pageTitle">Обзор</h2>

      <section className="cardGrid">
        <div className="card">
          <div className="statCard">
            <div>
              <p className="statCardLabel">Выручка за месяц</p>
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
        <div className="tableWrap">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Клиент</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#10284</td>
                <td>ООО «Ромашка»</td>
                <td>₽ 45 200</td>
                <td><span className="pill pillSuccess">Оплачен</span></td>
                <td>31.01.2026</td>
              </tr>
              <tr>
                <td>#10283</td>
                <td>Иван Петров</td>
                <td>₽ 12 900</td>
                <td><span className="pill pillPending">В обработке</span></td>
                <td>30.01.2026</td>
              </tr>
              <tr>
                <td>#10282</td>
                <td>Анна Сидорова</td>
                <td>₽ 8 400</td>
                <td><span className="pill pillSuccess">Доставлен</span></td>
                <td>30.01.2026</td>
              </tr>
              <tr>
                <td>#10281</td>
                <td>Петр Козлов</td>
                <td>₽ 23 100</td>
                <td><span className="pill pillRejected">Отменён</span></td>
                <td>29.01.2026</td>
              </tr>
              <tr>
                <td>#10280</td>
                <td>Мария Новикова</td>
                <td>₽ 67 500</td>
                <td><span className="pill pillSuccess">Оплачен</span></td>
                <td>29.01.2026</td>
              </tr>
            </tbody>
          </table>
        </div>
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
