class People {
    constructor() {

    }

    getCount() {
        var peopleCountRef = database.ref("peopleCount");
        peopleCountRef.on("value",function(data) {
            peopleCount = data.val();
        })
    }

    updateCount(count) {
        database.ref("/").update({
            peopleCount: count
        })
    }

    update(answers) {
        var peopleIndex = "person " + peopleCount;
        database.ref(peopleIndex).set({
            vote: answers
        })
    }
}