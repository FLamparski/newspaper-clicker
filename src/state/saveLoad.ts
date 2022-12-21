import ClickerState from "./clickerState";

export const saveVersion = 1;

const ns = "ftw.newspapers";
const version = `v${saveVersion}`;
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
      if (loadedObj._version === saveVersion) {
        return upgradeOldClickerState(loadedObj);
      }
      console.info("Could not load state, unknown version.", loadedObj);
    } catch (e) {
      console.error("Could not load state, corrupted?", e);
    }
  }
  return null;
}

function upgradeOldClickerState(
  oldClickerState: Partial<ClickerState> & {
    buildings?: Partial<ClickerState["buildings"]>;
  }
): ClickerState {
  return {
    _version: saveVersion,
    basePapersPerSecond: 0,
    papersCount: 0,
    papersEver: 0,
    ...oldClickerState,
    buildings: {
      ...oldClickerState.buildings,
      PAPER_BOY: oldClickerState.buildings?.PAPER_BOY || 0,
      LASER_PRINTER: oldClickerState.buildings?.LASER_PRINTER || 0,
      MOLE_SKIN_NOTEBOOK: oldClickerState.buildings?.MOLE_SKIN_NOTEBOOK || 0,
      CAMERA: oldClickerState.buildings?.CAMERA || 0,
      POLICE_SCANNER: oldClickerState.buildings?.POLICE_SCANNER || 0,
    },
  };
}
