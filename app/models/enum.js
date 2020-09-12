const CLIMATE = Object.freeze({
  NEUTRAL: 'NEUTRAL',
  RAIN: 'RAIN',
  SUN: 'SUN',
  SANDSTORM: 'SANDSTORM'
});

const ITEMS = Object.freeze({
  WHITE_GLASSES: 'WHITE_GLASSES'
  , MUSCLE_BAND: 'MUSCLE_BAND'
  , LIFE_ORB: 'LIFE_ORB'
  , COIN_AMULET: 'COIN_AMULET'
  , ROCKY_HELMET: 'ROCKY_HELMET'
  , SHELL_BELL: 'SHELL_BELL'
  , BIG_ROOT: 'BIG_ROOT'
  , APRICOT_BERRY: 'APRICOT_BERRY'
  , LIECHI_BERRY: 'LIECHI_BERRY'
  , GANLON_BERRY: 'GANLON_BERRY'
  , PETAYA_BERRY: 'PETAYA_BERRY'
  , SALAC_BERRY: 'SALAC_BERRY'
  , ORAN_BERRY: 'ORAN_BERRY'
  , SOFT_SAND: 'SOFT_SAND'
  , MOON_STONE: 'MOON_STONE'
  , NIGHT_STONE: 'NIGHT_STONE'
  , POISON_BARB: 'POISON_BARB'
  , DRAGON_FANG: 'DRAGON_FANG'
  , THUNDER_STONE: 'THUNER_STONE'
  , METAL_SKIN: 'METAL_SKIN'
  , METRONOME: 'METRONOME'
  , WATER_STONE: 'WATER_STONE'
  , FIRE_STONE: 'FIRE_STONE'
  , LEAF_STONE: 'LEAF_STONE'
  , BLACK_BELT: 'BLACK_BELT'
  , SILK_SCARF: 'SILK_SCARF'
});

const ITEM_NAME = Object.freeze({
  WHITE_GLASSES: 'White Glasses'
  , MUSCLE_BAND: 'Muscle Band'
  , LIFE_ORB: 'Life Orb'
  , COIN_AMULET: 'Coin Amulet'
  , ROCKY_HELMET: 'Rocky Helmet'
  , SHELL_BELL: 'Shell Bell'
  , BIG_ROOT: 'Big Root'
  , APRICOT_BERRY: 'Apricot Berry'
  , LIECHI_BERRY: 'Liechi Berry'
  , GANLON_BERRY: 'Ganlon Berry'
  , PETAYA_BERRY: 'Petaya Berry'
  , SALAC_BERRY: 'Salac Berry'
  , ORAN_BERRY: 'Oran Berry'
  , SOFT_SAND: 'Soft Sand'
  , MOON_STONE: 'Moon Stone'
  , NIGHT_STONE: 'Night Stone'
  , POISON_BARB: 'Poison Barb'
  , DRAGON_FANG: 'Dragon Fang'
  , THUNDER_STONE: 'Thunder Stone'
  , METAL_SKIN: 'Metal Skin'
  , METRONOME: 'Metronome'
  , WATER_STONE: 'Water Stone'
  , FIRE_STONE: 'Fire Stone'
  , LEAF_STONE: 'Leaf Stone'
  , BLACK_BELT: 'Black Belt'
  , SILK_SCARF: 'Silk Scarf'
});


const ITEM_DESCRIPTION = Object.freeze({
  WHITE_GLASSES: '+10% special attack'
  , MUSCLE_BAND: '+10% attack'
  , LIFE_ORB: '+20% damage, cost 5% life for each attack'
  , COIN_AMULET: 'Chance to drop between 1 and 5 gold at each round'
  , ROCKY_HELMET: 'When user is attacked, the attacker take 12% max health damage'
  , SHELL_BELL: '10% life steal on each attack'
  , BIG_ROOT: '+ 5% health / second restored'
  , APRICOT_BERRY: '+50% spe def when below 50% health'
  , LIECHI_BERRY: '+50% attack when health below 50%'
  , GANLON_BERRY: '+50% def when health below 50%'
  , PETAYA_BERRY: '+50% attack special when health below 50%'
  , SALAC_BERRY: '+50 % attack speed when health below 50%'
  , ORAN_BERRY: 'Restore 25% health when below 25% health'
  , SOFT_SAND: '+50% damage if pokemon has type ground'
  , MOON_STONE: '+20% damage if type Fairy. Will evolve  Eevee into Sylveon.'
  , NIGHT_STONE: '+20% damage if type Dark. Will evolve Eevee into Umbreon.'
  , POISON_BARB: '+20% damage if type poison. Will evolve Eevee into Espeon.'
  , DRAGON_FANG: '+20% damage if type dragon.'
  , THUNDER_STONE: '+20% damage if type electric. Will evolve Eevee into Jolteon.'
  , METAL_SKIN: '+20% damage if type metal.'
  , METRONOME: '+5% damage each time the pokemon attack.'
  , WATER_STONE: '+20% damage if type water. Will evolve Eeve into Vaporeon.'
  , FIRE_STONE: '+20% damage if type fire. Will evolve Eevee into Flareon'
  , LEAF_STONE: '+20% damage if type grass. Will evolve Eevee into Leafon '
  , BLACK_BELT: '+20% damage if type fighting.'
  , SILK_SCARF: '+20% damage if type normal.'
});

const EFFECTS = Object.freeze({
  INGRAIN: 'INGRAIN',
  GROWTH: 'GROWTH',
  SPORE: 'SPORE',
  BLAZE: 'BLAZE',
  DROUGHT: 'DROUGHT',
  DRIZZLE: 'DRIZZLE',
  RAIN_DANCE: 'RAIN_DANCE',
  PRIMORDIAL_SEA: 'PRIMORDIAL_SEA',
  STAMINA: 'STAMINA',
  STRENGTH: 'STRENGTH',
  PURE_POWER: 'PURE_POWER',
  AGILITY: 'AGILITY',
  REVENGE: 'REVENGE',
  PUNISHMENT: 'PUNISHMENT',
  PSYWAVE: 'PSYWAVE',
  MAGIC_ROOM: 'MAGIC_ROOM',
  MEAN_LOOK: 'MEAN_LOOK',
  SCARY_FACE: 'SCARY_FACE',
  IRON_DEFENSE: 'IRON_DEFENSE',
  AUTOTOMIZE: 'AUTOTOMIZE',
  SPIKES: 'SPIKES',
  STEALTH_ROCK: 'STEALTH_ROCK',
  SANDSTORM: 'SANDSTORM',
  POISON_GAS: 'POISON_GAS',
  TOXIC: 'TOXIC',
  INTIMIDATE: 'INTIMIDATE',
  DRACO_METEOR: 'DRACO_METEOR',
  WORK_UP: 'WORK_UP',
  RAGE: 'RAGE',
  ANGER_POINT: 'ANGER_POINT',
  PURSUIT: 'PURSUIT',
  BRUTAL_SWING: 'BRUTAL_SWING',
  POWER_TRIP: 'POWER_TRIP',
  MEDITATE: 'MEDITATE',
  FOCUS_ENERGY: 'FOCUS_ENERGY',
  CALM_MIND: 'CALM_MIND',
  SWARM: 'SWARM',
  STICKY_WEB: 'STICKY_WEB',
  SWIFT_SWIM: 'SWIFT_SWIM',
  HYDO_CANNON: 'HYDRO_CANNON',
  RAZOR_WIND: 'RAZOR_WIND',
  HURRICANE: 'HURRICANE',
  RAIN_DISH: 'RAIN_DISH',
  FLOWER_SHIELD: 'FLOWER_SHIELD',
  BATTLE_ARMOR: 'BATTLE_ARMOR',
  PHANTOM_FORCE: 'PHANTOM_FORCE',
  ATTRACT: 'ATTRACT',
  BABY_DOLL_EYES: 'BABY_DOLL_EYES'
});

const TYPE = Object.freeze({
  NORMAL: 'NORMAL',
  GRASS: 'GRASS',
  FIRE: 'FIRE',
  WATER: 'WATER',
  ELECTRIC: 'ELECTRIC',
  FIGHTING: 'FIGHTING',
  PSYCHIC: 'PSYCHIC',
  DARK: 'DARK',
  METAL: 'METAL',
  GROUND: 'GROUND',
  POISON: 'POISON',
  DRAGON: 'DRAGON',
  FIELD: 'FIELD',
  MONSTER: 'MONSTER',
  HUMAN: 'HUMAN',
  AQUATIC: 'AQUATIC',
  BUG: 'BUG',
  FLYING: 'FLYING',
  FLORA: 'FLORA',
  MINERAL: 'MINERAL',
  AMORPH: 'AMORPH',
  FAIRY: 'FAIRY'
});

const RARITY = Object.freeze({
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  EPIC: 'EPIC',
  LEGENDARY: 'LEGENDARY',
  NEUTRAL: 'NEUTRAL'
});

const COST = Object.freeze({
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 3,
  EPIC: 4,
  LEGENDARY: 5
});

const EXP_TABLE = Object.freeze({
  1: 0,
  2: 2,
  3: 6,
  4: 10,
  5: 20,
  6: 32,
  7: 50,
  8: 70
});

const STATE = Object.freeze({
  FIGHT: 'FIGHT',
  PICK: 'PICK'
});

const STATE_TYPE = Object.freeze({
  MOVING: 'MOVING',
  ATTACKING: 'ATTACKING'
});

const ORIENTATION = Object.freeze({
  DOWNLEFT: 'DOWNLEFT',
  LEFT: 'LEFT',
  UPLEFT: 'UPLEFT',
  UP: 'UP',
  UPRIGHT: 'UPRIGHT',
  RIGHT: 'RIGHT',
  DOWNRIGHT: 'DOWNRIGHT',
  DOWN: 'DOWN'
});

const ATTACK_TYPE = Object.freeze({
  PHYSICAL: 'PHYSICAL',
  SPECIAL: 'SPECIAL'
});

module.exports = {TYPE, RARITY, COST, EXP_TABLE, STATE, STATE_TYPE, ORIENTATION, EFFECTS, CLIMATE, ATTACK_TYPE, ITEMS, ITEM_NAME, ITEM_DESCRIPTION};
