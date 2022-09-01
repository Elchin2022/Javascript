function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(15));

const arr =  ["Bigcorp", "Bigcorp", "Acme", "Bigcorp", "Zork", "Zork", "Abc", "Bigcorp", "Acme", "Bigcorp", "Bigcorp", "Zork", "Bigcorp", "Zork", "Zork", "Bigcorp", "Acme", "Bigcorp", "Acme", "Bigcorp", "Acme", "Littlecorp", "Nadircorp"];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count); // 👉️ {a: 3, b: 1, c: 2}

let sum=0;
for (let i in count) {
     sum+=count[i];

}

let r=[];
for (let i in count) {
     if((count[i]/sum)*100>5) {
        r.push(i)

     }

}

console.log(r)

// ------------------------------------------------------------------------------ miniMaxSum

function minmaxSum(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

        if (min>arr[i]) {
            min=arr[i];
        }
        sum+=arr[i];
    }
    let maxSum=sum-min;
    let minSum=sum-max;
    console.log(minSum+" " + maxSum);
}

minmaxSum([3,1,9,7,5]);

// --------------------miniMaxSum(2)

function miniMaxSum(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-i; j++) {
            if(arr[j]>arr[j+1]) {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    let mins=0;
    let maxs=0;
    // Write your code here
    for (let i=0; i<arr.length-1; i++) {
        mins+=arr[i];

    }

    for (let i=1; i<arr.length; i++) {
        maxs+=arr[i];

    }

    console.log(`${mins} ${maxs}`)

}

miniMaxSum([3,1,9,7,5]);

// ------------------------------------------------------------------------------Diagonal difference

function diagonalDifference(arr) {
    var n = arr.length;
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]]));

// ------------------------------------------------------------------------------ Plus minus

function plusMinus(arr) {
    // Write your code here
    let p = 0;
    let n = 0;
    let z = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            p++;
        } else if (arr[i] < 0) {
            n++;
        } else {
            z++;
        }
    }

    let sum = n + p + z;

    console.log(p / sum);
    console.log(n / sum);
    console.log(z / sum);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// -------------------------------------------------------------------------------Staircase(1)

function staircase(n) {
    let output="";
    // Write your code here
    for (let i=1; i<=n; i++) {
        let h=i;
        let s=n-i;

        while (s>0) {
            output=output+" ";
            s--;
        }
        while (h>0) {

            output=output+"*"
            h--;
        }
        output=output+"\n";

    }
    console.log(output);
}

staircase(10)

------------------------------------------------- Staircase(2)

function staircase(n) {

    let output = ''
    for (let i = 1; i <= n; i++) {
    // i [1-4]
        for (let s = n - 1; s >= i; s--) {
        // s[3-i]
            output += ' '
        }
        for (let h = 1; h <= i; h++) {
        // h [1-i]
            output += '#'
        }
        // new line
        output += "\n"

    }
    // log the final result
    console.log(output)
}
staircase(10)

// --------------------------------------------------------------------------birthday-cake
function birthdayCakeCandles(candles) {

    let tallest = candles[0];
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > tallest) {
            tallest = candles[i];
        }
    }
    let c = 0;
    for (let j = 0; j < candles.length; j++) {
        if (candles[j] == tallest) {
            c += 1;
        }
    }

    return c;
}

console.log(birthdayCakeCandles([4, 4, 1, 8, 8, 8, 3, 5]));

// ------------------------------------------------------------------------------compareTriplets
function compareTriplets(a, b) {
	let r=[0,0];
    // Write your code here
    for(let i=0; i<a.length; i++) {
    	if (a[i]>b[i]) {
    		r[0]++;
    	} else if (b[i]>a[i]) {
    		r[1]++;
    	}
    }
    return r;
}

console.log(compareTriplets([1,2,3],[3,2,1]))
-------------------------------------------------compareTriplets(2)
function compareTriplets(a, b) {
    let score = [0,0]

    for (let i = 0; i < a.length; i++)
        a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
    return score
}

console.log(compareTriplets([1,2,3],[3,2,1]))

// ------------------------------------------------------------------------------timeConversion

function timeConversion(s) {
	// Write your code here
	let AP = s.charAt(8);
	let millitary = "";
	if (AP == "A") {
		if (s.substring(0, 2) == "12") {
			millitary = "00";
		} else {
			millitary = s.substring(0, 2);
		}
	} else {
		if(s.substring(0,2)=="12") {
			millitary=s.substring(0,2);
		} else {
			millitary=parseInt(s.substring(0,2),10)+12;
		}

	}

	return millitary+s.substring(2,8);
}

console.log(timeConversion("07:05:45PM"))

// ------------------------------------------------------------------------------gradingStudents

function gradingStudents(grades) {
	for (let i = 0; i < grades.length; i++) {
		let rm = grades[i] % 5; //rm = remainder
		if (rm != 0 && 5 - rm < 3 && grades[i] >= 38) {
			grades[i] = grades[i] + 5 - rm;
		}
	}
	return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));


// ------------------------------------------------------------------------------
let romanToInt = function(s) {
    const table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (table[s[i]] < table[s[i+1]]) {
            result-=table[s[i]]
        }
        //otherwise, add like normal.
        else {
            result+=table[s[i]]
        }
        console.log(s[i+1])
    }

    return result

};

console.log(romanToInt("IX"))

let longestCommonPrefix = function (a) {
    let index = a[0].length;
    for (let i = 1; i < a.length; i++) {
        if (index > a[i].length) {
            index = a[i].length;
        }
    }

    let newindex=-1;
    for (let j = 0; j < index; j++) {
        for (let e = 0; e < a.length-1; e++) {
            if (a[e][j] == a[e + 1][j]) {
                newindex = j;
            } else {

                return newindex;

            }
        }

    }

    return newindex

};

                                            // longestCommonPrefix

var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(["fl", "flowu", "flowught", "flowught"]))

const isValid = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
        const top = stack[stack.length - 1];
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
            stack.pop();
        } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
            stack.pop();
        } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};