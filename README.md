2 folders in this project:
- client - React app (React application using Vite)
- server - Node.js application (with Express)

client installation:
- Make sure using node version 18.13.0^
- go to client directory (cd client)
- install dependencies (npm i)
- .env file is already inside the dirctory (To make the process easier, of course in a real project we would not want to expose this file on GitHub, otherwise we would lose the whole idea of it)
- run apllication on port 3000 (npm run dev)

server installation:
- Make sure using node version 18.13.0^
- go to server directory (cd server)
- install dependencies (npm i)
- open .env file and adjustify the database connection environement variables if needed
- open new Schema in Mysql call it "question-asking" and import files from server/Dump20240115/ path directory (for populate db)
- run apllication on port 5000 (npm run dev)



not working? Please contact me by email: yehudaaviv@gmail.com
