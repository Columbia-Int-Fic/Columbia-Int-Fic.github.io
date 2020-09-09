<span class="clickers" id="audio1">Dear Louisa</span>

<script>
	  var audio = document.createElement('audio');
	  audio.src = 'sounds/dear-louisa.mp3';
	  document.getElementById('audio1').addEventListener("click", function() {
	  console.log("audio played!");
	  audio.play();
	  });
</script>

<mark>(link-repeat: "external links")[(open-url: "https://www.facebook.com/")]</mark>

var $2 = document.getElementById('2').addEventListener("click", function() {
    console.log("bg clicker 2 clicked!");
    window.top.postMessage('bg2', '*');
});

|p2)[So yesterday was crazy. And I mean CRAY-ZEE. I went to <span class="clickers" id="3">school</span> and everything was pretty normal. Well as normal as things could be. <span class= "clickers"  id="4">Mam and Dad</span> had told me that a school nearby had closed that week because the virus spread in it. They said I should be careful and not hug my friends or do my <span class= "clickers"  id="5">handshakes</span> with them in case someone had it. It was really awkward when Niamh came up to me to do our |txef>[handshake] and I had to step back and say I didn't want to. She asked me 'why?' So I just said I wasn't in the mood. I was afraid if I told her what Mam and Dad said she'd think that I thought she had the virus, which I don't. But it's hard to know isn’t it? I heard that you can carry the virus but not be coughing or have a high temperature. Also in case she'd make fun of me or <span class= "clickers"  id="6">cough</span> in my face - some kids have done that in my class, and sometimes Niamh can copy others. It was fine though, I think she forgot about the handshake when we went to sit down.

(click-replace: ?txef)[(t8n: "rumble")[handshake]]

  <script>
	  var $3 = document.getElementById('3').addEventListener("click", function() {
		  console.log("img clicker 3 clicked!");
		  window.top.postMessage('img3', '*');	
	  });
	  var $4 = document.getElementById('4').addEventListener("click", function() {
		  console.log("img clicker 4 clicked!");
		  window.top.postMessage('img4', '*');
	  });
	  var $5 = document.getElementById('5').addEventListener("click", function() {
		  console.log("img clicker 5 clicked!");
		  window.top.postMessage('img5', '*');
	  });
	  var $6 = document.getElementById('6').addEventListener("click", function() {
		  console.log("img clicker 6 clicked!");
		  window.top.postMessage('img6', '*');
	  });
  </script>]


  /* Passage 1 from OG Twine tech draft */

  {
	<script>
	  window.top.postMessage('email1', '*');
	  console.log("email clicker 1 executed!"); 
	</script> 
	|p0>[<span class="clickers" id="audio1">Dear Louisa</span>]
	[(click: ?p0)[(event: when time > 3s)[(t8n: "dissolve")(show: ?p1)(t8n: "dissolve")(show: ?l1)]]]
  }
	<script>
		var audio = document.createElement('audio');
		audio.src = 'sounds/dear-louisa.mp3';
		document.getElementById('audio1').addEventListener("click", function() {
		console.log("audio played!");
		audio.play();
		});
	</script>
  {
  |p1)[How are you? I hope you're well, and safe! Doesn’t it feel like we're in a film? Like one of those scary <span class="clickers" id="1">zombie end-of-the-world</span> kind of films that Mam wouldn’t let me watch (but I've seen the trailers of.) When the news said that the coronavirus was a pandemic, I didn't even know what that meant - apparently it means that the virus is |txef2>[everywhere.] So I do particularly hope you're okay, even if most of the cases are in <span class= "clickers"  id="2">Italy</span>.
  
  (click-append: ?txef2)[(text-style: "expand")+(text-style: "bold")+(text-color: red)[ EVERYWHERE!]]
  
  <script>
		var $1 = document.getElementById('1').addEventListener("click", function() {
			console.log("gif clicker 1 clicked!");
			window.top.postMessage('gif1', '*');	
		});
		var $2 = document.getElementById('2').addEventListener("click", function() {
			console.log("img clicker 2 clicked!");
			window.top.postMessage('img2', '*');
		});
  </script>]
  }
  
  {
  |l1)[(link: "Read more")[(t8n: "dissolve")(show: ?p2)(t8n: "dissolve")(show: ?l2)]]
  
  |p2)[So yesterday was crazy. And I mean CRAY-ZEE. I went to <span class="clickers" id="3">school</span> and everything was pretty normal. Well as normal as things could be. <span class= "clickers"  id="4">Mam and Dad</span> had told me that a school nearby had closed that week because the virus spread in it. They said I should be careful and not hug my friends or do my <span class= "clickers"  id="5">handshakes</span> with them in case someone had it. It was really awkward when Niamh came up to me to do our |txef>[handshake] and I had to step back and say I didn't want to. She asked me 'why?' So I just said I wasn't in the mood. I was afraid if I told her what Mam and Dad said she'd think that I thought she had the virus, which I don't. But it's hard to know isn’t it? I heard that you can carry the virus but not be coughing or have a high temperature. Also in case she'd make fun of me or <span class= "clickers"  id="6">cough</span> in my face - some kids have done that in my class, and sometimes Niamh can copy others. It was fine though, I think she forgot about the handshake when we went to sit down.
  
  (click-replace: ?txef)[(t8n: "rumble")[handshake]]
  
	<script>
		var $3 = document.getElementById('3').addEventListener("click", function() {
			console.log("img clicker 3 clicked!");
			window.top.postMessage('img3', '*');	
		});
		var $4 = document.getElementById('4').addEventListener("click", function() {
			console.log("img clicker 4 clicked!");
			window.top.postMessage('img4', '*');
		});
		var $5 = document.getElementById('5').addEventListener("click", function() {
			console.log("img clicker 5 clicked!");
			window.top.postMessage('img5', '*');
		});
		var $6 = document.getElementById('6').addEventListener("click", function() {
			console.log("img clicker 6 clicked!");
			window.top.postMessage('img6', '*');
		});
	</script>]
  }
  
  {
  |l2)[(link: "Read more")[(t8n: "dissolve")(show: ?p3)(t8n: "dissolve")(show: ?l3)]]
  
  |p3)[Every morning we go over the [[maths homework]], which is nice to get out of the way. |rvl1>[Múinteoir Ní Connaire] was writing a sum on the board when [[An Príomhoide]], came by and said 5th and 6th class were to come to the hall for an assembly. We all went in, confused since it wasn't Friday, and An Príomhoide told us school was closing. [[The Taoiseach]] had announced on the news that schools were gonna close for like 3 weeks or so. I looked around at everyone and literally everyone's mouth was [[wide open]]. Some giggled and then an Príomhoide gave out to them - said it was a serious issue. She is right I guess - I wasn't able to see Granny and Granddad on Sunday for our [[Sunday roast dinner]]. Apparently the virus can really harm older people. But yeah, I remember a few of us were mouthing 'Yay' to each other in the hall because we thought we were about to have a 3 week holiday. But then An Príomhoide said we'd be doing school work at home. I glanced at Niamh and Ellen and they [[rolled their eyes.]]]
  
  (click-append: ?rvl1)[,<span class="reveal"> my teacher</span>,]
  
  }
  
  {
  |l3)[(link: "Read more")[(t8n: "dissolve")(show: ?p4)(t8n: "dissolve")(show: ?l4)]]
  
  |p4)[Back to yesterday. We went home early that afternoon, and I had trouble with the [[hug]] thing again. We were all saying goodbye to each other and hugging and I just had to hug my friends. I felt really bad, and I haven't told my parents, but if I said no to hugging, it would look really mean. I hope I'm not [[carrying the virus]] now. I'm sure it'll be okay.]
  }
  
  {
  |l4)[(link: "Read more")[(t8n: "dissolve")(show: ?p5)(t8n: "dissolve")(show: ?l5)]]
  
  |p5)[Mam and Dad think that the country might go on [[lockdown]] - another thing that sounds like it’s from a film. I live in a town-y kind of house, so I don't have a very big garden to practice [[hockey]] tricks (field, not ice, which I'm sure you know haha). [[Liam]] will probably want to hog the garden for working out since the gyms will be closing. Liam’s in a weird situation actually since he should be in school preparing for his [[Junior Cert]] exams, but now we’re all at home doing school over Zoom, which is like Facetime but on Dad’s laptop. Mam’s a bit too worried about what’ll happen to the exams, but I agree with Liam that at least it’s not the [[Leaving Cert exams]], which are the ones you do when you’re leaving school and going to college. ‘The Junior Cert’s a practice,’ Liam has said, ‘I don’t need the practice.’]
  }
  
  {
  |l5)[(link: "Read more")[(t8n: "dissolve")(show: ?p6)(set: $show6 to 1)]]
  
  |p6)[Whatever happens, I hope this doesn't last long. I'm sure if we all work together to protect each other everything will be okay. I'd say I mentioned it before but my Mam teaches Irish and there's a nice [[seanfhocal]] I like that she tells me: [["Ní neart go cur le chéile."]] which means, not literally, that it's better if we work together.
  Are you still in school? Are things shutting down in your town? Are you okay?
  
	
  [[Lots and lots and lots of love,]]
  <span class="clickers" id="x">[[Sinéad->Open2]]</span>
  
  <script>
	  var $x = document.getElementById('x').addEventListener("click", function() {
			console.log("bg clicker a clicked!");
			window.top.postMessage('bga', '*');	
		});
  </script>]
  }