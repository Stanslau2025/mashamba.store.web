 function toggleTopics(button, bookNumber) {
      const topics = button.nextElementSibling;
      const isVisible = topics.style.display === 'block';
      topics.style.display = isVisible ? 'none' : 'block';
      const icon = isVisible ? '▼' : '▲';
      button.innerHTML = button.innerHTML.replace(/[▲▼]/, icon);
    }
  let selectedBook = 'Book 1';

  // Attach book selection event
  document.querySelectorAll('.B ul li > button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      selectedBook = 'Book ' + (index + 1);
      console.log("Selected book:", selectedBook);
    });
  });

  // Handle sending message
  const sendButton = document.querySelector('.first_B div[title="Send"]');
  const inputField = document.querySelector('.C_child_button');
  const chatContainer = document.createElement('div');
  chatContainer.id = "chatLog";
  chatContainer.style.marginBottom = "20px";
  document.querySelector('.C').insertBefore(chatContainer, document.querySelector('.C_child'));

  sendButton.addEventListener('click', () => {
    const input = inputField.value.trim();
    if (!input) return;

    const userMsg = `<p><strong>You:</strong> ${input}</p>`;
    const botMsg = `<p><strong>AI:</strong> [Explanation from <em>${selectedBook}</em> on "<em>${input}</em>"]</p>`;

    chatContainer.innerHTML += userMsg + botMsg;
    inputField.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });