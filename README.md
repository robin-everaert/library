# Library
Library Media application.

### Development URL:
https://robin-everaert.github.io/library/

### Features:
- Browse and search for movies using The Movie Database (TMDb) API.
- Browse and search for books using Google Books API.
- Save favorite movies and books locally (LocalStorage).

### Data APIs:
#### Movies:
* **API Name**: The Movie Database (TMDb)
* **Documentation URL**: [TMDb API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)
* **Data storage**: LocalStorage -> `movieData`

#### Books:
* **API Name**: Google Books
* **Documentation URL**: [Google Books API Documentation](https://developers.google.com/books#:~:text=Google%20Books%20is%20our%20effort,also%20manage%20your%20personal%20bookshelves.)
* **Data storage**: LocalStorage -> `bookData`

### Libraries used:
* **React**: V18.2.0 
* **React-Redux**: V8.0.5 
* **Redux Toolkit**: V1.2.5 
* **Axios**: V1.2.1 
* **Bootstrap**: V5.2.3
* **Sass**: V1.57.1

### Installation:
1. Clone the repository:
    ```bash
    git clone https://github.com/robin-everaert/library.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the app:
    ```bash
    npm start
    ```
