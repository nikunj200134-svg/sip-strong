const fs = require('fs');
const path = require('path');

try {
    // Read the potentially UTF-16LE file
    const buffer = fs.readFileSync('lint-errors.json');
    let content = buffer.toString('utf16le');

    // If it doesn't look like JSON, it might be utf8
    if (!content.trim().startsWith('[')) {
        content = buffer.toString('utf8');
        if (!content.trim().includes('[')) {
            console.log("Not a valid json output:", content.substring(0, 100));
            process.exit(1);
        }
        content = content.substring(content.indexOf('['));
    } else {
        content = content.substring(content.indexOf('['));
    }

    const data = JSON.parse(content);
    let errorCount = 0;

    data.forEach(file => {
        const errors = file.messages.filter(m => m.severity === 2);
        if (errors.length > 0) {
            console.log(`\nFile: ${file.filePath}`);
            errors.forEach(err => {
                console.log(`  Line ${err.line}: ${err.message} (${err.ruleId})`);
                errorCount++;
            });
        }
    });

    console.log(`\nTotal Errors: ${errorCount}`);
} catch (e) {
    console.error("Failed to parse:", e);
}
