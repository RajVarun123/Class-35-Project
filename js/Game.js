class Game {
    constructor() {

    }

    getstate() {
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }

    start() {
        if(gameState === 0) {
            people = new People();
            people.getCount();

            survey = new Survey();
            survey.display();
        }
    }
}