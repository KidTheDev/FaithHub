// Search Church Function
function searchChurch() {
    // Get the input field value and convert it to lowercase for case-insensitive search
    let input = document.getElementById('searchInput').value.toLowerCase();
    let churchList = document.getElementById('churchList');
    let churches = churchList.getElementsByTagName('li');

    // Loop through the churches and check the 'data-name' attribute for matching search query
    for (let i = 0; i < churches.length; i++) {
        let churchName = churches[i].getAttribute('data-name').toLowerCase();
        if (churchName.includes(input)) {
            churches[i].style.display = "";
        } else {
            churches[i].style.display = "none";
        }
    }
}
