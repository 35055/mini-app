document.addEventListener("DOMContentLoaded", () => {
  const user = {
    name: "John Doe",
    hasPremium: true,
  };

  document.getElementById("username").innerText = user.name;
  if (!user.hasPremium) {
    document.getElementById("premium-icon").style.display = "none";
  }

  const coinsElement = document.getElementById("coins");
  let coins = 0;

  document.getElementById("invite-btn").addEventListener("click", () => {
    const chatId = prompt("Enter your friend's Telegram chat ID:");

    if (chatId) {
      const botToken = "YOUR_BOT_API_TOKEN";
      const botUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      fetch(botUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: "You have been invited to join MiniApp! Check it out: https://your-github-pages-url",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            alert("Invitation sent!");
            // Логика обновления монет при принятии приглашения
            coins += 5000;
            coinsElement.innerText = coins;
          } else {
            alert("Failed to send invitation.");
          }
        });
    }
  });
});
