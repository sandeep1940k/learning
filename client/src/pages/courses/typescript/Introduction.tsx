import React from "react";

const Introduction : React.FC = () => {
    return (
        <>
            <div>
                <img src="/images/Typescript.png" alt="Logo" />
                <ul className="list-disc list-inside p-4">
                    <li>TypeScript is a superset of JavaScript. It is an object-oriented and tightly typed programming language. TypeScript code is transformed to JavaScript, which may be used in any environment that supports JavaScript, including browsers, Node.js and your own applications.</li>
                    <li>Anders Hejlsberg of MICROSOFT created TypeScript. TypeScript was created in response to the limitations of JavaScript for constructing large-scale applications within Microsoft and among its external customers. There was a demand for bespoke tooling to make developing JavaScript components easier due to the complexity of working with complicated JavaScript code.</li>
                    <li>TypeScript is a varient of JavaScript with a few more features. TypeScript extends JavaScript with extra syntax to provide a more robust interface with your editor. TypeScript is a scripting language that is compatible with JavaScript and relies on type inference to deliver advanced functionality without the need for additional code.</li>
                </ul>
            </div>
        </>
    )
}

export default Introduction;