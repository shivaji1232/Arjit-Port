import { initAnimations } from "./animations.js";

const root = document.documentElement;
root.classList.add("js");

const finishIntro = () => {
  window.setTimeout(() => root.classList.add("is-ready"), 520);
};

finishIntro();
initAnimations();

async function initScenes() {
  const hosts = [
    { hostId: "hero-scene", canvasId: "hero-canvas", type: "hero" },
    { hostId: "universe-scene", canvasId: "universe-canvas", type: "universe" }
  ];

  try {
    const { createScene } = await import("./scene.js");
    hosts.forEach(({ hostId, canvasId, type }) => {
      const host = document.getElementById(hostId);
      try {
        createScene({ host, canvas: document.getElementById(canvasId), type });
      } catch (error) {
        host.classList.add("is-static");
        console.warn(`The ${type} 3D scene is unavailable; showing its static fallback.`, error);
      }
    });
  } catch (error) {
    hosts.forEach(({ hostId }) => document.getElementById(hostId)?.classList.add("is-static"));
    console.warn("Three.js could not be loaded; showing static scene fallbacks.", error);
  }
}

initScenes();

const year = document.getElementById("current-year");
year.textContent = String(new Date().getFullYear());
