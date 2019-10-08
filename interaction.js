$(".quoteBlock").on("click", function() {
	var number = Math.floor((Math.random() * inspirationalQuotes.length));
	$("#quoteText").text(inspirationalQuotes[number])
})

var inspirationalQuotes = [
  "\"Life is a comedy to those who think, a tragety to those who feel.\" - Sir Horace Walpole", 
  "\"The formula for a successful change process is not a form follows function,' but 'form follows consciousness.\" - Otto scharmer", 
  "\"Form follows emotion\" - Hartmut Esslinger", 
  "\"Form ever Follows Function, this is the law\" - Sullivan", 
  "\"All correct reasoning is a grand scheme of tautologies , but only God can make direct use of that fact. The rest of us must painstakingly and fallibly tease out the consequences of our assumptions.\" - Herbert Simon", 
  "\"Rituals are effective for those who believe in them\" - Hofstende", 
  "\"Many who have no goal in life are thrown from one new design to another by a fickleness that is shifting, never settled, and always dissatisfied with itself.\" - Seneca", 
  "\"If a science of societies exists, one must certainly not expect it to consist of a mereparaphrase of traditional prejudices. It should rather cause us to see things in a different way from the ordinary man, for the purpose of any science is to make discoveries, and all such discoveries more or less upset accepted opinions\" - Durkheim", 
]

