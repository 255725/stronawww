document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Poczekaj, aż cała strona (DOM) się załaduje
document.addEventListener('DOMContentLoaded', () => {

  // Znajdź elementy
  const openModalButton = document.getElementById('open-ticket-modal');
  const closeModalButton = document.getElementById('close-ticket-modal');
  const modalOverlay = document.getElementById('ticket-modal-overlay');
  const ticketForm = document.getElementById('ticket-form');

  // Funkcja otwierająca modal
  const openModal = () => {
    if (modalOverlay) {
      // Użyjemy dodawania/usuwania klasy CSS do kontroli widoczności
      modalOverlay.classList.add('is-visible');
      // modalOverlay.style.display = 'flex'; // Alternatywnie, bezpośrednia zmiana stylu
    }
  };

  // Funkcja zamykająca modal
  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('is-visible');
      // modalOverlay.style.display = 'none'; // Alternatywnie, bezpośrednia zmiana stylu
    }
  };

  // Obsługa kliknięcia na link "Kup bilet"
  if (openModalButton) {
    openModalButton.addEventListener('click', (e) => {
      e.preventDefault(); // Zablokuj domyślne przejście do #tickets
      openModal();
    });
  }

  // Obsługa kliknięcia na przycisk zamknięcia (X)
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  // Obsługa kliknięcia na tło (overlay) - zamyka modal
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      // Zamknij tylko jeśli kliknięto bezpośrednio na overlay (a nie na zawartość .modal-content)
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Obsługa naciśnięcia klawisza Escape - zamyka modal
  document.addEventListener('keydown', (e) => {
    // Sprawdź, czy naciśnięto Escape i czy modal jest widoczny
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-visible')) {
      closeModal();
    }
  });

  // Obsługa wysłania formularza (tutaj tylko przykład, wymaga dalszej logiki)
  if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Zablokuj domyślne wysłanie formularza
      const formData = new FormData(ticketForm);
      const ticketType = formData.get('ticket_type');
      const quantity = formData.get('quantity');

      // Tutaj powinna znaleźć się logika przetwarzania zakupu:
      // - Walidacja danych
      // - Przekierowanie do systemu płatności
      // - Wyświetlenie potwierdzenia itp.
      alert(`Wybrano: ${quantity} x ${ticketType}`);

      // Możesz zamknąć modal po "zakupie" lub wyświetlić potwierdzenie
      closeModal();
    });
  }

}); // Koniec nasłuchiwania na DOMContentLoaded