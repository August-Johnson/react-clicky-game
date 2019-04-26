import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Container from "../Container";
import Row from "../Row";
import Card from "../Card/Card";
import gameCards from "../../cards.json";

class Game extends Component {
    // Setting the state of the message and its color, the original array of cards being imported from cards.json, and the score and highscore.
    // Also setting the state for the card array equal to the json being imported.
    state = {
        originalArray: gameCards,
        temporaryArray: gameCards,
        message: "Click an image to begin!",
        messageColor: "#FFFFFF",
        score: 0,
        highscore: 0
    }

    // Shuffle the order of the counts on initial load.
    componentDidMount() {
        this.shuffleCards();
    }

    // Every update (in this case, clicking a card), run the method that determines whether or not to update the highscore.
    componentDidUpdate() {
        this.highscoreCheck();
        this.handleWinCondition();
    }

    // Method that shuffles the order in which the cards will render.
    // I used the Fisher-Yates Shuffle Algorithm.
    shuffleCards = () => {

        // setting a variable that holds the value equal to the original source of cards in the state.
        const tempArr = this.state.temporaryArray;

        // Take the current index starting at the end of the array.
        // Declare 2 variables, one that temporarily holds the value of the current index.
        // And one that represents a random card index that isn't the one being stored.
        let currentIndex = tempArr.length; // (Left the current index number greater than the index position can go by 1 so I don't have to add it to Math.random later)
        let tempCardValue;
        let randomCard;

        // As long as the current index number is greater than 0.
        while (currentIndex > 0) {

            // Randomly pick an index number from the card array.
            randomCard = Math.floor(Math.random() * currentIndex);

            // Decrement the current index number by 1.
            currentIndex -= 1;

            // Store current card in the temp variable.
            tempCardValue = tempArr[currentIndex];

            // Swap the current card with the randomly chosen card.
            tempArr[currentIndex] = tempArr[randomCard];

            // Set the card that was randomly chosen equal to the card we stored earlier. (switch places).
            tempArr[randomCard] = tempCardValue;
        }
        // Setting the state for the randomized array of cards.
        this.setState({ temporaryArray: tempArr });
    }


    // Method that handles when a user clicks on a card.
    handleClick = (card) => {
        // If the card hasn't been clicked yet, set the click value to true and run the method for a successful guess.
        if (card.clicked === "false") {
            card.clicked = "true";
            this.handleCorrectGuess();
        }
        else {
            // If the card has been clicked, run the method for losing the game.
            this.handleLoseCondition();
        }
        // Re-shuffle the card display order.
        this.shuffleCards();
    }


    // Method for handling when the user loses by clicking an image they have already clicked.
    handleLoseCondition = () => {
        // Resetting the score back to 0 and displaying the message (in red) alerting them they lost.
        this.setState({
            score: 0,
            message: "You Guessed Incorrectly!",
            messageColor: "#FF0000"
        });
        this.resetGame();
    }


    // Method that handles when the user guesses correctly.
    handleCorrectGuess = () => {
        // Incrementing the score by 1 and displaying a message (in green) to the user telling them they have guessed correctly.
        this.setState({
            score: this.state.score + 1,
            message: "You Guessed Correctly!",
            messageColor: "#32CD32"
        });
    }


    // Method that checks if the user has won. (12 points is the maximum you can acheive) 
    // So if the user reaches that score, notify them that they have won and reset the game.
    handleWinCondition = () => {
        if (this.state.score === 12) {
            this.setState({ message: "You Win! Click an image to play again!", messageColor: "#FFFFFF", score: 0 });
            this.resetGame();
        }
    }


    // Method that loops thorugh the temporary array of cards and switches its clicked value back to false if it is true.
    // Sets the state of the original array equal to the array that was looped through.
    resetGame = () => {
        let resetArray = this.state.temporaryArray.forEach((card) => {
            if (card.clicked === "true") {
                card.clicked = "false";
            }
            return card;
        });
        this.setState({ originalArray: resetArray });
    }


    // Method that checks if the user's end score was higher than the current highscore and updates the state accordingly.
    highscoreCheck = () => this.state.score > this.state.highscore ? this.setState({ highscore: this.state.score }) : false


    render() {

        return (
            <div>
                <Navbar message={this.state.message} messageColor={this.state.messageColor} score={this.state.score} highscore={this.state.highscore} />
                <Header />
                <Container>
                    <Row>
                        {/* Passing the card images, card array, and all the necessary methods */}
                        {this.state.temporaryArray.map((card) =>
                            <Card key={card.id} image={card.image} clicked={card.clicked} handleClick={this.handleClick} card={card} />)}
                    </Row>
                </Container>
            </div >
        )
    }
}

export default Game;