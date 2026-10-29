  const detailsBtn = document.getElementById('details-btn');
        const details = document.getElementById('details');
        const themeBtn = document.getElementById('theme-btn');

          // Simple Toggle Details
        detailsBtn.addEventListener('click', () => {
            details.hidden = !details.hidden; 
        });

        // Simple Toggle Theme (switches between black and white)
        themeBtn.addEventListener('click', () => {
            if (document.body.style.backgroundColor === 'black') {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            } else {
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
            }
        });