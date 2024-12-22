```javascript
const query = { name: { $regex: /John/i } };

const cursor = db.collection('users').find(query);

// Add type checking before processing results
cursor.forEach(user => {
  if (typeof user.name === 'string') {
    console.log(user);
  } else {
    console.warn('Unexpected data type for name field:', user.name);
  }
});
```
This solution introduces a type check (`typeof user.name === 'string'`) to handle cases where the `name` field is not a string.  This prevents errors and provides more robust query handling.