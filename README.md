Make CRUD with ReactJs and Nodejs (Express Js)

This here i'm using database Mysql and for GUI it is Phpmyadmin.

1. Create a database in phpmyadmin. Give the database name "tugas_nodejs" (the database name is up to you).
2. After that, go to the server/config/database.js file then change the database name according to the name of the database you created.
3. And then, you make it tabel. Same the below.

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `negara` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

4. Open the file package.json (root folder). And then you adding "proxy": "http://localhost:4000" in file package.json. Or script it is same below.

{
  "name": "crud",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:4000"
}

The final word from me, hopefully this can be usefull :)
