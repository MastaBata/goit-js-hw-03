const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;


  for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const element = user[key];
        console.log(key, ':', element);
    }
  }