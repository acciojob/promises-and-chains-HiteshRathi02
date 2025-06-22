document.getElementById('voteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission

  const age = document.getElementById('age').value.trim();
  const name = document.getElementById('name').value.trim();

  if (!age || !name) {
    alert("Please enter valid details");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  })
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
