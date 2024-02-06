function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
          resolve(`Data successfully fetched: ${randomNum}`);
        } else {
          reject(new Error(`Error fetching data: ${randomNum}`));
        }
      }, 1000);
    });
  }
  
  async function fetchDataAsync() {
    try {
      console.log('Fetching data...');
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static createUser(userData) {
      const { name, age } = userData;
      return new User(name, age);
    }
  
    displayInfo() {
      console.log(`User: ${this.name}, Age: ${this.age}`);
    }
  }
  
  fetchDataAsync();
  
  const userData = { name: 'John', age: 28 };
  const newUser = User.createUser(userData);
  newUser.displayInfo();
  