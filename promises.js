const fectchData = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("data fetched successfully")
        } else {
          reject("failed to fetch data")
        }
      }, 2000)
  })
}

fectchData()
  .then((result)=> {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });