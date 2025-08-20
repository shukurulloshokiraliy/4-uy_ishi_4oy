// Umumiy o'zgaruvchilar
const colors = ['#E28625', '#006971', '#004140'];
const fontPrimary = '"Big Shoulders Display", sans-serif';
const fontSecondary = '"Lexend Deca", sans-serif';
const textColor = '#F2F2F2';

//CARDS
const CardsEl = document.getElementById("Cards");
CardsEl.style.width = '950px';
CardsEl.style.height = '500px';
CardsEl.style.margin = '200px 0 200px 300px';
CardsEl.style.display = 'flex';
CardsEl.style.gap = '-5px';
//CARD 1,2,3
['card1', 'card2', 'card3'].forEach((id, i) => {
  const card = document.getElementById(id);
  const icon = document.getElementById(`icon${i+1}`);
  const heading = document.getElementById(`h${i+1}`);
  const paragraph = document.getElementById(`p${i+1}`);
  const button = document.getElementById(`button${i+1}`);
  const buttonText = document.getElementById(`pInButton${i+1}`);
  
  //CARD
  card.style.width = '920px';
  card.style.height = '500px';
  card.style.borderRadius = '8px';
  card.style.backgroundColor = colors[i];
  
  //ICON
  icon.style.margin = '48px 195px 6px 48px';
  
  //H2
  heading.style.fontFamily = fontPrimary;
  heading.style.fontWeight = '700';
  heading.style.fontSize = '40px';
  heading.style.margin = '25px 160px 26px 48px';
  heading.style.color = textColor;
  heading.style.textTransform = 'uppercase';
  
  //P
  paragraph.style.fontFamily = fontSecondary;
  paragraph.style.fontSize = '15px';
  paragraph.style.lineHeight = '25px';
  paragraph.style.width = '212px';
  paragraph.style.margin = '0 47px 83px 47px';
  paragraph.style.color = textColor;
  paragraph.style.opacity = '0.75';
  //BUTTON
  button.style.width = '146px';
  button.style.height = '48px';
  button.style.borderRadius = '25px';
  button.style.margin = '0 113px 48px 48px';
  button.style.border = 'none';
  
  //BUTTONS PSI
  buttonText.style.fontFamily = fontSecondary;
  buttonText.style.fontSize = '15px';
  buttonText.style.color = colors[i];
  buttonText.style.margin = 'auto';
});