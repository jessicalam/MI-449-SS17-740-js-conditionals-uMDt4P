/* on a boat
keep sailing -> random (hit a glacier and drown(died), encounter land and its the end of the game(survived), encounter, pirates and they steal some gold from you(move onto next scenario))
stop -> if (decide to go fishing, scuba diving, observe nature)
fishing -> fish a boot
scuba diving -> find a treasure chest
observe nature -> if (use a telescope to look at the water or get someone to go to the top deck, just look at the sunset)
the OR choice -> they find treasure
sunset -> they go blind and die on the ship. */
var boatIntro = window.prompt('YOU ARE ON A BOAT. YOU DON\'T KNOW WHERE YOU ARE BUT YOU HAVE A COUPLE OPTIONS. GOOD LUCK' +
  '\nType in below \'keep sailing\', if you would like to keep sailing' +
    '\nType in below \'stop\', if you would like to dock the boat and do something else')
boatIntro = boatIntro.toLowerCase().trim()
if (boatIntro === 'keep sailing') {
  var randomChoice = Math.random()
  if (randomChoice > 0.7) {
    window.alert('YOU HAVE HIT A GLACIER AND YOU HAVE NO WAY OF SAVING YOURSELF. YOU DROWNED TO DEATH. GOOD BYE')
  } else if (randomChoice > 0.5) {
    window.alert('YOU HAVE HIT A GLACIER AND A SHARK SOMEHOW WAS SWIMMING BY AND ATE YOU. GOOD BYE')
  } else if (randomChoice > 0.3) {
    window.alert('YOU ENCOUNTERED PIRATES, THEY STEAL SOME OF YOUR GOLD. YOU EVENTUALLY KEEP SAILING AND SOMEHOW SURVIVE. CONGRATS')
  } else if (randomChoice > 0.1) {
    window.alert(' YOU HAVE ENCOUNTERED LAND AND YOU ARE RESCUED. YAY! YOU SURVIVED. CONGRATS')
  } else if (randomChoice === null || randomChoice === undefined) {
    window.alert('SOMEHOW THE RANDOM NUMBER ERRORED. ODD. REFRESH THE PAGE.')
  } else {
    window.alert('YOU KEPT SAILING AND EVENTUALLY ENCOUNTERED LAND. YOU WERE FOUND BY A RESCUE TEAM AND YOU WERE TAKEN HOME. YOU SURVIVED. YAY! CONGRATS.')
  }
}
if (boatIntro === 'stop') {
  var sailingPara = window.prompt('SO YOU DECIDED TO STOP.' +
'\nTHAT\'S COOL TOO.' +
'\nIF YOU WANT TO STOP AND FISH PRESS TYPE IN 1' +
'\nIF YOU WANT TO GO SCUBA DIVING TYPE IN 2' +
'\nIF YOU WANT TO OBSERVE NATURE TYPE IN 3' +
'\nIF YOU WANT TO WATCH THE SUNSET TYPE IN 4')
  if (parseFloat(sailingPara) === '1.0') {
    window.alert('YOU FOUND A BOOT. THAT\'S NOT ENOUGH FOR YOU AND YOUR CREW TO SURVIVE. YOU DIED OF STARVATION. GOOD BYE')
  } else if (parseFloat(sailingPara) === '2.0' || '3.0') {
    window.alert('YOU TOOK A MINUTE TO LOOK AROUND BEFORE DIVING INTO THE WATER. YOU EVENTUALLY SEE A TREASURE CHEST IN THE WATER. YOU HAVE AMAZING EYES. SO YOU DOVE INTO THE WATER AND HAULED THE TREASURE CHEST UP. YAY YOU STRUCK GOLD. THERE WAS ALSO A MAP IN THE TREASURE CHEST THAT WAS STIL READABLE SO YOU SURVIVED BECAUSE YOU FOUND LAND. YAY.')
  } else if (parseFloat(sailingPara) === '4.0') {
    window.alert('YOU AND YOUR CREW SPENT SOME TIME LOOKNG AT A SUNSET. THAT WAS A DUMB THING TO DO BECAUSE YOU WENT BLIND AND DIED ON THE SHIP BECAUSE NO ONE COULD SEE ANYTHING. SOME PEOPLE SAY YOU ALL DIED BY HITTING A GLACIER, OTHERS SAY THAT YOU ALL DIED BECAUSE YOU WENT FISHING AND COULD ONLY FIND A BOOT, SO YOU DIED OF STARVATION. ONLY YOU KNOW. GOOD BYE')
  } else if (parseFloat(sailingPara) === null || parseFloat(sailingPara) === undefined) {
    window.alert('SOMEHOW YOU TYPED SOMETHING WRONG OR THE MATH THINGY DID NOT WORK. REFRESH THE PAGE.')
  } else {
    window.alert('YOU STOPPED FOR A LITTLE THEN CONTINUED SAILING AND EVENTUALLY ENCOUNTERED LAND. YOU WERE FOUND BY A RESCUE TEAM AND YOU WERE TAKEN HOME. YOU SURVIVED. YAY! CONGRATS')
  }
}
