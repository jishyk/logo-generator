class shapes {
  constructor() {
    this.color = "";
    this.text = "";
    this.textColor = "";
  }

  setTextColor(TextColorVar) {
    this.textColor = TextColorVar;
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
  setText(textVar) {
    this.text = textVar;
  }

  
}
class Circle extends shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="110" r="60"
     fill="${this.color}"></circle> <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   </svg>`;
  };
};
class Triangle extends shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" 
    fill="${this.color}"></polygon><text x="255" y="170" font-size="35
    " text-anchor="middle" fill="${this.textColor}">${this.text}</text>
       </svg>`;
  }
}

class Square extends shapes {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" 
    fill="${this.color}"></rect> <text x="130" y="112" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  };
};

module.exports = { Triangle, Circle, Square };