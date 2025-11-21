document.addEventListener("DOMContentLoaded", function() {
  const layoutHTML = `
    <header>
      <h1>FoodShare Network</h1>
      <span class="settings-icon" title="Settings">⚙️</span>
    </header>

    <nav>
      <a href="user-dashboard.html">Home</a>
      <a href="find-providers.html">Find Providers</a>
      <a href="order-history.html">Order History</a>
      <a href="activity.html">Current Activity</a>
      <a href="community.html">Community</a>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', layoutHTML);
});