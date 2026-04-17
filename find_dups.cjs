const fs = require('fs');
const content = fs.readFileSync('src/data/team.js', 'utf8');

const objects = content.replace(/export const \w+\s*=\s*/g, '').replace(/export const \w+\s*=\s*\[/g, '[');
// It's a bit complex to eval, let's just use regex line by line
const lines = content.split('\n');
let data = [];
let current = {};
for(let line of lines) {
    const mId = line.match(/id:\s*(\d+)/);
    if(mId) {
        if(current.id) data.push(current);
        current = { id: mId[1] };
    }
    const mName = line.match(/name:\s*['"](.*?)['"]/);
    if(mName) current.name = mName[1];

    const mInsta = line.match(/instagram:\s*['"](.*?)['"]/);
    if(mInsta) current.instagram = mInsta[1];

    const mGit = line.match(/github:\s*['"](.*?)['"]/);
    if(mGit) current.github = mGit[1];

    const mLink = line.match(/linkedin:\s*['"](.*?)['"]/);
    if(mLink) current.linkedin = mLink[1];
}
if(current.id) data.push(current);

const urlMap = {};
data.forEach(d => {
    ['instagram', 'github', 'linkedin'].forEach(p => {
        if (d[p]) {
            let val = d[p].trim();
            // ignore placeholders
            if (val.includes('inscribe') || val === '') return;
            if (!urlMap[val]) urlMap[val] = [];
            urlMap[val].push(d.name + ' (id: ' + d.id + ')');
        }
    });
});

Object.keys(urlMap).forEach(k => {
    if(urlMap[k].length > 1) {
        console.log('DUPLICATE LINK:', k, '->', urlMap[k].join(' | '));
    }
});
