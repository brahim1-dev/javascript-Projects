const labels = document.querySelectorAll('.form-control label');

    for (const label of labels) {
        label.innerHTML = label.innerText.split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join('');
    // console.log(label.innerHTML = label.innerText.split(''));
    // label.innerHTML = label.innerText.split('')
    // .map((letter)=> `<span>${letter}</span>`).join('');
}