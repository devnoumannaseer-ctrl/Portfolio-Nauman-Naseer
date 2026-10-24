/**
 * Synthesizes the iconic Netflix "Ta-Dum" audio intro using the browser's Web Audio API.
 * No external audio files or downloads required.
 */
let audioCtx: AudioContext | null = null;

export const playNetflixIntroSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Sub Bass impact (D1 / ~36.7Hz)
    const subOsc = audioCtx.createOscillator();
    const subGain = audioCtx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(36.7, now);
    subOsc.frequency.exponentialRampToValueAtTime(28, now + 1.2);
    subGain.gain.setValueAtTime(0.7, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
    subOsc.connect(subGain);
    subGain.connect(audioCtx.destination);
    subOsc.start(now);
    subOsc.stop(now + 1.4);

    // Cello / Ta-dum Body note 1 (D2 / ~73.4Hz)
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(73.4, now);
    osc1.frequency.setValueAtTime(73.4, now + 0.12);
    gain1.gain.setValueAtTime(0.6, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 1.6);

    // Cello / Ta-dum Second impact (D3 / ~146.8Hz + A2 / ~110Hz chord)
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(110, now + 0.14);
    osc2.frequency.exponentialRampToValueAtTime(146.8, now + 0.22);

    // Filter to warm the cello sound
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now + 0.14);
    filter.frequency.exponentialRampToValueAtTime(180, now + 2.0);

    gain2.gain.setValueAtTime(0.0, now);
    gain2.gain.setValueAtTime(0.55, now + 0.14);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

    osc2.connect(filter);
    filter.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(now + 0.14);
    osc2.stop(now + 2.2);

    // Shimmering high ambient sheen
    const shimmer = audioCtx.createOscillator();
    const shimmerGain = audioCtx.createGain();
    shimmer.type = 'sine';
    shimmer.frequency.setValueAtTime(587.33, now + 0.25); // D5
    shimmerGain.gain.setValueAtTime(0.0, now);
    shimmerGain.gain.setValueAtTime(0.12, now + 0.25);
    shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
    shimmer.connect(shimmerGain);
    shimmerGain.connect(audioCtx.destination);
    shimmer.start(now + 0.25);
    shimmer.stop(now + 2.5);
  } catch (err) {
    console.debug('Audio playback was prevented by browser policy:', err);
  }
};

/**
 * Stops all synthesized audio and immediately closes active AudioContext instances,
 * ensuring complete silence when entering the portfolio profile.
 */
export const stopAllAudio = () => {
  try {
    if (audioCtx) {
      if (audioCtx.state !== 'closed') {
        audioCtx.close().catch(() => {});
      }
      audioCtx = null;
    }
  } catch (err) {
    console.debug('Error stopping audio:', err);
  }
};
