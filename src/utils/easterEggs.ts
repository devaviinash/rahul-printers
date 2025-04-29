import { toast } from "react-hot-toast";

// Konami code sequence
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export class EasterEggs {
  private static sequence: string[] = [];
  private static printerClicks = 0;
  private static lastClick = 0;

  static init() {
    // Listen for konami code
    document.addEventListener("keydown", (e) => {
      this.sequence.push(e.key);
      if (this.sequence.length > konamiCode.length) {
        this.sequence.shift();
      }
      if (this.sequence.join("") === konamiCode.join("")) {
        this.activateRainbowMode();
        this.sequence = [];
      }
    });
  }

  static handlePrinterClick() {
    const now = Date.now();
    if (now - this.lastClick < 300) {
      this.printerClicks++;
      if (this.printerClicks === 5) {
        this.activateMatrixMode();
        this.printerClicks = 0;
      }
    } else {
      this.printerClicks = 1;
    }
    this.lastClick = now;
  }

  private static activateRainbowMode() {
    document.body.style.animation = "rainbow-bg 5s linear infinite";
    toast("🌈 Rainbow mode activated!", {
      icon: "🎨",
      duration: 3000,
    });
    setTimeout(() => {
      document.body.style.animation = "";
    }, 5000);
  }

  private static activateMatrixMode() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "9999";
    canvas.style.opacity = "0.1";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    toast("🖨️ Matrix printer mode activated!", {
      icon: "👾",
      duration: 3000,
    });

    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 5000);
  }
}
