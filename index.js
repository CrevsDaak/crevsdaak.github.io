function daak_web_get_random(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function daak_web_get_sw_quote()
{
  var sw_quotes = ["null",
                   "Welcome to the Daak site!",
                   "Hmmm. The Daak site clouds everything. Impossible to see, the future is.",
                   "You don't know the <u>power</u> of the Daak site!",
                   "Your feeble skills are no match for the power of the Daak site!",
                   "If only you knew the power of the Daak site",
                   "Don't click in to <a href='index.html'>hate</a>. That leads to the Daak site.",
                   "Become my apprentice. Learn to use the Daak site of the Force",
];
  rand1 = daak_web_get_random(1, 7);
  if (rand1 = rand2)
    rand2 = daak_web_get_random(1, 7);
  else
    rand2 = rand1

  document.getElementById("sw_quote").innerHTML = sw_quotes[rand2;
}
