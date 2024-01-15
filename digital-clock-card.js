class DigitalClockCard extends HTMLElement {
  constructor() {
    super();
    this.timezone = 'UTC'; // Default timezone
  }

  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      this.content = document.createElement('div');
      this.content.style.padding = '16px';
      this.content.style.textAlign = 'center';

      // Styling
      this.styleElement = document.createElement('style');
      this.styleElement.textContent = `
        select {
          padding: 5px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        h1 {
          color: #0a84ff;
        }
      `;

      // Timezone selection dropdown
      this.timezoneSelector = document.createElement('select');
      ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'].forEach(tz => {
        const option = document.createElement('option');
        option.value = tz;
        option.text = tz;
        this.timezoneSelector.appendChild(option);
      });
      this.timezoneSelector.addEventListener('change', (e) => {
        this.timezone = e.target.value;
        this.updateTime();
      });

      card.appendChild(this.styleElement);
      card.appendChild(this.content);
      this.appendChild(card);
    }

    this.updateTime();
  }

  updateTime() {
    const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: this.timezone });
    this.content.innerHTML = `
      <h1>Digital Clock</h1>
      <p>Current Time: ${currentTime}</p>
      <p>Select Timezone:</p>
      ${this.timezoneSelector.outerHTML}
    `;
  }
}

customElements.define('digital-clock-card', DigitalClockCard);

console.log('Digital Clock Card loaded with styling');