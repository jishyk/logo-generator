const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;

const { Triangle, Circle, Square } = require("./lib/shapes.js");

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters (For the Logo)',
    },
    {
      type: 'list',
      name: 'shapeSelection',
      message: 'Choose shape for logo.',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter background color or Hex color.', 
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color.',
    }
  ]);

  let svgInfo;

  switch (answers.shapeSelection) {
    case 'Circle':
      svgInfo = new Circle();
      break;
    case 'Triangle':
      svgInfo = new Triangle();
      break;
    case 'Square':
      svgInfo = new Square();
      break;
    default:
      console.error('Invalid shape selection');
      return;
  }

  svgInfo.setText(answers.text);
  svgInfo.setColor(answers.color);
  svgInfo.setTextColor(answers.textColor);

  const file = './logo/logo.svg';
  try {
    await writeFile(file, svgInfo.render());
    console.log('Successfully created SVG');
  } catch (err) {
    console.error(err);
  }
}

main();
