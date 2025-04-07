let leaves = [];
let angles = []; // 儲存每個笑臉的旋轉角度

function setup() {
  // 產生一個全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  // 畫布顏色為9a8c98
  background(154, 140, 152);

  // 生成40個笑臉
  for (let i = 0; i < 40; i++) {
    leaves.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    });
    angles.push(random(TWO_PI)); // 初始化每個笑臉的旋轉角度
  }
}

function draw() {
  // 清除畫布
  background(154, 140, 152);

  // 根據滑鼠的左右移動改變笑臉的大小
  let sizeOffset = map(mouseX, 0, width, 20, 80);

  // 繪製笑臉
  for (let i = 0; i < leaves.length; i++) {
    let leaf = leaves[i];
    let angle = angles[i];

    // 更新旋轉角度
    angles[i] += 0.02; // 每次繪製時增加旋轉角度

    push(); // 儲存當前繪圖狀態
    translate(leaf.x, leaf.y); // 將原點移動到笑臉的位置
    rotate(angle); // 旋轉畫布

    // 繪製圓圈作為笑臉的頭
    fill(leaf.color);
    noStroke();
    ellipse(0, 0, leaf.size + sizeOffset, leaf.size + sizeOffset);

    // 繪製眼睛
    fill(0); // 黑色眼睛
    let eyeOffset = (leaf.size + sizeOffset) / 5;
    ellipse(-eyeOffset, -eyeOffset, eyeOffset / 2, eyeOffset / 2);
    ellipse(eyeOffset, -eyeOffset, eyeOffset / 2, eyeOffset / 2);

    // 繪製嘴巴
    noFill();
    stroke(0); // 黑色嘴巴
    strokeWeight(2);
    let mouthWidth = (leaf.size + sizeOffset) / 2;
    arc(0, eyeOffset / 2, mouthWidth, mouthWidth / 2, 0, PI);

    pop(); // 恢復繪圖狀態
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}
