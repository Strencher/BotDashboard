module.exports = code => {
   const svg = code.replace("module.exports = \"").slice(0, -1);
   return `import React from "react";\n\nexport default props => React.createElement("div", {\n\tclassName: "svgIcon",\n\tdangerouslySetInnerHTML: {__html: \`${svg}\`}, \n\t...props})`;
}