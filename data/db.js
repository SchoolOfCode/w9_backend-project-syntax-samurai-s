//database table to be populated on heroku
export const snippets = [
	{
		title: 'Math.floor & Math.random',
		description: 'Returns a random number between 1 and 10.',
		video: 'https://www.youtube.com/watch?v=POn4cZ0jL-o',
		codesyntax: 'Math.floor(Math.random() * 11)',
		docs: 'https://www.w3schools.com/js/js_random.asp',
	},

	{
		title: 'Switch Statement',
		description:
			'Use the switch statement to select one of many code blocks to be executed.',
		video: 'https://www.youtube.com/watch?v=fM5qnyasUYI',
		codesyntax: `switch(expression) {
            case x:
            // code block
            break;
            case y:
             // code block
            break;
            default:
            // code block
            } 
        `,
		docs: 'https://www.w3schools.com/js/js_switch.asp',
	},

	{
		title: 'For Loop',
		description:
			'Use a for loop run the same code over and over again, each time with a different value.',
		video: 'https://www.youtube.com/watch?v=Y8sMnRQYr3c',
		codesyntax: 'for (let i = 0; i <  ; i++) { XX }',
		docs: 'https://www.w3schools.com/js/js_loop_for.asp',
	},

	{
		title: 'Use State',
		description:
			'The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.',
		video: 'https://www.youtube.com/watch?v=4pO-HcG2igk&t=309s',
		codesyntax: 'const [variable , setVariable] = useState(0);',
		docs: 'https://www.w3schools.com/react/react_usestate.asp',
	},

	{
		title: 'While Loop',
		description:
			'Loops can execute a block of code as long as a specified condition is true. The while loop loops through a block of code as long as a specified condition is true. Watch out for endless loops! ',
		video: 'https://www.youtube.com/watch?v=PpbFyLTtpWI',
		codesyntax: `while (condition) {
            //code block to be executed}`,
		docs: 'https://www.w3schools.com/js/js_loop_while.asp',
	},

	{
		title: 'Scroll to Top Feature',
		description:
			'Add function to button/event listener which will scroll to top once clicked',
		video: 'https://www.youtube.com/watch?v=3Jbb3sQVVq0',
		codesyntax: `const scrollTop = () => window.scrollTo(0, 0);
        scrollTop()`,
		docs: 'https://www.w3schools.com/howto/howto_js_scroll_to_top.asp',
	},
	{
		title: 'Copy to clipboard',
		description: 'Copies text to clipboard',
		video: 'https://www.youtube.com/watch?v=pLNCu8js--M',
		codesyntax: `function CopyText() {
          // select the text element.
          let text = document.getElementById('myText');
        // select text. 
            text.select(); 
            text.setSelectionRange(0, 99999);
            // Copying the text inside the text field 
          navigator.clipboard.writeText(text.value); 
          //if you want an a copy alert. 
          alert('Copied the text: ' + text.value); }`,
		docs: 'https://www.w3schools.com/howto/howto_js_copy_clipboard.asp',
	},
	{
		title: 'Sum of positive',
		description: 'Sum all positive numbers in an array',
		video: 'https://www.youtube.com/watch?v=JX5FaT9giIc',
		codesyntax: `function positiveSum(arr) {
                    // code block
                    var arraySum = 0;    //create & set variable arraySum to 0
                    for (i = 0; i < arr.length; i++) {
                     //loop through array
                     if (arr[i] > 0) {
                        arraySum += arr[i];
                        //if positive integer add to arraySum }
                    }
                    } return arraySum;
                    }
                    positiveSum();`,
		docs: 'https://bobbyhadz.com/blog/javascript-get-sum-of-array-of-numbers',
	},
	{
		title: 'Javascript Sum of Array in Odd or Even Numbers',
		description: 'Return odd or even outcome of sum of numbers in an array',
		video: 'https://www.youtube.com/watch?v=NmIbmXTDbUc',
		codesyntax: `function oddOrEven(array) {
          var arraySum = 0;    //create & set variable arraySum to 0;
         if (array.length === 1 && array[0] == 0) {
             //if array length is 1 and number is 0 return even
               return 'even';
            if (array[0] == 1) {
                //nested if; number is 1 return odd
              return 'odd';
                }
           } else if (array.length === 0) {
            //if nothing in array return even
              return 'even';
           } else if (array.length > 0) {
               for (i = 0; i < array.length; i++) {
                 arraySum += array[i];
                 //loop through array and sum total to arraySum
           }
           if ((arraySum % 2) === 0) {
                return 'even'
                //return even if arraySum is divisible by 2
            } else {
              return \"odd\"
              //return odd if arraySum is not divisible by 2
            }
       }
       }
        
        oddOrEven()`,
		docs: 'https://bobbyhadz.com/blog/javascript-find-odd-numbers-in-array',
	},
];
