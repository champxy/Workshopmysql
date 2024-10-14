----------Server--------------
npm init -y
npm install express morgan body-parser cors nodemon

npm install prisma
npx prisma init
npm install @prisma/client
// Doc ใช้ในการสร้างและอัพเดตฐานข้อมูล
npx prisma migrate dev --name workshop1_init

//
อัพเดต Prisma schema
npx prisma migrate dev

-----------Client-------------
npm create vite@latest .
client
javascript

npm install
npm run dev
npm install axios