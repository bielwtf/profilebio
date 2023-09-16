
window.onload = function () {
  fetch("https://api.lanyard.rest/v1/users/734529813112684614")
    .then(response => response.json())
    .then(w => {
      const info = w.data.discord_user;
      const usernameElement = document.querySelector('.namez');
      const avatarElement = document.querySelector('.avatar');

      // Atualize o texto do nome de usuário
      usernameElement.textContent = info.username;

      // Atualize a imagem do avatar da API Lanyard
      avatarElement.src = info.avatar;

      // Crie um elemento de espaço em branco
      const space = document.createTextNode(" ");

      // Crie um elemento de imagem para o GIF que você forneceu
      const gifImage = document.createElement('img');
      gifImage.src = "https://cdn.discordapp.com/emojis/994424902775996466.gif?size=96&quality=lossless";
      gifImage.width = 28;
      gifImage.style.verticalAlign = 'middle'; // Alinhar verticalmente

      // Adicione o espaço em branco e o GIF ao elemento do nome de usuário
      usernameElement.appendChild(space);
      usernameElement.appendChild(gifImage);

      avatarElement.src = info.avatar
      ? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.${info.avatar.startsWith("a_") ? 'gif' : 'png'}?size=512`
      : "https://cdn.discordapp.com/embed/avatars/5.png";
      
    })
    .catch(error => { });
};