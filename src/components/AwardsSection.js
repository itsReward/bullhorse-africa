export function renderAwards(element, awards) {
    const listHtml = awards.map(award => `
        <li style="margin-bottom: 0.5rem;">
            <strong>${award.year}</strong>: ${award.title} by ${award.organization}
        </li>
    `).join('');

    element.innerHTML = `
        <h2>Company Awards</h2>
        <ul style="list-style: none;">${listHtml}</ul>
    `;
}
