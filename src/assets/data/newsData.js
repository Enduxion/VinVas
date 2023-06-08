import images from "./imageData";

function getRandomImage() {
  let indexAt = Math.floor(Math.random() * images.length);
  return images[indexAt];
}
const postData = [
  {
    id: 1,
    title: "The Amazing Adventure",
    date: "2023-06-01",
    punchline: "This is a story about the amazing adventure",
    description:
      "Embark on an extraordinary journey filled with wonder, excitement&, and unexpected twists. Join our intrepid explorers as they traverse uncharted territories, encountering mythical creatures and unraveling ancient mysteries. This epic adventure will test their courage, friendship, and determination as they face thrilling challenges at every turn. Prepare to be captivated by breathtaking landscapes, heart-pounding action, and a story that will leave you on the edge of your seat. Get ready for The Amazing Adventure of a lifetime!",
    img: getRandomImage(),
  },
  {
    id: 2,
    title: "The Enchanted Garden",
    date: "2023-06-02",
    punchline: "This is a story about the enchanted garden",
    description:
      "Step into a realm of enchantment and magic as you discover The Enchanted Garden. Delight in a symphony of colors as vibrant flowers bloom, fairies dance, and whispers of ancient secrets fill the air. Lose yourself in the tranquil beauty of this mystical paradise, where time stands still and dreams come to life. Uncover hidden wonders, encounter mystical creatures, and experience the power of nature's harmony. Immerse yourself in The Enchanted Garden and let your imagination soar.",
    img: getRandomImage(),
  },
  {
    id: 3,
    title: "Quest for the Lost Treasure",
    date: "2023-06-03",
    punchline: "This is a story about the quest for the lost treasure",
    description:
      "Join a fearless group of adventurers on a perilous Quest for the Lost Treasure. Venture into treacherous jungles, traverse treacherous mountains, and explore ancient ruins in search of untold riches. Braving danger and overcoming cunning traps, they will test their wit, teamwork, and resilience. Will they unravel the mysteries of the past and claim the long-forgotten treasure? Embark on this unforgettable expedition and uncover the secrets that lie within.",
    img: getRandomImage(),
  },
  {
    id: 4,
    title: "Mysteries of the Deep",
    date: "2023-06-04",
    punchline: "This is a story about the mysteries of the deep",
    description:
      "Dive into the depths of the ocean and unravel the Mysteries of the Deep. Plunge into an underwater world teeming with vibrant marine life, hidden treasures, and ancient shipwrecks. Encounter majestic creatures, navigate through labyrinthine coral reefs, and discover forgotten civilizations beneath the waves. Immerse yourself in the awe-inspiring beauty and secrets that lie beneath the surface. Prepare to be mesmerized by the wonders that await in this aquatic expedition.",
  },
  {
    id: 5,
    title: "The Magical Circus",
    date: "2023-06-05",
    punchline: "This is a story about the magical circus",
    description:
      "Step right up and experience the wonder of The Magical Circus. Marvel at acrobats defying gravity, clowns bringing laughter, and majestic animals performing astonishing feats. Immerse yourself in a world of imagination and enchantment as you become part of the show. Witness breathtaking acts, discover hidden surprises, and let your senses be dazzled by this spectacular event. Prepare to be amazed as The Magical Circus takes you on a thrilling journey under the big top.",
    img: getRandomImage(),
  },
  {
    id: 6,
    title: "Legends of the Ancient Kingdom",
    date: "2023-06-06",
    punchline: "This is a story about the legends of the animal kingdom",
    description:
      "Uncover the Legends of the Ancient Kingdom as you embark on a quest through time. Journey back to a bygone era of knights, castles, and noble quests. Follow in the footsteps of legendary heroes, solve intricate puzzles, and decipher cryptic codes. As you traverse majestic landscapes and encounter mythical creatures, the tales of old will come to life before your very eyes. Prepare to be swept away by the rich history and grandeur of the Ancient Kingdom.",
    img: getRandomImage(),
  },
  {
    id: 7,
    title: "Space Explorers: A Galactic Odyssey",
    date: "2023-06-07",
    punchline: "This is a story about a galacitc odyssey",
    description:
      "Blast off into a thrilling adventure through the cosmos on Space Explorers: A Galactic Odyssey. Join a courageous crew of astronauts as they journey through the vast expanse of space, encountering alien worlds, celestial wonders, and the mysteries of the universe. Experience zero-gravity excitement, marvel at breathtaking views from the spaceship, and face the unknown in the ultimate quest for knowledge. Prepare to embark on a mind-blowing expedition that will redefine your understanding of the universe.",
  },
  {
    id: 8,
    title: "The Secret Garden",
    date: "2023-06-08",
    punchline: "This is a story about a secret garden",
    description:
      "Discover The Secret Garden, a hidden sanctuary of beauty and tranquility. Wander through lush landscapes, fragrant blooms, and secluded paths that lead to enchanting surprises at every turn. Uncover the magic that lies within this secret haven and witness nature's breathtaking artistry. Find solace, rejuvenation, and inspiration as you immerse yourself in this serene escape from the bustling world outside. The Secret Garden is waiting to reveal its hidden wonders to you.",
    img: getRandomImage(),
  },
  {
    id: 9,
    title: "The Wild West Adventure",
    date: "2023-06-09",
    punchline: "This is a story about the wild west adventure",
    description:
      "Saddle up and ride into the sunset on The Wild West Adventure. Step back in time to the era of cowboys, outlaws, and untamed frontier. Experience the thrill of the open plains, the ruggedness of the mountains, and the excitement of the wild frontier. Test your skills in a high-stakes poker game, embark on a daring stagecoach chase, and witness epic showdowns in dusty saloons. Get ready to live out your wildest Western fantasies in this action-packed escapade.",
    img: getRandomImage(),
  },
  {
    id: 10,
    title: "Journey to the Emerald Isle",
    date: "2023-06-10",
    punchline: "This is a story about the journey to the Emeral isle",
    description:
      "Embark on a captivating Journey to the Emerald Isle, where rolling green hills, ancient castles, and mythical legends await. Immerse yourself in the rich culture, folklore, and natural beauty of Ireland. Traverse rugged landscapes, explore mystical ruins, and revel in the warmth of traditional Irish hospitality. From lively pubs to breathtaking cliffs, every corner of this enchanting island holds a story to be told. Let the spirit of Ireland guide you on this unforgettable adventure.",
    img: getRandomImage(),
  },
];
export default postData;
