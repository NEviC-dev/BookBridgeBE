## BOOKS

- Create Book (POST)
```bash
curl -X POST http://localhost:3000/api/books -H "Content-Type: application/json" -d "{\"id\": 1, \"title\": \"Sample Book\", \"author\": \"John Doe\", \"genre\": \"Fiction\", \"owner_id\": \"507f1f77bcf86cd799439011\", \"deposit\": 10.50, \"cover_image\": \"http://example.com/cover.jpg\"}"
```

- GET all Books (GET)
```bash
curl http://localhost:3000/api/books
```

- GET BY id (GET)
```bash
curl http://localhost:3000/api/books/1
```

- UPDATE BY id (PUT)
``` bash
curl -X PUT http://localhost:3000/api/books/1 -H "Content-Type: application/json" -d "{\"title\": \"Updated Book\", \"available\": false}"
```

- DELETE BY id (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/books/1
```

## TRANSACTIONS

- CREATE Transaction (POST)
```bash
curl -X POST http://localhost:3000/api/transactions -H "Content-Type: application/json" -d "{\"id\": 1, \"borrower_id\": \"507f1f77bcf86cd799439011\", \"book_id\": 1, \"start_date\": \"2025-10-24\", \"status\": \"borrowed\", \"deposit_paid\": true}"
``` 

- GET all transactions (GET)
```bash
curl http://localhost:3000/api/transactions 
```

- GET by id (GET)
```bash
curl http://localhost:3000/api/transactions/1
```

- UPDATE by id (PUT)
```bash
curl -X PUT http://localhost:3000/api/transactions/1 -H "Content-Type: application/json" -d "{\"status\": \"returned\", \"return_date\": \"2025-10-25\"}"
```

- DELETE by id (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/transactions/1
```

## USERS

- CREATE new user (POST)
```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"id\": \"507f1f77bcf86cd799439011\", \"name\": \"Jane Doe\", \"email\": \"jane@example.com\", \"password\": \"password123\", \"profile_pic\": \"http://example.com/profile.jpg\", \"balance\": 50.00, \"user_role\": \"user\"}"
```

- GET all users (GET)
```bash
curl http://localhost:3000/api/users/
```

- GET by id (GET)
```bash
curl http://localhost:3000/api/users/507f1f77bcf86cd799439011
```

- UPDATE BY id (PUT)
```bash
curl -X PUT http://localhost:3000/api/users/507f1f77bcf86cd799439011 -H "Content-Type: application/json" -d "{\"name\": \"Jane Updated\", \"balance\": 75.00}"
```

- DELETE BY id (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/users/507f1f77bcf86cd799439011
```

##  REVIEWS

- CREATE REVIEW (CREATE)
```bash
curl -X POST http://localhost:3000/api/reviews -H "Content-Type: application/json" -d "{\"id\": 1, \"book_id\": 1, \"user_id\": \"507f1f77bcf86cd799439011\", \"rating\": 4, \"comment\": \"Great book!\"}"
```

- GET ALL reviews (GET)
```bash
curl http://localhost:3000/api/reviews
```

- GET by id (GET)
```bash
curl http://localhost:3000/api/reviews/1
```

- UPDATE by id (PUT)
```bash
curl -X PUT http://localhost:3000/api/reviews/1 -H "Content-Type: application/json" -d "{\"rating\": 5, \"comment\": \"Amazing book!\"}"
```

- DELETE BY id (DELETE)
```bash
curl -X DELETE http://localhost:3000/api/reviews/1
```