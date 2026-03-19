const { ESLint } = require("eslint");
const fs = require("fs");

async function main() {
    const eslint = new ESLint();
    const results = await eslint.lintFiles(["src/**/*.ts", "src/**/*.tsx"]);

    let report = "# ESLint Error Report\n\n";
    let errorCount = 0;

    results.forEach(result => {
        const errors = result.messages.filter(m => m.severity === 2);
        if (errors.length > 0) {
            report += `## ${result.filePath}\n`;
            errors.forEach(err => {
                report += `- Line ${err.line}: ${err.message} (${err.ruleId})\n`;
                errorCount++;
            });
            report += "\n";
        }
    });

    report += `**Total Errors:** ${errorCount}\n`;
    fs.writeFileSync("lint_report.md", report);
    console.log("Report saved to lint_report.md");
}

main().catch(console.error);
