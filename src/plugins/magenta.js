const mm = require("@magenta/music/node/music_vae");
const core = require("@magenta/music/node/core");

const globalAny = global;
globalAny.performance = Date;
globalAny.fetch = require("node-fetch");

const model = new mm.MusicVAE("https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small");
const player = new core.Player();

export { player };
export { model };
