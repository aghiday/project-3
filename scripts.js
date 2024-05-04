document.addEventListener('DOMContentLoaded', function() {
    // Settings Button Click Event
    var settingsButton = document.querySelector('.settings-btn');
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            alert('Are you sure you want to edit your settings? If so press okay.');
 
        });
    }


    // Main Title Mouseover and Mouseout Events
    var mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.addEventListener('mouseover', function() {
            mainTitle.style.color = 'blue';
        });
        mainTitle.addEventListener('mouseout', function() {
            mainTitle.style.color = '';
        });
    }

    // Input Focus and Blur Events for background color change
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            input.style.backgroundColor = 'lightblue';
        });
        input.addEventListener('blur', function() {
            input.style.backgroundColor = '';
        });
    });

    // Edit Button Click Event
    var editButton = document.querySelector('.edit-btn');
    if (editButton) {
        editButton.addEventListener('click', function() {
            console.log('Edit profile clicked');
        });
    }

    // Match Buttons Click Events
    var matchButtons = document.querySelectorAll('.match-btn');
    matchButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Match button clicked!');
        });
    });

    // Ensure the modal controls work as intended
    var modal = document.getElementById('groupModal');
    var modalButton = document.querySelector('.create-group-btn');
    var closeModal = document.querySelector('.close-btn');

    if (modalButton && modal && closeModal) {
        modalButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
    document.addEventListener('DOMContentLoaded', function() {
        var yesButton = document.getElementById('yes-btn');
        var noButton = document.getElementById('no-btn');
    
        if (yesButton && noButton) {
            yesButton.addEventListener('click', function() {
                alert('You clicked Yes! Advanced settings will be enabled.');
                // You can also add other actions here, like enabling settings
            });
    
            noButton.addEventListener('click', function() {
                alert('You clicked No! Advanced settings will not be enabled.');
                // Additional actions for "No" can be added here
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
    var createGroupForm = document.querySelector('.create-group-submit');
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    createGroupForm.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var checkedCount = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkedCount++;
            }
        });

        if (checkedCount === 0) {
            alert('Please select at least one user to match with.');
        } else if (checkedCount === 1) {
            alert('Please select more than one user to create a group.');
        } else {
            // Put here your original form submission logic if needed
            alert('Group creation in progress...'); // Or actually submit the form
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
    const token = 'YOUR_ACCESS_TOKEN'; // You get this token via OAuth

    // Function to fetch Spotify data
    function fetchSpotifyData(url) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle your data here
            displaySpotifyData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    // Display data
    function displaySpotifyData(data) {
        const musicContainer = document.getElementById('music-container');
        if (musicContainer) {
            data.tracks.items.forEach(track => {
                const element = document.createElement('div');
                element.className = 'track';
                element.innerHTML = `<h3>${track.name}</h3><p>${track.artists[0].name}</p>`;
                musicContainer.appendChild(element);
            });
        }
    }

    // Example API call
    fetchSpotifyData('https://api.spotify.com/v1/search?q=tania%20bowra&type=track');

});

});

