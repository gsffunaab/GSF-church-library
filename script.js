// 1. The Database: This is the only part you ever need to edit.
const libraryData = [
    {
        title: "The Pilgrim's Progress",
        author: "John Bunyan",
        link: "https://drive.google.com/drive/u/3/folders/1_GJNi4r_Fjt-uN34YhXrDTBX9DLtrtMa", // Replace '#' with your Google Drive Link
        emoji: "📖"
    },
    {
        title: "Knowing God",
        author: "J.I. Packer",
        link: "https://drive.google.com/drive/u/3/folders/1_GJNi4r_Fjt-uN34YhXrDTBX9DLtrtMa",
        emoji: "📘"
    },
    // To add a new book, just copy a block like the one below:
    {
        title: "Mere Christianity",
        author: "C.S. Lewis",
        link: "https://drive.google.com/drive/u/3/folders/1_GJNi4r_Fjt-uN34YhXrDTBX9DLtrtMa",
        emoji: "📗"
    }
];

// 2. The Engine: This grabs the grid from your HTML
const gridContainer = document.getElementById('bookGrid');

// 3. The Generator: This loops through your database and builds the UI
function renderLibrary(books) {
    // Clear out anything currently in the grid
    gridContainer.innerHTML = '';

    // Loop through each book and create a card
    books.forEach(book => {
        const card = document.createElement('article');
        card.className = 'book-card';
        
        // Inject the data into the HTML structure
        card.innerHTML = `
            <div class="book-cover">
                <span>${book.emoji}</span> 
            </div>
            <div class="book-content">
                <div class="book-info">
                    <h2>${book.title}</h2>
                    <p class="author">${book.author}</p>
                </div>
                <a href="${book.link}" target="_blank" rel="noopener noreferrer" class="btn">Read Now</a>
            </div>
        `;
        
        // Add the finished card to the page
        gridContainer.appendChild(card);
    });
}

// 4. Initialize: Run the generator when the page loads
renderLibrary(libraryData);

// --- LIVE SEARCH FILTER --- //
const searchInput = document.getElementById('searchInput');

// Listen for every keystroke in the search box
searchInput.addEventListener('keyup', (e) => {
    // Grab what the user typed and convert it to lowercase so the search isn't case-sensitive
    const searchString = e.target.value.toLowerCase();
    
    // Filter the library array
    const filteredBooks = libraryData.filter(book => {
        // Check if the typed letters match the title OR the author
        return book.title.toLowerCase().includes(searchString) || 
               book.author.toLowerCase().includes(searchString);
    });
    
    // Send the filtered list back into our generator to redraw the grid instantly!
    renderLibrary(filteredBooks);
});

