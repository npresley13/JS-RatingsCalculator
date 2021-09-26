function collect_ratings() {
    let rating = 0;
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
}

document.addEventListener(change, () => {
    const ratings = collect_ratings();
    ratings.average = document.querySelector(".average").value.toFixed(2);
});

const elements = document.querySelectorAll(".rating");

elements.forEach(function (element) {
    rating = parseInt(element.id.replace("star", ""));
    ratings.count += parseInt(element.value);
    ratings.sum += parseInt(element.value) * rating;
})

if(ratings.count !== 0) {
    ratings.average = sum / count;
    return ratings;
}