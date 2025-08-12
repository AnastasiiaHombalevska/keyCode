const keysContainer = document.querySelector('.keys-container');

window.addEventListener('keydown', (e) => {
  console.log(e);

  keysContainer.innerHTML = `
      <div class="key">
          ${e.key === ' ' ? 'Space' : e.key}
        <small class="event-name-tag">event.key</small>
      </div>
  
      <div class="key">
      ${e.keyCode}
        <small class="event-name-tag">event.keyCode</small>
      </div>
  
      <div class="key">
      ${e.code}
        <small class="event-name-tag">event.code</small>
      </div>
    `
})