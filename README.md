# Digital Clock Lovelace Card for Home Assistant

This custom Lovelace card for Home Assistant displays a digital clock with timezone selection. It automatically adjusts for daylight saving time based on the selected timezone.

## Features

- Digital clock display.
- Timezone selection from a dropdown menu.
- Automatic adjustment for daylight saving time.
- Simple and clean design with basic styling.

## Installation

1. Download the `digital-clock-card.js` file from the provided link.
2. Place the file in your Home Assistant `www` directory.
3. Add a reference to the card in your Lovelace configuration:
   ```yaml
   resources:
     - url: /local/digital-clock-card.js
       type: module
   ```
4. Restart Home Assistant.

## Usage

To use the card, add it to your Lovelace dashboard with the following configuration:
```yaml
- type: custom:digital-clock-card
```

## Customization

You can customize the appearance of the clock by editing the CSS in the `digital-clock-card.js` file.

## Support

For any issues or feature requests, please open an issue on the GitHub repository (link to the repository).

## License

This project is licensed under the MIT License - see the LICENSE file for details.