let fs = require("fs");
// ファイルを読み込むだけ
/*
fs.readFileSync('templete/a.js', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

let outputtext_1 = '';
let outputtext_2 = '';
let outputtext_3 = fs.readFileSync('templete/b.js', 'utf-8');
console.log(outputtext_3);

let read_part = 1;
let readtext_a = fs.readFileSync('templete/a.js', 'utf-8');
let lines_a = readtext_a.toString().split('\n');
for (let line of lines_a) {
    console.log(line)
    if(line == "///////")read_part = 2;
    
    if(read_part == 1) outputtext_1 = outputtext_1 + line + '\n';
    else outputtext_2 = outputtext_2 + line + '\n';
}

fs.writeFileSync('./result.txt', outputtext_1, (err, data) => {
    if(err) console.log(err);
    else console.log('write end_final1');
});

fs.appendFileSync('./result.txt', outputtext_3, (err, data) => {
    if(err) console.log(err);
    else console.log('write end_final3');
});

fs.appendFileSync('./result.txt', outputtext_2, (err, data) => {
    if(err) console.log(err);
    else console.log('write end_final2');
});