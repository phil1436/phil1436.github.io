let right = document.getElementById('right');
let left = document.getElementById('left');
const windowwidthCenter = window.innerWidth / 2;
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log(value);

    //about
    let about = document.getElementById('about');
    if (value > 1200 && value < 2200) {
        about.style.position = 'fixed';
        about.style.top = '60px';
    } else if (value >= 2200) {
        about.style.position = 'relative';
        about.style.top = '2000px';
    } else if (value <= 1200) {
        about.style.position = 'relative';
        about.style.top = '1000px';
    }

    // contact
    let contact = document.getElementById('contact');
    if (value > 3400 && value < 4400) {
        contact.style.position = 'fixed';
        contact.style.top = '100px';
    } else if (value >= 4400) {
        contact.style.position = 'relative';
        contact.style.top = '3900px';
    } else if (value <= 3400) {
        contact.style.position = 'relative';
        contact.style.top = '3000px';
    }
    //repos
    let downRepo = 6000;
    showRepo(value, 'ownobjectscriptextension', downRepo, downRepo + 2000);
    showRepo(value, 'owngitextension', downRepo + 2000, downRepo + 4000);
    showRepo(value, 'ownvscodeextension', downRepo + 4000, downRepo + 6000);
    showRepo(value, 'mtconnect-objectscript', downRepo + 6000, downRepo + 8000);
    showRepo(value, 'node-red-contrib-iris', downRepo + 8000, downRepo + 10000);

    let upperRepo = 17000;

    let repos = document.getElementById('repos');
    if (value > 5800 && value < upperRepo) {
        repos.style.position = 'fixed';
        repos.style.top = '100px';
    } else if (value >= upperRepo) {
        repos.style.position = 'relative';
        repos.style.top = upperRepo - 700 + 'px';
    } else if (value <= 5800) {
        repos.style.position = 'relative';
        repos.style.top = '5000px';
    }

    if (value > upperRepo + 1000) {
        if ((value - (upperRepo + 1000)) * 0.5 > window.innerWidth / 2 - 150)
            return;
        left.style.left = (value - (upperRepo + 1000)) * 0.5 + 'px';

        right.style.left =
            window.innerWidth - 300 - (value - (upperRepo + 1000)) * 0.5 + 'px';
        return;
    }

    if (windowwidthCenter - value * 0.5 - 150 > 0) {
        right.style.left = window.innerWidth / 2 + value * 0.5 - 150 + 'px';
        left.style.left = window.innerWidth / 2 - value * 0.5 - 150 + 'px';
    } else {
        right.style.left = window.innerWidth - 300 + 'px';
        left.style.left = 0 + 'px';
    }
});

const blob = document.getElementById('blob');
document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
    );
};

function showRepo(value, id, from, to) {
    let repo = document.getElementById(id);
    /* if (value > from && value < to) {
        repo.style.display = 'flex';
    } else {
        repo.style.display = 'none';
    } */
    if (value > to) {
        repo.style.left = '-3000px';
        return;
    }
    if (value < from) {
        repo.style.left = '-3000px';
        return;
    }

    if (value < from + 100) repo.style.left = value - from + 'px';
    if (value > from + 800) repo.style.left = value - (from + 700) + 'px';
}
