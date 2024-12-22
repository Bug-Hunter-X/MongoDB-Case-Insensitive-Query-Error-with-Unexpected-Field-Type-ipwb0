```javascript
const query = { name: /John/i }; // Case-insensitive search

const cursor = db.collection('users').find(query);

cursor.forEach(user => {
  console.log(user);
});
```
This code snippet uses a regular expression for case-insensitive searching. However, if the name field contains an array of strings or other unexpected data type, it will lead to an error.