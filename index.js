var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log('\n-----------------------------------');
console.log(chalk.black.bold.bgGreenBright('PRIME NUMBER OR NOT??'));
console.log('------------------------------------');
console.log(chalk.bold.red("Want to know whether you were birthday is prime number or not?"));

var username = readlineSync.question(chalk.rgb(0, 255, 255)('May I know your Name: \n'));


console.log('\n');
console.log(chalk.bold.bgRed(username + ' Let\'s See Whether your Birth Date in a Prime Number'));

var dateOfBirth = readlineSync.question(chalk.rgb(0, 255, 0)('\nPlease Enter your Date of Birth in DD/MM format: '));

var split = dateOfBirth.split('/');

split1 = split[0];

// var date = dateOfBirth.substring(0, 2);
// console.log(date);

if (isNaN(parseInt(split1))) {
    console.log(chalk.redBright('\nPlease Enter a Valid Date Of Birth / Number'));
} else {
    if (split[1] >= 1 && split[1] <= 12) {
        if (split1 >= 1 && split1 <= 31) {
          if(parseInt(split[1]) == 02 && split1 > 29){
            console.log(chalk.redBright('\nPlease Enter a Valid Date'));
          }else{
            var count = 0;
            for (var i = 2; i < split1; i++) {
                if (split1 % i == 0) {
                    count++;
                }
            }
            if (count < 2) {
                console.log(chalk.rgb(255, 255, 0)('\nCongratulations ' + username + ', Your Birth Day ' + split1 + ' is a Prime Number'));
                console.log(chalk.rgb(51, 51, 255)('\nThank You ' + username + ' for Playing this Game. Please Share a Screenshot on Social Media'));
            } else {
                console.log(chalk.rgb(0, 255, 204)('\nSorry ' + username + ', Your Birth Day ' + split1 + ' is not a Prime Number'));
                console.log(chalk.rgb(51, 51, 255)('\nThank You ' + username + ' for Playing this Game.'));
            }
          }
        } else {
            console.log(chalk.redBright('\nPlease Enter a Valid Day'));
        }
    } else {
        console.log(chalk.redBright('\nPlease Enter a Valid Month'));
    }
}
