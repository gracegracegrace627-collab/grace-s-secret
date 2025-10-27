function checkAnswer() {
  const ans = document.getElementById('answer').value.trim().toLowerCase();
  const hint = document.getElementById('hint');

  if (ans === '19950627') {
    hint.innerHTML = "✅ 正确！下一个页面是：<a href='graceaichisha.html'>graceaichisha.html</a>";
  } else {
    hint.textContent = "提示：年月日";
  }
}
