// Show dialog if user is on a phone
		if (/Mobi|Android/i.test(navigator.userAgent)) {
			var dialogBox = document.createElement('div');
			dialogBox.className = 'dialog-box';
			dialogBox.innerHTML = '<p>This website is best viewed on a desktop computer. Some features may not work on your mobile device.</p><button class="btn" onclick="hideDialog()">Close</button>';
			document.body.appendChild(dialogBox);
			dialogBox.style.display = 'block';
		}

		// Hide dialog function
		function hideDialog() {
			var dialogBox = document.querySelector('.dialog-box');
			dialogBox.style.display = 'none';
		}