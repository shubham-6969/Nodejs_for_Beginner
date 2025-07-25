function fetchUserData() {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
     resolve({name: "shubham patwal", age:"21", hight:"5.10"})
    }, 3000);
  });
}

async function getUserData(params) {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully")
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error)
  }
}

getUserData();