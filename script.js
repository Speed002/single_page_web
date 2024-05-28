let scrollTicks = 0;
const threshold = 3; // Change this threshold as needed

window.addEventListener('wheel', (event) => {
    // Detect scroll wheel movement
    const deltaY = event.deltaY;
    console.log(deltaY)
    // Increment scrollTicks based on scroll direction
    if (deltaY > 0) {
        scrollTicks++;
    } else if (deltaY < 0) {
        scrollTicks--;
    }

    // console.log('Scroll Ticks:', scrollTicks);

    if (Math.abs(scrollTicks) >= threshold) {
        // Perform action when scrollTicks reaches threshold
        const content1 = document.getElementById('content1');
        const content2 = document.getElementById('content2');
        const content3 = document.getElementById('content3');
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const image3 = document.getElementById('image3');

        if (scrollTicks > 0) {
            // Scroll down action
            if (!content2.classList.contains('hide')) {
                content2.classList.add('hide');
                content2.classList.remove('fade-in'); // Remove fade-in effect before hiding
                content3.classList.remove('hide');
                content3.classList.add('fade-in'); // Apply fade-in effect after showing
                image2.classList.add('hide');
                image3.classList.remove('hide');
                // console.log('Switched to Content 3');
            } else if (!content1.classList.contains('hide')) {
                content1.classList.add('hide');
                content1.classList.remove('fade-in');
                content2.classList.remove('hide');
                content2.classList.add('fade-in');
                image1.classList.add('hide');
                image2.classList.remove('hide');
                // console.log('Switched to Content 2');
            }
        } else {
            // Scroll up action
            if (!content2.classList.contains('hide')) {
                content2.classList.add('hide');
                content2.classList.remove('fade-in');
                content1.classList.remove('hide');
                content1.classList.add('fade-in');
                image2.classList.add('hide');
                image1.classList.remove('hide');
                // console.log('Switched to Content 1');
            } else if (!content3.classList.contains('hide')) {
                content3.classList.add('hide');
                content3.classList.remove('fade-in');
                content2.classList.remove('hide');
                content2.classList.add('fade-in');
                image3.classList.add('hide');
                image2.classList.remove('hide');
                // console.log('Switched to Content 2');
            }
        }

        // Reset scrollTicks after action
        scrollTicks = 0;
    }
});