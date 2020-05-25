class Survey {
    constructor() {

    }

    display() {
        var title = createElement("h1");
        title.html("Survey");
        title.position(200,20);

        var nameQ = createElement("p");
        nameQ.html("What is your name ?");
        nameQ.position(200,100);

        var nameQInput = createInput();
        nameQInput.position(200,134);
        
        var q1 = createElement("p");
        q1.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor ?");
        q1.position(200,150);

        var q1Input = createInput();
        q1Input.position(200,184);

        var q2 = createElement("p");
        q2.html("Would you be willing to contribute a small amount every month for such a program ?");
        q2.position(200,200);

        var q2Input = createInput();
        q2Input.position(200,234);

        var q3 = createElement("p");
        q3.html("How much per month would you be willing to pay ?");
        q3.position(200,250);

        var q3Input = createInput();
        q3Input.position(200,284);

        var button = createButton("button");
        button.html("Submit");
        button.position(200,370);
        
        var thank = createElement("h2");

        button.mousePressed(function() {
            title.hide();
            nameQ.hide();
            nameQInput.hide();
            q1.hide();
            q1Input.hide();
            q2.hide();
            q2Input.hide();
            q3.hide();
            q3Input.hide();
            button.hide();

            var name = nameQInput.value();

            var answers = [q1Input.value(), q2Input.value(), q3Input.value()];

            peopleCount++;
            people.update(answers);
            people.updateCount(peopleCount);

            thank.html("Thanks for your suggestions, " + name);
            thank.position(200,200);
        })
    }
}