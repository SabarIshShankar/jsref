  function copyfunc() {
  var copyText = document.getElementById("area");
  copyText.select();
  copyText.setSelectionRange(0, 999999)
  document.execCommand("copy");
  alert("Text copied");
}


        function countWord() {
  
            // Get the input text value
            var words = document
                .getElementById("area").value;
  
            // Initialize the word counter
            var count = 0;
  
            // Split the words on each
            // space character 
            var split = words.split(' ');
  
            // Loop through the words and 
            // increase the counter when 
            // each split word is not empty
            for (var i = 0; i < split.length; i++) {
                if (split[i] != "") {
                    count += 1;
                }
            }
  
            // Display it as output
            document.getElementById("show")
                .innerHTML = count;
        }