// Exercise 1 – Best Selling Books
// Data: 5 books. 'description' is optional for some entries.
const books = [
  { title: 'The Silent Library', author: 'A. Winters', genre: 'Mystery', isbn: '978-0-111111-11-1', cover: 'assets/covers/book1.svg', description: 'A page‑turning whodunnit set in an old university library.' },
  { title: 'Gardens of Glass', author: 'L. Okoye', genre: 'Fantasy', isbn: '978-0-222222-22-2', cover: 'assets/covers/book2.svg' }, // no description
  { title: 'Orbit of Ashes', author: 'M. Zhao', genre: 'Sci‑Fi', isbn: '978-0-333333-33-3', cover: 'assets/covers/book3.svg', description: 'A deep‑space survival story about memory and identity.' },
  { title: 'Bread & Thunder', author: 'S. Delgado', genre: 'Historical', isbn: '978-0-444444-44-4', cover: 'assets/covers/book4.svg' }, // no description
  { title: 'The Blue Hour', author: 'R. Patel', genre: 'Literary', isbn: '978-0-555555-55-5', cover: 'assets/covers/book5.svg', description: 'A coastal town, a storm, and five lives that collide.' },
];

const container = document.getElementById('books');
books.forEach(b => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${b.cover}" alt="${b.title} cover" />
    <div class="content">
      <h2>${b.title}</h2>
      <div class="meta">${b.author} · ${b.genre}</div>
      <div class="isbn">ISBN: ${b.isbn}</div>
      ${b.description ? `<p class="desc">${b.description}</p>` : ''}
    </div>
  `;
  container.appendChild(card);
});
