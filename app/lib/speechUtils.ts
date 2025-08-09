// app/lib/speechUtils.ts
export class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private isClient: boolean = false;

  constructor() {
    // Check if we're in the browser
    this.isClient = typeof window !== "undefined";

    if (this.isClient && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
    }
  }

  private loadVoices(): void {
    if (!this.synth) return;

    const load = () => {
      if (this.synth) {
        this.voices = this.synth.getVoices();
      }
    };

    // On some browsers, voices are loaded async
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }

    // Try loading immediately too
    load();
  }

  private selectDefaultVoice(): SpeechSynthesisVoice | null {
    const preferredNames = [
      "Google US English",
      "Microsoft Zira",
      "Microsoft Aria",
      "Samantha", // macOS
      "Alex", // macOS
    ];

    for (const name of preferredNames) {
      const voice = this.voices.find((v) => v.name.includes(name));
      if (voice) return voice;
    }

    return this.voices[0] || null;
  }

  speak(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      volume?: number;
      voice?: SpeechSynthesisVoice;
    } = {}
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isSupported()) {
        reject(new Error("Speech synthesis not supported"));
        return;
      }

      this.stop();

      const utterance = new SpeechSynthesisUtterance(text);

      // Load default voice if none passed
      const voice = options.voice || this.selectDefaultVoice();
      if (voice) {
        utterance.voice = voice;
      }

      // Set parameters
      utterance.rate = options.rate ?? 0.95;
      utterance.pitch = options.pitch ?? 1.1;
      utterance.volume = options.volume ?? 1;

      // Handle events
      utterance.onend = () => {
        this.currentUtterance = null;
        resolve();
      };

      utterance.onerror = (event) => {
        this.currentUtterance = null;
        reject(new Error(`Speech synthesis error: ${event.error}`));
      };

      this.currentUtterance = utterance;
      this.synth!.speak(utterance);
    });
  }

  speakTerm(term: string, definition: string): Promise<void> {
    const text = `${term}. ${definition}`;
    return this.speak(text, { rate: 0.85, pitch: 1.05 });
  }

  stop(): void {
    if (!this.synth) return;

    if (this.synth.speaking || this.synth.pending) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
  }

  pause(): void {
    if (!this.synth) return;

    if (this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
    }
  }

  resume(): void {
    if (!this.synth) return;

    if (this.synth.paused) {
      this.synth.resume();
    }
  }

  getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  isSupported(): boolean {
    return this.isClient && this.synth !== null && "speechSynthesis" in window;
  }

  isSpeaking(): boolean {
    return this.synth ? this.synth.speaking : false;
  }

  isPaused(): boolean {
    return this.synth ? this.synth.paused : false;
  }
}
