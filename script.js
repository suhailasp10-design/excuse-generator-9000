const excuseFragments = {
  openings: [
    'I was unable to attend because',
    'I had to skip it because',
    'A very serious issue came up: ',
    'The universe conspired against me because',
    'My schedule was hijacked by this: '
  ],
  reasons: [
    'my goldfish filed for emotional support and needed me in court.',
    'the toaster started a blockchain startup in my kitchen.',
    'my pet turtle demanded a 3-hour negotiation session.',
    'the Wi-Fi decided it was a dramatic artist and went on strike.',
    'my coffee mug staged a protest and refused to cooperate.',
    'a raccoon stole my important notes and left a passive-aggressive ransom note.',
    'my laundry basket became sentient and started a revolt.',
    'the printer ran away with my deadline and never came back.',
    'my alarm clock was abducted by a rogue squirrel.',
    'I was trapped in a very intense staring contest with a pigeon.'
  ],
  endings: [
    'So, unfortunately, I must respectfully decline.',
    'Needless to say, I was forced to prioritize this emergency.',
    'It was a completely valid and not-at-all-made-up emergency.',
    'As a result, my presence was impossible for the foreseeable future.',
    'This was an unavoidable matter of utmost importance.'
  ]
};

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateExcuse() {
  const excuseElement = document.getElementById('excuse');

  if (!excuseElement) {
    return;
  }

  const opening = getRandomItem(excuseFragments.openings);
  const reason = getRandomItem(excuseFragments.reasons);
  const ending = getRandomItem(excuseFragments.endings);

  excuseElement.textContent = `${opening} ${reason} ${ending}`;
}

window.addEventListener('DOMContentLoaded', () => {
  generateExcuse();
});
