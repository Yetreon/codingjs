module.exports = [
  {
    title: 'Logic-1',
    name: 'cigarParty',
    inputs: [
      '(30, false)',
      '(50, false)',
      '(70, true)',
      '(30, true)',
      '(50, true)',
      '(60, false)',
      '(61, false)',
      '(40, false)',
      '(39, false)',
      '(40, true)',
      '(39, true)',
    ],
    question: `When squirrels get together for a party, they like to have cigars. A squirrel
    party is successful when the number of cigars is between 40 and 60, inclusive. Unless it
    is the weekend, in which case there is no upper bound on the number of cigars. Return
    true if the party with the given values is successful, or false otherwise.`,
  },
  {
    title: 'Logic-1',
    name: 'dateFashion',
    inputs: [
      '(5, 10)',
      '(5, 2)',
      '(5, 5)',
      '(3, 3)',
      '(10, 2)',
      '(2, 9)',
      '(9, 9)',
      '(10, 5)',
      '(2, 2)',
      '(3, 7)',
      '(2, 7)',
      '(6, 2)',
    ],
    question: `You and your date are trying to get a table at a restaurant. The parameter
    "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness
    of your date's clothes. The result getting the table is encoded as an int value with 0=no,
    1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes).
    With the exception that if either of you has style of 2 or less, then the result is 0 (no).
    Otherwise the result is 1 (maybe).`,
  },
  {
    title: 'Logic-1',
    name: 'squirrelPlay',
    inputs: [
      '(70, false)',
      '(95, false)',
      '(95, true)',
      '(90, false)',
      '(90, true)',
      '(50, false)',
      '(50, true)',
      '(100, false)',
      '(100, true)',
      '(105, true)',
      '(59, false)',
      '(59, true)',
      '(60, false)',
    ],
    question: `The squirrels in Palo Alto spend most of the day playing. In particular,
    they play if the temperature is between 60 and 90 (inclusive). Unless it is summer,
    then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer,
    return true if the squirrels play and false otherwise.`,
  },
  {
    title: 'Logic-1',
    name: 'caughtSpeeding',
    inputs: [
      '(60, false)',
      '(65, false)',
      '(65, true)',
      '(80, false)',
      '(85, false)',
      '(85, true)',
      '(70, false)',
      '(75, false)',
      '(75, true)',
      '(40, false)',
      '(40, true)',
      '(90, false)',
    ],
    question: `You are driving a little too fast, and a police officer stops you. Write code
    to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.
    If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result
    is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day,
    your speed can be 5 higher in all cases.`,
  },
  {
    title: 'Logic-1',
    name: 'sortaSum',
    inputs: [
      '(3, 4)',
      '(9, 4)',
      '(10, 11)',
      '(12, -3)',
      '(-3, 12)',
      '(4, 5)',
      '(4, 6)',
      '(14, 7)',
      '(14, 6)',
    ],
    question: `Given 2 ints, a and b, return their sum. However, sums in the range 10..19
    inclusive, are forbidden, so in that case just return 20.`,
  },
  {
    title: 'Logic-1',
    name: 'alarmClock',
    inputs: [
      '(1, false)',
      '(5, false)',
      '(0, false)',
      '(6, false)',
      '(0, true)',
      '(6, true)',
      '(1, true)',
      '(3, true)',
      '(5, true)',
    ],
    question: `Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a
    boolean indicating if we are on vacation, return a string of the form "7:00" indicating
    when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend
    it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00"
    and weekends it should be "off".`,
  },
  {
    title: 'Logic-1',
    name: 'love6',
    inputs: [
      '(6, 4)',
      '(4, 5)',
      '(1, 5)',
      '(1, 6)',
      '(1, 8)',
      '(1, 7)',
      '(7, 5)',
      '(8, 2)',
      '(6, 6)',
      '(-6, 2)',
      '(-4, -10)',
      '(-7, 1)',
      '(7, -1)',
      '(-6, 12)',
      '(-2, -4)',
      '(7, 1)',
      '(0, 9)',
      '(8, 3)',
      '(3, 3)',
      '(3, 4)',
    ],
    question: `The number 6 is a truly great number. Given two int values, a and b, return
    true if either one is 6. Or if their sum or difference is 6. Note: the function
    Math.abs(num) computes the absolute value of a number.`,
  },
  {
    title: 'Logic-1',
    name: 'in1To10',
    inputs: [
      '(5, false)',
      '(11, false)',
      '(11, true)',
      '(10, false)',
      '(10, true)',
      '(9, false)',
      '(9, true)',
      '(1, false)',
      '(1, true)',
      '(0, false)',
      '(0, true)',
      '(-1, false)',
    ],
    question: `Given a number n, return true if n is in the range 1..10, inclusive.
    Unless "outsideMode" is true, in which case return true if the number is less or
    equal to 1, or greater or equal to 10.`,
  },
  {
    title: 'Logic-1',
    name: 'specialEleven',
    inputs: [
      '(22)',
      '(23)',
      '(24)',
      '(21)',
      '(11)',
      '(12)',
      '(10)',
      '(9)',
      '(8)',
      '(0)',
      '(1)',
      '(2)',
      '(121)',
      '(122)',
      '(123)',
      '(46)',
      '(49)',
      '(52)',
      '(54)',
      '(55)',
    ],
    question: `We'll say a number is special if it is a multiple of 11 or if it is one more
    than a multiple of 11. Return true if the given non-negative number is special. Use the %
    "mod" operator.`, // TODO add info on mod, up to and incl exercise nearTen
  },
  {
    title: 'Logic-1',
    name: 'more20',
    inputs: [
      '(20)',
      '(21)',
      '(22)',
      '(23)',
      '(25)',
      '(30)',
      '(31)',
      '(59)',
      '(60)',
      '(61)',
      '(62)',
      '(1020)',
      '(1021)',
      '(1000)',
      '(1001)',
      '(50)',
      '(55)',
      '(40)',
      '(41)',
      '(39)',
      '(42)',
    ],
    question: `Return true if the given non-negative number is 1 or 2 more than a
    multiple of 20.`,
  },
  {
    title: 'Logic-1',
    name: 'old35',
    inputs: [
      '(3)',
      '(10)',
      '(15)',
      '(5)',
      '(9)',
      '(8)',
      '(7)',
      '(6)',
      '(17)',
      '(18)',
      '(29)',
      '(20)',
      '(21)',
      '(22)',
      '(45)',
      '(99)',
    ],
    question: `Return true if the given non-negative number is a multiple of 3 or 5,
    but not both. Use the % "mod" operator.`,
  },
  {
    title: 'Logic-1',
    name: 'less20',
    inputs: [
      '(18)',
      '(19)',
      '(20)',
      '(8)',
      '(17)',
      '(23)',
      '(25)',
      '(30)',
      '(31)',
      '(58)',
      '(59)',
      '(60)',
      '(61)',
      '(62)',
      '(1017)',
      '(1018)',
      '(1019)',
      '(1020)',
      '(1021)',
      '(1022)',
      '(1023)',
      '(37)',
    ],
    question: `Return true if the given non-negative number is 1 or 2 less than a
    multiple of 20. So for example 38 and 39 return true, but 40 returns false.`,
  },
  {
    title: 'Logic-1',
    name: 'nearTen',
    inputs: [
      '(12)',
      '(17)',
      '(19)',
      '(31)',
      '(6)',
      '(10)',
      '(11)',
      '(21)',
      '(22)',
      '(23)',
      '(54)',
      '(155)',
      '(158)',
      '(3)',
      '(1)',
    ],
    question: `Given a non-negative number "num", return true if num is within 2 of a
    multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.`,
  },
  {
    title: 'Logic-1',
    name: 'teenSum',
    inputs: [
      '(3, 4)',
      '(10, 13)',
      '(13, 2)',
      '(3, 19)',
      '(13, 13)',
      '(10, 10)',
      '(6, 14)',
      '(15, 2)',
      '(19, 19)',
      '(19, 20)',
      '(2, 18)',
      '(12, 4)',
      '(2, 20)',
      '(2, 17)',
      '(2, 16)',
      '(6, 7)',
    ],
    question: `Given 2 ints, a and b, return their sum. However, "teen" values in the range
    13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.`,
  },
  {
    title: 'Logic-1',
    name: 'answerCell',
    inputs: [
      '(false, false, false)',
      '(false, false, true)',
      '(true, false, false)',
      '(true, true, false)',
      '(false, true, false)',
      '(true, true, true)',
    ],
    question: `Your cell phone rings. Return true if you should answer it. Normally you
    answer, except in the morning you only answer if it is your mom calling. In all cases,
    if you are asleep, you do not answer.`,
  },
  {
    title: 'Logic-1',
    name: 'teaParty',
    inputs: [
      '(6, 8)',
      '(3, 8)',
      '(20, 6)',
      '(12, 6)',
      '(11, 6)',
      '(11, 4)',
      '(4, 5)',
      '(5, 5)',
      '(6, 6)',
      '(5, 10)',
      '(5, 9)',
      '(10, 4)',
      '(10, 20)',
    ],
    question: `We are having a party with amounts of tea and candy. Return the int outcome
    of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and
    candy are at least 5. However, if either tea or candy is at least double the amount of
    the other one, the party is great (2). However, in all cases, if either tea or candy is
    less than 5, the party is always bad (0).`,
  },
  {
    title: 'Logic-1',
    name: 'fizzString',
    inputs: [
      "('fig')",
      "('dib')",
      "('fib')",
      "('abc')",
      "('fooo')",
      "('booo')",
      "('ooob')",
      "('fooob')",
      "('f')",
      "('b')",
      "('abcb')",
      "('Hello')",
      "('Hellob')",
      "('af')",
      "('bf')",
      "('fb')",
    ],
    question: `Given a string str, if the string starts with "f" return "Fizz". If
    the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true,
    return "FizzBuzz". In all other cases, return the string unchanged. `, // TODO add fizzbuzz link
  },
  {
    title: 'Logic-1',
    name: 'fizzString2',
    inputs: [
      '(1)',
      '(2)',
      '(3)',
      '(4)',
      '(5)',
      '(6)',
      '(7)',
      '(8)',
      '(9)',
      '(15)',
      '(16)',
      '(18)',
      '(19)',
      '(21)',
      '(44)',
      '(45)',
      '(100)',
    ],
    question: `Given an int n, return the string form of the number followed by "!". So the
    int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number,
    and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use
    "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10
    yields 3. What will the remainder be when one number divides evenly into another?`, // TODO fizzbuzz code and intro to mod
  },
  {
    title: 'Logic-1',
    name: 'twoAsOne',
    inputs: [
      '(1, 2, 3)',
      '(3, 1, 2)',
      '(3, 2, 2)',
      '(2, 3, 1)',
      '(5, 3, -2)',
      '(5, 3, -3)',
      '(2, 5, 3)',
      '(9, 5, 5)',
      '(9, 4, 5)',
      '(5, 4, 9)',
      '(3, 3, 0)',
      '(3, 3, 2)',
    ],
    question: `Given three ints, a b c, return true if it is possible to add two of the ints
    to get the third.`,
  },
  {
    title: 'Logic-1',
    name: 'inOrder',
    inputs: [
      '(1, 2, 4, false)',
      '(1, 2, 1, false)',
      '(1, 1, 2, true)',
      '(3, 2, 4, false)',
      '(2, 3, 4, false)',
      '(3, 2, 4, true)',
      '(4, 2, 2, true)',
      '(4, 5, 2, true)',
      '(2, 4, 6, true)',
      '(7, 9, 10, false)',
      '(7, 5, 6, true)',
      '(7, 5, 4, true)',
    ],
    question: `Given three ints, a b c, return true if b is greater than a, and c is greater
    than b. However, with the exception that if "bOk" is true, b does not need to be greater
    than a.`,
  },
  {
    title: 'Logic-1',
    name: 'inOrderEqual',
    inputs: [
      '(2, 5, 11, false)',
      '(5, 7, 6, false)',
      '(5, 5, 7, true)',
      '(5, 5, 7, false)',
      '(2, 5, 4, false)',
      '(3, 4, 3, false)',
      '(3, 4, 4, false)',
      '(3, 4, 3, true)',
      '(3, 4, 4, true)',
      '(1, 5, 5, true)',
      '(5, 5, 5, true)',
      '(2, 2, 1, true)',
      '(9, 2, 2, true)',
      '(0, 1, 0, true)',
    ],
    question: `Given three ints, a b c, return true if they are in strict increasing order,
    such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if
    "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.`,
  },
  {
    title: 'Logic-1',
    name: 'lastDigit3',
    inputs: [
      '(23, 19, 13)',
      '(23, 19, 12)',
      '(23, 19, 3)',
      '(23, 19, 39)',
      '(1, 2, 3)',
      '(1, 1, 2)',
      '(1, 2, 2)',
      '(14, 25, 43)',
      '(14, 25, 45)',
      '(248, 106, 1002)',
      '(248, 106, 1008)',
      '(10, 11, 20)',
      '(0, 11, 0)',
    ],
    question: `Given three ints, a b c, return true if two or more of them have the same
    rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the
    remainder, e.g. 17 % 10 is 7.`,
  },
  {
    title: 'Logic-1',
    name: 'lessBy10',
    inputs: [
      '(1, 7, 11)',
      '(1, 7, 10)',
      '(11, 1, 7)',
      '(10, 7, 1)',
      '(-10, 2, 2)',
      '(2, 11, 11)',
      '(3, 3, 30)',
      '(3, 3, 3)',
      '(10, 1, 11)',
      '(10, 11, 1)',
      '(10, 11, 2)',
      '(3, 30, 3)',
      '(2, 2, -8)',
      '(2, 8, 12)',
    ],
    question: `Given three ints, a b c, return true if one of them is 10 or more less
    than one of the others.`,
  },
  {
    title: 'Logic-1',
    name: 'withoutDoubles',
    inputs: [
      '(2, 3, true)',
      '(3, 3, true)',
      '(3, 3, false)',
      '(2, 3, false)',
      '(5, 4, true)',
      '(5, 4, false)',
      '(5, 5, true)',
      '(5, 5, false)',
      '(6, 6, true)',
      '(6, 6, false)',
      '(1, 6, true)',
      '(6, 1, false)',
    ],
    question: `Return the sum of two 6-sided dice rolls, each in the range 1..6. However,
    if noDoubles is true, if the two dice show the same value, increment one die to the next
    value, wrapping around to 1 if its value was 6.`,
  },
  {
    title: 'Logic-1',
    name: 'maxMod5',
    inputs: [
      '(2, 3)',
      '(6, 2)',
      '(3, 2)',
      '(8, 12)',
      '(7, 12)',
      '(11, 6)',
      '(2, 7)',
      '(7, 7)',
      '(9, 1)',
      '(9, 14)',
      '(1, 2)',
    ],
    question: `Given two int values, return whichever value is larger. However if the two
    values have the same remainder when divided by 5, then the return the smaller value.
    However, in all cases, if the two values are the same, return 0. Note: the % "mod"
    operator computes the remainder, e.g. 7 % 5 is 2.`,
  },
  {
    title: 'Logic-1',
    name: 'redTicket',
    inputs: [
      '(2, 2, 2)',
      '(2, 2, 1)',
      '(0, 0, 0)',
      '(2, 0, 0)',
      '(1, 1, 1)',
      '(1, 2, 1)',
      '(1, 2, 0)',
      '(0, 2, 2)',
      '(1, 2, 2)',
      '(0, 2, 0)',
      '(1, 1, 2)',
    ],
    question: `You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1,
    or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same,
    the result is 5. Otherwise so long as both b and c are different from a, the result is 1.
    Otherwise the result is 0.`,
  },
  {
    title: 'Logic-1',
    name: 'greenTicket',
    inputs: [
      '(1, 2, 3)',
      '(2, 2, 2)',
      '(1, 1, 2)',
      '(2, 1, 1)',
      '(1, 2, 1)',
      '(3, 2, 1)',
      '(0, 0, 0)',
      '(2, 0, 0)',
      '(0, 9, 10)',
      '(0, 10, 0)',
      '(9, 9, 9)',
      '(9, 0, 9)',
    ],
    question: `You have a green lottery ticket, with ints a, b, and c on it. If the numbers
    are all different from each other, the result is 0. If all of the numbers are the same,
    the result is 20. If two of the numbers are the same, the result is 10.`,
  },
  {
    title: 'Logic-1',
    name: 'blueTicket',
    inputs: [
      '(9, 1, 0)',
      '(9, 2, 0)',
      '(6, 1, 4)',
      '(6, 1, 5)',
      '(10, 0, 0)',
      '(15, 0, 5)',
      '(5, 15, 5)',
      '(4, 11, 1)',
      '(13, 2, 3)',
      '(8, 4, 3)',
      '(8, 4, 2)',
      '(8, 4, 1)',
    ],
    question: `You have a blue lottery ticket, with ints a, b, and c on it. This makes
    three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair.
    If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10
    more than either bc or ac sums, the result is 5. Otherwise the result is 0.`,
  },
  {
    title: 'Logic-1',
    name: 'shareDigit',
    inputs: [
      '(12, 23)',
      '(12, 43)',
      '(12, 44)',
      '(23, 12)',
      '(23, 39)',
      '(23, 19)',
      '(30, 90)',
      '(30, 91)',
      '(55, 55)',
      '(55, 44)',
    ],
    question: `Given two ints, each in the range 10..99, return true if there is a digit
    that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives
      the left digit while the % "mod" n%10 gives the right digit.)`,
  },
  {
    title: 'Logic-1',
    name: 'sumLimit',
    inputs: [
      '(2, 3)',
      '(8, 3)',
      '(8, 1)',
      '(11, 39)',
      '(11, 99)',
      '(0, 0)',
      '(99, 0)',
      '(99, 1)',
      '(123, 1)',
      '(1, 123)',
      '(23, 60)',
      '(23, 80)',
      '(9000, 1)',
      '(90000000, 1)',
      '(9000, 1000)',
    ],
    question: `Given 2 non-negative ints, a and b, return their sum, so long as the sum has
    the same number of digits as a. If the sum has more digits than a, just return a without
    b. (Note: one way to compute the number of digits of a non-negative int n is to convert it
      to a string with String.valueOf(n) and then check the length of the string.)`,
  },
  { question: 'We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks',
    title: 'Logic-2',
    name: 'makeBricks',
    inputs: [
      '(3, 1, 8)',
      '(3, 1, 9)',
      '(3, 2, 10)',
      '(3, 2, 8)',
      '(3, 2, 9)',
      '(6, 1, 11)',
      '(6, 0, 11)',
      '(1, 4, 11)',
      '(0, 3, 10)',
      '(1, 4, 12)',
      '(3, 1, 7)',
      '(1, 1, 7)',
      '(2, 1, 7)',
      '(7, 1, 11)',
      '(7, 1, 8)',
      '(7, 1, 13)',
      '(43, 1, 46)',
      '(40, 1, 46)',
      '(40, 2, 47)',
      '(40, 2, 50)',
      '(40, 2, 52)',
      '(22, 2, 33)',
      '(0, 2, 10)',
      '(1000000, 1000, 1000100)',
      '(2, 1000000, 100003)',
      '(20, 0, 19)',
      '(20, 0, 21)',
      '(20, 4, 51)',
      '(20, 4, 39)',
    ],
  },
  { question: 'Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.',
    title: 'Logic-2',
    name: 'loneSum',
    inputs: [
      '(1, 2, 3)',
      '(3, 2, 3)',
      '(3, 3, 3)',
      '(9, 2, 2)',
      '(2, 2, 9)',
      '(2, 9, 2)',
      '(2, 9, 3)',
      '(4, 2, 3)',
      '(1, 3, 1)',
    ],
  },
  { question: 'Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.',
    title: 'Logic-2',
    name: 'luckySum',
    inputs: [
      '(1, 2, 3)',
      '(1, 2, 13)',
      '(1, 13, 3)',
      '(1, 13, 13)',
      '(6, 5, 2)',
      '(13, 2, 3)',
      '(13, 2, 13)',
      '(13, 13, 2)',
      '(9, 4, 13)',
      '(8, 13, 2)',
      '(7, 2, 1)',
      '(3, 3, 13)',
    ],
  },
  { question: 'Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().',
    title: 'Logic-2',
    name: 'noTeenSum',
    inputs: [
      '(1, 2, 3)',
      '(2, 13, 1)',
      '(2, 1, 14)',
      '(2, 1, 15)',
      '(2, 1, 16)',
      '(2, 1, 17)',
      '(17, 1, 2)',
      '(2, 15, 2)',
      '(16, 17, 18)',
      '(17, 18, 19)',
      '(15, 16, 1)',
      '(15, 15, 19)',
      '(15, 19, 16)',
      '(5, 17, 18)',
      '(17, 18, 16)',
      '(17, 19, 18)',
    ],
  },
  { question: 'For this problem, we\'ll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().',
    title: 'Logic-2',
    name: 'roundSum',
    inputs: [
      '(16, 17, 18)',
      '(12, 13, 14)',
      '(6, 4, 4)',
      '(4, 6, 5)',
      '(4, 4, 6)',
      '(9, 4, 4)',
      '(0, 0, 1)',
      '(0, 9, 0)',
      '(10, 10, 19)',
      '(20, 30, 40)',
      '(45, 21, 30)',
      '(23, 11, 26)',
      '(23, 24, 25)',
      '(25, 24, 25)',
      '(23, 24, 29)',
      '(11, 24, 36)',
      '(24, 36, 32)',
      '(14, 12, 26)',
      '(12, 10, 24)',
    ],
  },
  { question: 'Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.',
    title: 'Logic-2',
    name: 'closeFar',
    inputs: [
      '(1, 2, 10)',
      '(1, 2, 3)',
      '(4, 1, 3)',
      '(4, 5, 3)',
      '(4, 3, 5)',
      '(-1, 10, 0)',
      '(0, -1, 10)',
      '(10, 10, 8)',
      '(10, 8, 9)',
      '(8, 9, 10)',
      '(8, 9, 7)',
      '(8, 6, 9)',
    ],
  },
  { question: 'Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.',
    title: 'Logic-2',
    name: 'blackjack',
    inputs: [
      '(19, 21)',
      '(21, 19)',
      '(19, 22)',
      '(22, 19)',
      '(22, 50)',
      '(22, 22)',
      '(33, 1)',
      '(1, 2)',
      '(34, 33)',
      '(17, 19)',
      '(18, 17)',
      '(16, 23)',
      '(3, 4)',
      '(3, 2)',
      '(21, 20)',
    ],
  },
  { question: 'Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.',
    title: 'Logic-2',
    name: 'evenlySpaced',
    inputs: [
      '(2, 4, 6)',
      '(4, 6, 2)',
      '(4, 6, 3)',
      '(6, 2, 4)',
      '(6, 2, 8)',
      '(2, 2, 2)',
      '(2, 2, 3)',
      '(9, 10, 11)',
      '(10, 9, 11)',
      '(10, 9, 9)',
      '(2, 4, 4)',
      '(2, 2, 4)',
      '(3, 6, 12)',
      '(12, 3, 6)',
    ] },
  { question: 'We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can\'t be done.',
    title: 'Logic-2',
    name: 'makeChocolate',
    inputs: [
      '(4, 1, 9)',
      '(4, 1, 10)',
      '(4, 1, 7)',
      '(6, 2, 7)',
      '(4, 1, 5)',
      '(4, 1, 4)',
      '(5, 4, 9)',
      '(9, 3, 18)',
      '(3, 1, 9)',
      '(1, 2, 7)',
      '(1, 2, 6)',
      '(1, 2, 5)',
      '(6, 1, 10)',
      '(6, 1, 11)',
      '(6, 1, 12)',
      '(6, 1, 13)',
      '(6, 2, 10)',
      '(6, 2, 11)',
      '(6, 2, 12)',
      '(60, 100, 550)',
      '(1000, 1000000, 5000006)',
      '(7, 1, 12)',
      '(7, 1, 13)',
      '(7, 2, 13)',
    ] },
    { question: 'We want to encode a given decimal number into an hexadecimal number represented using a string containing the characters 0-9 and A-F.',
      title: 'Logic-2',
      name: 'hexEncode',
      inputs: [
        '(123456)',
        '(0)',
        '(15)',
        '(16)',
        '(907)',
        '(2907)',
        '(3907)',
        '(4907)',
        '(5907)',
        '(6907)',
        '(7907)',
        '(8907)',
        '(9907)',
        '(61907)',
        '(6112315412516161)',
        '(Number.MAX_SAFE_INTEGER)',
      ] }
  ];
