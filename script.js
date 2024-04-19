const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Tớ biết thời gian này cậu rất mệt mỏi và có ít thời gian dành cho tớ nhưng mà đừng dành ít thời gian để chăm sóc cho bản thân nha! Lắng nghe bản thân mình, đừng bỏ bữa hay cố gắng quá sức nhen. Yêu cậu♥";
  gif.src =
    "https://gifsec.com/wp-content/uploads/2022/09/i-love-you-gif-1.gif";
    yesBtn.style.display = "none";
    
});