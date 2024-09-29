import React from "react";

const DeclareVariable: React.FC = () => {
    return (
        <>
            <h1 className="font-bold py-2">Declaring Variables</h1>
            <div>
                <ul className="list-disc list-inside">
                    <li><span className="font-semibold">let</span> and <span className="font-semibold">const</span> are the two methods to declare variables.</li>
                    <li>Alphabets and numeric digits can both be used in variable names.</li>
                    <li>Except for the underscore (<code>_</code>) and the dollar sign (<code>$</code>), variable names cannot contain spaces or special characters.</li>
                    <li>A digit can't be the first character in a variable name.</li>
                </ul>

                <h2 className="font-semibold mt-4">Example 1: Using <code>let</code></h2>
                <pre className="bg-gray-100 p-2 rounded-md">
                    <code>let a = 10;</code>
                </pre>

                <h2 className="font-semibold mt-4">Example 2: Inside a function</h2>
                <pre className="bg-gray-100 p-2 rounded-md">
                    <code>
                        {`function f() {
    var message = "Hello, world!";
    return message;
}`}
                    </code>
                </pre>
            </div>
        </>
    )
}

export default DeclareVariable;
