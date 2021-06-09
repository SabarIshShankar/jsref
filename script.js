  function copyfunc() {
  var copyText = document.getElementById("area");
  copyText.select();
  copyText.setSelectionRange(0, 999999)
  document.execCommand("copy");
  alert("Text copied");
}
        function countWord() {
            var words = document
                .getElementById("area").value;
            var count = 0;
            var split = words.split(' ');
            for (var i = 0; i < split.length; i++) {
                if (split[i] != "") {
                    count += 1;
                }
            }
            document.getElementById("show")
                .innerHTML = count;
        }
