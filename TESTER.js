<span class="clickers" id="audio1">Dear Louisa</span>

<script>
	  var audio = document.createElement('audio');
	  audio.src = 'sounds/dear-louisa.mp3';
	  document.getElementById('audio1').addEventListener("click", function() {
	  console.log("audio played!");
	  audio.play();
	  });
</script>