type RockPaperScissors = "👊🏻" | "🖐🏾" | "✌🏽";

type Wins = {
	"👊🏻": "🖐🏾";
	"🖐🏾": "✌🏽";
	"✌🏽": "👊🏻";
};

type WhoWins<
	Player1 extends RockPaperScissors,
	Player2 extends RockPaperScissors,
> = Player1 extends Player2 ? "draw" : Player2 extends Wins[Player1] ? "win" : "lose";