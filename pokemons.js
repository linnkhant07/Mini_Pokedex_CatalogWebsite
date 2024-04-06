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
    { "Id": 27, "Name": "Sandshrew", "Type": ["Ground"], "Total": 300, "HP": 50, "Attack": 75, "Defense": 85, "Sp. Atk": 20, "Sp. Def": 30, "Speed": 40, "Generation": 1, "Description": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies." }
];

export default allPokemons
