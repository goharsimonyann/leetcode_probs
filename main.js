//  LENGTH METHOD IMPLEMENTATION
function strLength(str) {
  let length = 0;
  for (let char of str) {
    length++;
  }
  return length;
}

//  LEETCODE 1

function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

//  LEETCODE 4

function findMedianSortedArrays(nums1, nums2) {
  let mergedArr = nums1.concat(nums2);
  mergedArr.sort((a, b) => a - b);
  if (mergedArr.length % 2 !== 0) {
    let index = Math.floor(mergedArr.length / 2);
    return mergedArr[index];
  } else {
    let index = Math.floor(mergedArr.length / 2);
    return (mergedArr[index] + mergedArr[index - 1]) / 2;
  }
}

//  LEETCODE 9

function isPalindrome(x) {
  x = "" + x;
  console.log(x);
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] === x[x.length - 1 - i]) {
      continue;
    } else return false;
  }
  return true;
}

//  LEETCODE 13
function romanToInteger(s) {
  let num = 0;

  if (s.includes("CM")) num -= 200;
  if (s.includes("CD")) num -= 200;
  if (s.includes("XC")) num -= 20;
  if (s.includes("XL")) num -= 20;
  if (s.includes("IX")) num -= 2;
  if (s.includes("IV")) num -= 2;

  for (let i = 0; i < s.length; i++) {
    s[i] === "I" ? (num += 1) : num;
    s[i] === "V" ? (num += 5) : num;
    s[i] === "X" ? (num += 10) : num;
    s[i] === "L" ? (num += 50) : num;
    s[i] === "C" ? (num += 100) : num;
    s[i] === "D" ? (num += 500) : num;
    s[i] === "M" ? (num += 1000) : num;
  }

  return num;
}

//  LEETCODE 14
function longestConsecutivePrefix(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return prefix;
    }
    prefix += strs[0][i];
  }
  return prefix;
}

//  LEETCODE 28
var strStr = function (haystack, needle) {
  let piece = "";

  for (let i = 0; i < haystack.length; ++i) {
    for (let j = 0, k = i; j < needle.length; ++j, ++k) {
      piece += haystack[k];
    }

    if (piece === needle) return i;
    piece = "";
  }

  return -1;
};

//  LEETCODE 34
function findIndexOf(arr, target) {
  let firstIndex,
    lastIndex,
    res = [];

  firstIndex = arr.findIndex((el) => el === target);
  lastIndex = arr.findLastIndex((el) => el === target);

  res.push(firstIndex, lastIndex);
  return res;
}

function findIndexOf2(nums, target) {
  let firstIndex = nums.indexOf(target);
  let lastIndex = nums.lastIndexOf(target);
  let res = [firstIndex, lastIndex];
  return res;
}

//  LEETCODE 58
var lengthOfLastWord = function (s) {
  let arr = s.split(" ").filter((el) => el.length !== 0);
  return arr[arr.length - 1].length;
};

//  LEETCODE 125
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return s == s.split("").reverse().join("");
};

//  LEETCODE 349
var intersection = function (nums1, nums2) {
  let res = new Set();
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; ++i) {
      nums2.includes(nums1[i]) ? res.add(nums1[i]) : "";
    }
    return [...res];
  }

  for (let i = 0; i < nums2.length; ++i) {
    nums1.includes(nums2[i]) ? res.add(nums2[i]) : "";
  }

  return [...res];
};

//  LEETCODE 697
var findShortestSubArray = function (nums) {
  let hashtable = nums.reduce((aggr, num) => {
    aggr[num] ? aggr[num]++ : (aggr[num] = 1);
    return aggr;
  }, {});

  const degree = Math.max(...Object.values(hashtable));
  hashtable = Object.keys(hashtable).filter((el) => hashtable[el] === degree);

  for (let i = 0; i < x.length; ++i) {
    x[i] = nums.lastIndexOf(+x[i]) - nums.indexOf(+x[i]) + 1;
  }

  return Math.min(...x);
};

//  LEETCODE 907
var sortArrayByParity = function (nums) {
  let evens = [],
    odds = [];
  nums.filter((num) => (num % 2 ? odds.push(num) : evens.push(num)));
  return [...evens, ...odds];
};

//  LEETCODE 929
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let i = 0; i < emails.length; ++i) {
    const arr = emails[i].split("@");

    arr[0] = arr[0].split("+")[0];
    arr[0] = arr[0].replaceAll(".", "");

    set.add(arr.join("@"));
  }

  return set.size;
};
//  LEETCODE 1441
var buildArray = function (target, n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    res.push("Push");
    target.includes(i) ? "" : res.push("Pop");
    if (target[target.length - 1] === i) break;
  }
  return res;
};

//  LEETCODE 1748
var sumOfUnique = function (nums) {
  let frequencies = nums.reduce((aggr, num) => {
    aggr[num] ? aggr[num]++ : (aggr[num] = 1);
    return aggr;
  }, {});
  return Object.keys(frequencies)
    .filter((key) => frequencies[key] === 1)
    .reduce((aggr, num) => (aggr += Number(num)), 0);
};

//  LEETCODE 2367
function arithmeticTriplets(nums, diff) {
  let tripletCount = 0;
  for (let k = 0; k < nums.length; k++) {
    for (let j = k + 1; j < nums.length; j++) {
      for (let i = j + 1; i < nums.length; i++) {
        if (nums[i] - nums[j] === diff && nums[j] - nums[k] === diff) {
          tripletCount++;
        }
      }
    }
  }
  return tripletCount;
}
