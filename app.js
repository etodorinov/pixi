const Application = PIXI.Application;

const app = new Application();

app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";

document.body.append(app.view);

let enemyTexture = PIXI.Texture.from("./images/enemy1.png");
let enemy = new PIXI.Sprite(enemyTexture);

app.stage.addChild(enemy);
enemy.anchor.set(0.5, 0.5);
enemy.rotation = 3.15;
enemy.x = Math.random() * window.innerWidth + 1.5;

app.ticker.add((delta) => enemyLoop(delta));

function enemyLoop(delta) {
  console.log(1000 + delta * 1000);
  enemy.y += 2;

  if (Number(enemy.getGlobalPosition().y) >= Number(window.innerHeight)) {
    console.log("must be removed");
    enemy.destroy();

    enemyTexture = PIXI.Texture.from("./images/enemy1.png");
    enemy = new PIXI.Sprite(enemyTexture);

    app.stage.addChild(enemy);
    enemy.anchor.set(0.5, 0.5);
    enemy.rotation = 3.15;
    enemy.x = Math.random() * window.innerWidth ;
  }
}
