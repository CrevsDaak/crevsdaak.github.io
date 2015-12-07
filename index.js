function daak_web_get_random(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function daak_web_get_sw_quote()
{
  var sw_quotes = ["THE SUPPOSEDLY NULL STRING THAT SAYS NI",
                   "Welcome to the Daak site!",
                   " ... and when your head explodes, of Daak forebodings too, I'll see you on the Daak site of the Moon",
                   "Join the Daak site! We have Wookies!",
                   "Hmmm. The Daak site clouds everything. Impossible to see, the future is.",
                   "Only together can we turn him to the Daak site of the Force",
                   "You don't know the <u>power</u> of the Daak site!",
                   "Your feeble skills are no match for the power of the Daak site!",
                   "If only you knew the power of the Daak site",
                   "Don't click in to <a href='index.html'>hate</a>. That leads to the Daak site.",
                   "Become my apprentice. Learn to use the Daak site of the Force",
                   "Joined the Daak site, Dooku has. Lies, deceit, creating mistrust are his ways now.",
                   "And now at last it comes. You will give me the Ring freely! In the site of the Daak Lord you will set up a Queen. And I shall not be Daak, but beautiful and terrible as the Morning and the Night!",
                   "One Ring to rule them all, One Ring to find them,\nOne Ring to bring them all and in the Daak site bind them.\nIn the Daak site where the Chaos lies.",
                   "There's no Daak site in the moon really.",
                   "No Daak SPARC-asm in the classroom",
                   "A site is called Daak not because the info fails to show up, but because people refuse to browse it."
];
  // I don't give a damn if the same result gets repeated, so make it simple
  document.getElementById("sw_quote").innerHTML = sw_quotes[daak_web_get_random(1, 16)];
}
