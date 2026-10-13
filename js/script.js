// I dati stanno in data.js: separo i dati dal comportamento (feedback del tutor)

const teamContainer = document.getElementById('team-container');
const memberForm = document.getElementById('member-form');

// riceve UN membro e restituisce l'HTML della sua card
function createMemberCard(member) {
  const { name, role, email, img } = member;

  return `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="member-card">
        <img src="${img}" alt="${name}">
        <div class="info">
          <h3 class="h5 mb-1">${name}</h3>
          <p class="mb-1">${role}</p>
          <p class="email mb-0">${email}</p>
        </div>
      </div>
    </div>
  `;
}

// stampa tutte le card: accumulo la stringa e tocco il DOM una volta sola
function renderTeam() {
  let cards = '';

  for (let i = 0; i < teamMembers.length; i++) {
    cards += createMemberCard(teamMembers[i]);
  }

  teamContainer.innerHTML = cards;
}

// BONUS: form di aggiunta membri
memberForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const newMember = {
    name: document.getElementById('member-name').value.trim(),
    role: document.getElementById('member-role').value.trim(),
    email: document.getElementById('member-email').value.trim(),
    img: document.getElementById('member-img').value.trim()
  };

  teamMembers.push(newMember);
  renderTeam();
  memberForm.reset();
});

renderTeam();
