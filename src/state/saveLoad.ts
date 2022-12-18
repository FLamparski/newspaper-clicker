import ClickerState from "./clickerState";

const ns = "ftw.newspapers";
const version = "v1";
const stage = "dev";
const keyPrefix = `${ns}.${version}.${stage}`;
const stateKey = `${keyPrefix}.state`;

export function saveState(state: ClickerState) {
  window.localStorage[stateKey] = JSON.stringify(state);
}

export function loadState(): ClickerState | null {
  if (stateKey in window.localStorage) {
    try {
      const loadedObj: Partial<ClickerState> = JSON.parse(
        window.localStorage[stateKey]
      );
      if (loadedObj._version === 1) {
        return loadedObj as ClickerState;
      }
      console.info("Could not load state, unknown version.", loadedObj);
    } catch (e) {
      console.error("Could not load state, corrupted?", e);
    }
  }
  return null;
}
