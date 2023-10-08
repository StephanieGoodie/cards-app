import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker";
import "@stephaniegoodie/my-card/src/my-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardsApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--cards-app-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <my-card></my-card>
      <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
</meme-maker>
      </main>

      <p class="app-footer">
        🚽 Annahilated by Stephanie, but Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('cards-app', CardsApp);