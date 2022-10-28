//Write a function that when given a URL as a
//string, parses out just the domain name and
//returns it as a string. For example:
//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"

// const domainName = (url) => {
//   return url
//     .replace("http://", "")
//     .replace("https://", "")
//     .replace("www.", "")
//     .split(".")[0];
// };

const domainName = (url) => url.replace(/.*\/\/|www.|\..*/g, ``);

console.log(domainName("http://google.com")); // expect "google"
console.log(domainName("https://google.co.jp")); // expect "google"
console.log(domainName("www.xakep.ru")); // expect "xakep"
console.log(domainName("https://youtube.com")); // expect "youtube"
