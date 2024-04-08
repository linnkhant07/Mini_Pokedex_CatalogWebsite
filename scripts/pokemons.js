//100 pokemons
//CSV File Source: https://github.com/lgreski/pokemonData/blob/master/Pokemon.csv
//CSV entries turned into an array of objects with the help of ChatGPT

let allPokemons = [
    { "Id": 1, "Name": "Bulbasaur", "Type": ["Grass", "Poison"], "Total": 318, "HP": 45, "Attack": 49, "Defense": 49, "Sp. Atk": 65, "Sp. Def": 65, "Speed": 45, "Generation": 1, "Description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon." },
    { "Id": 2, "Name": "Ivysaur", "Type": ["Grass", "Poison"], "Total": 405, "HP": 60, "Attack": 62, "Defense": 63, "Sp. Atk": 80, "Sp. Def": 80, "Speed": 60, "Generation": 1, "Description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs." },
    { "Id": 3, "Name": "Venusaur", "Type": ["Grass", "Poison"], "Total": 525, "HP": 80, "Attack": 82, "Defense": 83, "Sp. Atk": 100, "Sp. Def": 100, "Speed": 80, "Generation": 1, "Description": "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },
    { "Id": 4, "Name": "Charmander", "Type": ["Fire"], "Total": 309, "HP": 39, "Attack": 52, "Defense": 43, "Sp. Atk": 60, "Sp. Def": 50, "Speed": 65, "Generation": 1, "Description": "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly." },
    { "Id": 5, "Name": "Charmeleon", "Type": ["Fire"], "Total": 405, "HP": 58, "Attack": 64, "Defense": 58, "Sp. Atk": 80, "Sp. Def": 65, "Speed": 80, "Generation": 1, "Description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive." },
    { "Id": 6, "Name": "Charizard", "Type": ["Fire", "Flying"], "Total": 534, "HP": 78, "Attack": 84, "Defense": 78, "Sp. Atk": 109, "Sp. Def": 85, "Speed": 100, "Generation": 1, "Description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." },
    { "Id": 7, "Name": "Squirtle", "Type": ["Water"], "Total": 314, "HP": 44, "Attack": 48, "Defense": 65, "Sp. Atk": 50, "Sp. Def": 64, "Speed": 43, "Generation": 1, "Description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." },
    { "Id": 8, "Name": "Wartortle", "Type": ["Water"], "Total": 405, "HP": 59, "Attack": 63, "Defense": 80, "Sp. Atk": 65, "Sp. Def": 80, "Speed": 58, "Generation": 1, "Description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler." },
    { "Id": 9, "Name": "Blastoise", "Type": ["Water"], "Total": 530, "HP": 79, "Attack": 83, "Defense": 100, "Sp. Atk": 85, "Sp. Def": 105, "Speed": 78, "Generation": 1, "Description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." },
    { "Id": 10, "Name": "Caterpie", "Type": ["Bug"], "Total": 195, "HP": 45, "Attack": 30, "Defense": 35, "Sp. Atk": 20, "Sp. Def": 20, "Speed": 45, "Generation": 1, "Description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor." },
    { "Id": 11, "Name": "Metapod", "Type": ["Bug"], "Total": 205, "HP": 50, "Attack": 20, "Defense": 55, "Sp. Atk": 25, "Sp. Def": 25, "Speed": 30, "Generation": 1, "Description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell." },
    { "Id": 12, "Name": "Butterfree", "Type": ["Bug", "Flying"], "Total": 395, "HP": 60, "Attack": 45, "Defense": 50, "Sp. Atk": 90, "Sp. Def": 80, "Speed": 70, "Generation": 1, "Description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers blooming over six miles away." },
    { "Id": 13, "Name": "Weedle", "Type": ["Bug", "Poison"], "Total": 195, "HP": 40, "Attack": 35, "Defense": 30, "Sp. Atk": 20, "Sp. Def": 20, "Speed": 50, "Generation": 1, "Description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose)." },
    { "Id": 14, "Name": "Kakuna", "Type": ["Bug", "Poison"], "Total": 205, "HP": 45, "Attack": 25, "Defense": 50, "Sp. Atk": 25, "Sp. Def": 25, "Speed": 35, "Generation": 1, "Description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch." },
    { "Id": 15, "Name": "Beedrill", "Type": ["Bug", "Poison"], "Total": 395, "HP": 65, "Attack": 90, "Defense": 40, "Sp. Atk": 45, "Sp. Def": 80, "Speed": 75, "Generation": 1, "Description": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm." },
    { "Id": 16, "Name": "Pidgey", "Type": ["Normal", "Flying"], "Total": 251, "HP": 40, "Attack": 45, "Defense": 40, "Sp. Atk": 35, "Sp. Def": 35, "Speed": 56, "Generation": 1, "Description": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings." },
    { "Id": 17, "Name": "Pidgeotto", "Type": ["Normal", "Flying"], "Total": 349, "HP": 63, "Attack": 60, "Defense": 55, "Sp. Atk": 50, "Sp. Def": 50, "Speed": 71, "Generation": 1, "Description": "This Pokémon flies around, patrolling its large territory. If its living space is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws." },
    { "Id": 18, "Name": "Pidgeot", "Type": ["Normal", "Flying"], "Total": 479, "HP": 83, "Attack": 80, "Defense": 75, "Sp. Atk": 70, "Sp. Def": 70, "Speed": 101, "Generation": 1, "Description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon." },
    { "Id": 19, "Name": "Rattata", "Type": ["Normal"], "Total": 253, "HP": 30, "Attack": 56, "Defense": 35, "Sp. Atk": 25, "Sp. Def": 35, "Speed": 72, "Generation": 1, "Description": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere." },
    { "Id": 20, "Name": "Raticate", "Type": ["Normal"], "Total": 413, "HP": 55, "Attack": 81, "Defense": 60, "Sp. Atk": 50, "Sp. Def": 70, "Speed": 97, "Generation": 1, "Description": "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses." },
    { "Id": 21, "Name": "Spearow", "Type": ["Normal", "Flying"], "Total": 262, "HP": 40, "Attack": 60, "Defense": 30, "Sp. Atk": 31, "Sp. Def": 31, "Speed": 70, "Generation": 1, "Description": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger." },
    { "Id": 22, "Name": "Fearow", "Type": ["Normal", "Flying"], "Total": 442, "HP": 65, "Attack": 90, "Defense": 65, "Sp. Atk": 61, "Sp. Def": 61, "Speed": 100, "Generation": 1, "Description": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey." },
    { "Id": 23, "Name": "Ekans", "Type": ["Poison"], "Total": 288, "HP": 35, "Attack": 60, "Defense": 44, "Sp. Atk": 40, "Sp. Def": 54, "Speed": 55, "Generation": 1, "Description": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head." },
    { "Id": 24, "Name": "Arbok", "Type": ["Poison"], "Total": 448, "HP": 60, "Attack": 95, "Defense": 69, "Sp. Atk": 65, "Sp. Def": 79, "Speed": 80, "Generation": 1, "Description": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible." },
    { "Id": 25, "Name": "Pikachu", "Type": ["Electric"], "Total": 320, "HP": 35, "Attack": 55, "Defense": 40, "Sp. Atk": 50, "Sp. Def": 50, "Speed": 90, "Generation": 1, "Description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge." },
    { "Id": 26, "Name": "Raichu", "Type": ["Electric"], "Total": 485, "HP": 60, "Attack": 90, "Defense": 55, "Sp. Atk": 90, "Sp. Def": 80, "Speed": 110, "Generation": 1, "Description": "If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere. Sometimes lightning strikes it!"},
    { "Id": 27, "Name": "Sandshrew", "Type": ["Ground"], "Total": 300, "HP": 50, "Attack": 75, "Defense": 85, "Sp. Atk": 20, "Sp. Def": 30, "Speed": 40, "Generation": 1, "Description": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies." },
    { "Id": 28, "Name": "Sandslash", "Type": ["Ground"], "Total": 450, "HP": 75, "Attack": 100, "Defense": 110, "Sp. Atk": 45, "Sp. Def": 55, "Speed": 65, "Generation": 1, "Description": "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones." },
    { "Id": 29, "Name": "Nidoran♀", "Type": ["Poison"], "Total": 275, "HP": 55, "Attack": 47, "Defense": 52, "Sp. Atk": 40, "Sp. Def": 40, "Speed": 41, "Generation": 1, "Description": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn." },
    { "Id": 30, "Name": "Nidorina", "Type": ["Poison"], "Total": 365, "HP": 70, "Attack": 62, "Defense": 67, "Sp. Atk": 55, "Sp. Def": 55, "Speed": 56, "Generation": 1, "Description": "Nidorina's large ears are always kept upright. If it senses danger, it will attack with all its might." },
    { "Id": 31, "Name": "Nidoqueen", "Type": ["Poison", "Ground"], "Total": 505, "HP": 90, "Attack": 92, "Defense": 87, "Sp. Atk": 75, "Sp. Def": 85, "Speed": 76, "Generation": 1, "Description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young." },
    { "Id": 32, "Name": "Nidoran♂", "Type": ["Poison"], "Total": 273, "HP": 46, "Attack": 57, "Defense": 40, "Sp. Atk": 40, "Sp. Def": 40, "Speed": 50, "Generation": 1, "Description": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice." },
    { "Id": 33, "Name": "Nidorino", "Type": ["Poison"], "Total": 365, "HP": 61, "Attack": 72, "Defense": 57, "Sp. Atk": 55, "Sp. Def": 55, "Speed": 65, "Generation": 1, "Description": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might." },
    { "Id": 34, "Name": "Nidoking", "Type": ["Poison", "Ground"], "Total": 505, "HP": 81, "Attack": 102, "Defense": 77, "Sp. Atk": 85, "Sp. Def": 75, "Speed": 85, "Generation": 1, "Description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it." },
    { "Id": 35, "Name": "Clefairy", "Type": ["Fairy"], "Total": 323, "HP": 70, "Attack": 45, "Defense": 48, "Sp. Atk": 60, "Sp. Def": 65, "Speed": 35, "Generation": 1, "Description": "Clefairy moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights." },
    { "Id": 36, "Name": "Clefable", "Type": ["Fairy"], "Total": 483, "HP": 95, "Attack": 70, "Defense": 73, "Sp. Atk": 95, "Sp. Def": 90, "Speed": 60, "Generation": 1, "Description": "Clefable has an acute sense of hearing. It can hear a pin drop from over a mile away, so it lives deep in the mountains where there is no one to disturb it." },
    { "Id": 37, "Name": "Vulpix", "Type": ["Fire"], "Total": 299, "HP": 38, "Attack": 41, "Defense": 40, "Sp. Atk": 50, "Sp. Def": 65, "Speed": 65, "Generation": 1, "Description": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled." },
    { "Id": 38, "Name": "Ninetales", "Type": ["Fire"], "Total": 505, "HP": 73, "Attack": 76, "Defense": 75, "Sp. Atk": 81, "Sp. Def": 100, "Speed": 100, "Generation": 1, "Description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years." },
    { "Id": 39, "Name": "Jigglypuff", "Type": ["Normal", "Fairy"], "Total": 270, "HP": 115, "Attack": 45, "Defense": 20, "Sp. Atk": 45, "Sp. Def": 25, "Speed": 20, "Generation": 1, "Description": "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy." },
    { "Id": 40, "Name": "Wigglytuff", "Type": ["Normal", "Fairy"], "Total": 435, "HP": 140, "Attack": 70, "Defense": 45, "Sp. Atk": 85, "Sp. Def": 50, "Speed": 45, "Generation": 1, "Description": "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away." },
    { "Id": 41, "Name": "Zubat", "Type": ["Poison", "Flying"], "Total": 245, "HP": 40, "Attack": 45, "Defense": 35, "Sp. Atk": 30, "Sp. Def": 40, "Speed": 55, "Generation": 1, "Description": "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned." },
    { "Id": 42, "Name": "Golbat", "Type": ["Poison", "Flying"], "Total": 455, "HP": 75, "Attack": 80, "Defense": 70, "Sp. Atk": 65, "Sp. Def": 75, "Speed": 90, "Generation": 1, "Description": "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood." },
    { "Id": 43, "Name": "Oddish", "Type": ["Grass", "Poison"], "Total": 320, "HP": 45, "Attack": 50, "Defense": 55, "Sp. Atk": 75, "Sp. Def": 65, "Speed": 30, "Generation": 1, "Description": "During the day, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become." },
    { "Id": 44, "Name": "Gloom", "Type": ["Grass", "Poison"], "Total": 395, "HP": 60, "Attack": 65, "Defense": 70, "Sp. Atk": 85, "Sp. Def": 75, "Speed": 40, "Generation": 1, "Description": "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma." },
    { "Id": 45, "Name": "Vileplume", "Type": ["Grass", "Poison"], "Total": 490, "HP": 75, "Attack": 80, "Defense": 85, "Sp. Atk": 110, "Sp. Def": 90, "Speed": 50, "Generation": 1, "Description": "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be." },
    { "Id": 46, "Name": "Paras", "Type": ["Bug", "Grass"], "Total": 285, "HP": 35, "Attack": 70, "Defense": 55, "Sp. Atk": 45, "Sp. Def": 55, "Speed": 25, "Generation": 1, "Description": "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life." },
    { "Id": 47, "Name": "Parasect", "Type": ["Bug", "Grass"], "Total": 405, "HP": 60, "Attack": 95, "Defense": 80, "Sp. Atk": 60, "Sp. Def": 80, "Speed": 30, "Generation": 1, "Description": "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once." },
    { "Id": 48, "Name": "Venonat", "Type": ["Bug", "Poison"], "Total": 305, "HP": 60, "Attack": 55, "Defense": 50, "Sp. Atk": 40, "Sp. Def": 55, "Speed": 45, "Generation": 1, "Description": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey." },
    { "Id": 49, "Name": "Venomoth", "Type": ["Bug", "Poison"], "Total": 450, "HP": 70, "Attack": 65, "Defense": 60, "Sp. Atk": 90, "Sp. Def": 75, "Speed": 90, "Generation": 1, "Description": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness." },
    { "Id": 50, "Name": "Diglett", "Type": ["Ground"], "Total": 265, "HP": 10, "Attack": 55, "Defense": 25, "Sp. Atk": 35, "Sp. Def": 45, "Speed": 95, "Generation": 1, "Description": "Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables." },
    { "Id": 51, "Name": "Dugtrio", "Type":["Ground"], "Total":425, "HP":35, "Attack":100, "Defense":50, "Sp. Atk":50, "Sp. Def":70, "Speed":120, "Generation":1, "Description": "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground."},
    { "Id": 52, "Name": "Meowth", "Type":["Normal"], "Total":290, "HP":40, "Attack":45, "Defense":35, "Sp. Atk":40, "Sp. Def":40, "Speed":90, "Generation":1, "Description": "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change."},
    { "Id": 53, "Name": "Persian", "Type":["Normal"], "Total":440, "HP":65, "Attack":70, "Defense":60, "Sp. Atk":65, "Sp. Def":65, "Speed":115, "Generation":1, "Description": "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness."},
    { "Id": 54, "Name": "Psyduck", "Type":["Water"], "Total":320, "HP":50, "Attack":52, "Defense":48, "Sp. Atk":65, "Sp. Def":50, "Speed":55, "Generation":1, "Description": "While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers."},
    { "Id": 55, "Name": "Golduck", "Type":["Water"], "Total":500, "HP":80, "Attack":82, "Defense":78, "Sp. Atk":95, "Sp. Def":80, "Speed":85, "Generation":1, "Description": "Often seen swimming elegantly by lakeshores. It is often mistaken for the Japanese monster Kappa."},
    { "Id": 56, "Name": "Mankey", "Type":["Fighting"], "Total":305, "HP":40, "Attack":80, "Defense":35, "Sp. Atk":35, "Sp. Def":45, "Speed":70, "Generation":1, "Description": "Extremely quick to anger. It could be docile one moment then thrashing away the next instant."},
    { "Id": 57, "Name": "Primeape", "Type":["Fighting"], "Total":455, "HP":65, "Attack":105, "Defense":60, "Sp. Atk":60, "Sp. Def":70, "Speed":95, "Generation":1, "Description": "Always furious and tenacious to boot. It will not abandon chasing its quarry until it catches up."},
    { "Id": 58, "Name": "Growlithe", "Type":["Fire"], "Total":350, "HP":55, "Attack":70, "Defense":45, "Sp. Atk":70, "Sp. Def":50, "Speed":60, "Generation":1, "Description": "Very protective of its territory. It will bark and bite to repel intruders from its space."},
    { "Id": 59, "Name": "Arcanine", "Type":["Fire"], "Total":555, "HP":90, "Attack":110, "Defense":80, "Sp. Atk":100, "Sp. Def":80, "Speed":95, "Generation":1, "Description": "A Pokémon that has long been admired for its beauty. It runs agilely as if on wings."},
    { "Id": 60, "Name": "Poliwag", "Type":["Water"], "Total":300, "HP":40, "Attack":50, "Defense":40, "Sp. Atk":40, "Sp. Def":40, "Speed":90, "Generation":1, "Description": "The direction of the spiral on the belly differs by area. It is more adept at swimming than walking."},
    { "Id": 61, "Name": "Poliwhirl", "Type":["Water"], "Total":385, "HP":65, "Attack":65, "Defense":65, "Sp. Atk":50, "Sp. Def":50, "Speed":90, "Generation":1, "Description": "Capable of living in or out of water. When out of water, it sweats to keep its body slimy."},
    { "Id": 62, "Name": "Poliwrath", "Type":["Water", "Fighting"], "Total":510, "HP":90, "Attack":95, "Defense":95, "Sp. Atk":70, "Sp. Def":90, "Speed":70, "Generation":1, "Description": "An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers."},
    { "Id": 63, "Name": "Abra", "Type":["Psychic"], "Total":310, "HP":25, "Attack":20, "Defense":15, "Sp. Atk":105, "Sp. Def":55, "Speed":90, "Generation":1, "Description": "Using its ability to read minds, it will identify impending danger and teleport to safety."},
    { "Id": 64, "Name": "Kadabra", "Type":["Psychic"], "Total":400, "HP":40, "Attack":35, "Defense":30, "Sp. Atk":120, "Sp. Def":70, "Speed":105, "Generation":1, "Description": "Many odd things happen if this Pokémon is close by. For example, it makes clocks run backwards."},
    { "Id": 65, "Name": "Alakazam", "Type":["Psychic"], "Total":500, "HP":55, "Attack":50, "Defense":45, "Sp. Atk":135, "Sp. Def":95, "Speed":120, "Generation":1, "Description": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000."},
    { "Id": 66, "Name": "Machop", "Type":["Fighting"], "Total":305, "HP":70, "Attack":80, "Defense":50, "Sp. Atk":35, "Sp. Def":35, "Speed":35, "Generation":1, "Description": "Loves to build its muscles. It trains in all styles of martial arts to become even stronger."},
    { "Id": 67, "Name": "Machoke", "Type":["Fighting"], "Total":405, "HP":80, "Attack":100, "Defense":70, "Sp. Atk":50, "Sp. Def":60, "Speed":45, "Generation":1, "Description": "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions."},
    { "Id": 68, "Name": "Machamp", "Type":["Fighting"], "Total":505, "HP":90, "Attack":130, "Defense":80, "Sp. Atk":65, "Sp. Def":85, "Speed":55, "Generation":1, "Description": "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon."},
    { "Id": 69, "Name": "Bellsprout", "Type":["Grass", "Poison"], "Total":300, "HP":50, "Attack":75, "Defense":35, "Sp. Atk":70, "Sp. Def":30, "Speed":40, "Generation":1, "Description": "A carnivorous Pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture."},
    { "Id": 70, "Name": "Weepinbell", "Type":["Grass", "Poison"], "Total":390, "HP":65, "Attack":90, "Defense":50, "Sp. Atk":85, "Sp. Def":45, "Speed":55, "Generation":1, "Description": "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid."},
    {"Id": 71, "Name": "Victreebel", "Type": ["Grass", "Poison"], "Total": 490, "HP": 80, "Attack": 105, "Defense": 65, "Sp. Atk": 100, "Sp. Def": 70, "Speed": 70, "Generation": 1, "Description": "Said to live in huge colonies deep in jungles, although no one has ever returned from there."},
    {"Id": 72, "Name": "Tentacool", "Type": ["Water", "Poison"], "Total": 335, "HP": 40, "Attack": 40, "Defense": 35, "Sp. Atk": 50, "Sp. Def": 100, "Speed": 70, "Generation": 1, "Description": "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid."},
    {"Id": 73, "Name": "Tentacruel", "Type": ["Water", "Poison"], "Total": 515, "HP": 80, "Attack": 70, "Defense": 65, "Sp. Atk": 80, "Sp. Def": 120, "Speed": 100, "Generation": 1, "Description": "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey."},
    {"Id": 74, "Name": "Geodude", "Type": ["Rock", "Ground"], "Total": 300, "HP": 40, "Attack": 80, "Defense": 100, "Sp. Atk": 30, "Sp. Def": 30, "Speed": 20, "Generation": 1, "Description": "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them."},
    {"Id": 75, "Name": "Graveler", "Type": ["Rock", "Ground"], "Total": 390, "HP": 55, "Attack": 95, "Defense": 115, "Sp. Atk": 45, "Sp. Def": 45, "Speed": 35, "Generation": 1, "Description": "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction."},
    {"Id": 76, "Name": "Golem", "Type": ["Rock", "Ground"], "Total": 495, "HP": 80, "Attack": 120, "Defense": 130, "Sp. Atk": 55, "Sp. Def": 65, "Speed": 45, "Generation": 1, "Description": "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without taking damage."},
    {"Id": 77, "Name": "Ponyta", "Type": ["Fire"], "Total": 410, "HP": 50, "Attack": 85, "Defense": 55, "Sp. Atk": 65, "Sp. Def": 65, "Speed": 90, "Generation": 1, "Description": "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time."},
    {"Id": 78, "Name": "Rapidash", "Type": ["Fire"], "Total": 500, "HP": 65, "Attack": 100, "Defense": 70, "Sp. Atk": 80, "Sp. Def": 80, "Speed": 105, "Generation": 1, "Description": "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it."},
    {"Id": 79, "Name": "Slowpoke", "Type": ["Water", "Psychic"], "Total": 315, "HP": 90, "Attack": 65, "Defense": 65, "Sp. Atk": 40, "Sp. Def": 40, "Speed": 15, "Generation": 1, "Description": "Incredibly slow and sluggish. It is quite content to loll about without worrying about the time."},
    {"Id": 80, "Name": "Slowbro", "Type": ["Water", "Psychic"], "Total": 490, "HP": 95, "Attack": 75, "Defense": 110, "Sp. Atk": 100, "Sp. Def": 80, "Speed": 30, "Generation": 1, "Description": "It catches prey by dipping its tail in water at the side of a river. But it often forgets what it's doing and spends entire days just loafing at water's edge."},
    {"Id": 81, "Name": "Magnemite", "Type": ["Electric", "Steel"], "Total": 325, "HP": 25, "Attack": 35, "Defense": 70, "Sp. Atk": 95, "Sp. Def": 55, "Speed": 45, "Generation": 1, "Description": "Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves."},
    {"Id": 82, "Name": "Magneton", "Type": ["Electric", "Steel"], "Total": 465, "HP": 50, "Attack": 60, "Defense": 95, "Sp. Atk": 120, "Sp. Def": 70, "Speed": 70, "Generation": 1, "Description": "Formed by several Magnemites linked together. They frequently appear when sunspots flare up."},
    {"Id": 83, "Name": "Farfetch'd", "Type": ["Normal", "Flying"], "Total": 377, "HP": 52, "Attack": 90, "Defense": 55, "Sp. Atk": 58, "Sp. Def": 62, "Speed": 60, "Generation": 1, "Description": "The plant stalk it holds is its weapon. The stalk is used like a sword to cut all sorts of things."},
    {"Id": 84, "Name": "Doduo", "Type": ["Normal", "Flying"], "Total": 310, "HP": 35, "Attack": 85, "Defense": 45, "Sp. Atk": 35, "Sp. Def": 35, "Speed": 75, "Generation": 1, "Description": "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints."},
    {"Id": 85, "Name": "Dodrio", "Type": ["Normal", "Flying"], "Total": 470, "HP": 60, "Attack": 110, "Defense": 70, "Sp. Atk": 60, "Sp. Def": 60, "Speed": 110, "Generation": 1, "Description": "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake."},
    {"Id": 86, "Name": "Seel", "Type": ["Water"], "Total": 325, "HP": 65, "Attack": 45, "Defense": 55, "Sp. Atk": 45, "Sp. Def": 70, "Speed": 45, "Generation": 1, "Description": "The protruding horn on its head is very hard. It is used for bashing through thick ice."},
    {"Id": 87, "Name": "Dewgong", "Type": ["Water", "Ice"], "Total": 475, "HP": 90, "Attack": 70, "Defense": 80, "Sp. Atk": 70, "Sp. Def": 95, "Speed": 70, "Generation": 1, "Description": "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters."},
    {"Id": 88, "Name": "Grimer", "Type": ["Poison"], "Total": 325, "HP": 80, "Attack": 80, "Defense": 50, "Sp. Atk": 40, "Sp. Def": 50, "Speed": 25, "Generation": 1, "Description": "Made of hardened sludge. It smells too putrid to touch. Even weeds won't grow in its path."},
    {"Id": 89, "Name": "Muk", "Type": ["Poison"], "Total": 500, "HP": 105, "Attack": 105, "Defense": 75, "Sp. Atk": 65, "Sp. Def": 100, "Speed": 50, "Generation": 1, "Description": "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison."},
    {"Id": 90, "Name": "Shellder", "Type": ["Water"], "Total": 305, "HP": 30, "Attack": 65, "Defense": 100, "Sp. Atk": 45, "Sp. Def": 25, "Speed": 40, "Generation": 1, "Description": "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open."},
    {"Id": 91, "Name": "Cloyster", "Type": ["Water", "Ice"], "Total": 525, "HP": 50, "Attack": 95, "Defense": 180, "Sp. Atk": 85, "Sp. Def": 45, "Speed": 70, "Generation": 1, "Description": "When attacked, it launches its horns in quick volleys. Its innards have never been seen."},
    {"Id": 92, "Name": "Gastly", "Type": ["Ghost", "Poison"], "Total": 310, "HP": 30, "Attack": 35, "Defense": 30, "Sp. Atk": 100, "Sp. Def": 35, "Speed": 80, "Generation": 1, "Description": "Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice."},
    {"Id": 93, "Name": "Haunter", "Type": ["Ghost", "Poison"], "Total": 405, "HP": 45, "Attack": 50, "Defense": 45, "Sp. Atk": 115, "Sp. Def": 55, "Speed": 95, "Generation": 1, "Description": "Because of its ability to slip through block walls, it is said to be from another dimension."},
    {"Id": 94, "Name": "Gengar", "Type": ["Ghost", "Poison"], "Total": 500, "HP": 60, "Attack": 65, "Defense": 60, "Sp. Atk": 130, "Sp. Def": 75, "Speed": 110, "Generation": 1, "Description": "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright."},
    {"Id": 95, "Name": "Onix", "Type": ["Rock", "Ground"], "Total": 385, "HP": 35, "Attack": 45, "Defense": 160, "Sp. Atk": 30, "Sp. Def": 45, "Speed": 70, "Generation": 1, "Description": "Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett."},
    {"Id": 96, "Name": "Drowzee", "Type": ["Psychic"], "Total": 328, "HP": 60, "Attack": 48, "Defense": 45, "Sp. Atk": 43, "Sp. Def": 90, "Speed": 42, "Generation": 1, "Description": "Puts enemies to sleep, then eats their dreams. Occasionally gets sick from eating bad dreams."},
    {"Id": 97, "Name": "Hypno", "Type": ["Psychic"], "Total": 483, "HP": 85, "Attack": 73, "Defense": 70, "Sp. Atk": 73, "Sp. Def": 115, "Speed": 67, "Generation": 1, "Description": "When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION."},
    {"Id": 98, "Name": "Krabby", "Type": ["Water"], "Total": 325, "HP": 30, "Attack": 105, "Defense": 90, "Sp. Atk": 25, "Sp. Def": 25, "Speed": 50, "Generation": 1, "Description": "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast."},
    {"Id": 99, "Name": "Kingler", "Type": ["Water"], "Total": 475, "HP": 55, "Attack": 130, "Defense": 115, "Sp. Atk": 50, "Sp. Def": 50, "Speed": 75, "Generation": 1, "Description": "The large pincer has 10,000 hp of crushing power. However, its huge size makes it unwieldy to use."},
    {"Id": 100, "Name": "Voltorb", "Type": ["Electric"], "Total": 330, "HP": 40, "Attack": 30, "Defense": 50, "Sp. Atk": 55, "Sp. Def": 55, "Speed": 100, "Generation": 1, "Description": "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people."}




];

export default allPokemons