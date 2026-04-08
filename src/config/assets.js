const baseUrl = import.meta.env.BASE_URL;

export const ASSETS = {
  LOGO: `${baseUrl}images/logo.png`,
  LOBBY_BG: `${baseUrl}images/lobby-main.jpg`,
  CUBES_BG: `${baseUrl}images/cubes-bg.jpg`,
};

export function applyThemeImageVars() {
  document.documentElement.style.setProperty('--img-lobby', `url("${ASSETS.LOBBY_BG}")`);
  document.documentElement.style.setProperty('--img-cubes', `url("${ASSETS.CUBES_BG}")`);
}
